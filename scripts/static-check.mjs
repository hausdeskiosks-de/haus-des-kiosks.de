import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

import { OPENING_HOURS } from '../site-config.js';
import { translations } from '../script.js';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const htmlFiles = ['index.html', 'impressum.html', 'datenschutz.html', '404.html'];
const canonicalUrls = {
  'index.html': 'https://hausdeskiosks.de/',
  'impressum.html': 'https://hausdeskiosks.de/impressum.html',
  'datenschutz.html': 'https://hausdeskiosks.de/datenschutz.html',
  '404.html': 'https://hausdeskiosks.de/404.html'
};
const allowedExternalResourceOrigins = new Set(['https://www.openstreetmap.org']);
const errors = [];

function check(condition, message) {
  if (!condition) errors.push(message);
}

function matches(source, pattern) {
  return [...source.matchAll(pattern)];
}

function attribute(tag, name) {
  return tag.match(new RegExp(`\\b${name}\\s*=\\s*(["'])(.*?)\\1`, 'i'))?.[2] ?? null;
}

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

function localPath(reference, currentFile) {
  const clean = reference.split(/[?#]/)[0];
  if (!clean || clean === '/') return join(root, 'index.html');
  if (clean.startsWith('/')) return join(root, clean.slice(1));
  return resolve(root, dirname(currentFile), clean);
}

function placeholders(value) {
  return [...value.matchAll(/\{\{?\s*[\w.]+\s*\}?\}|%[a-z]/gi)]
    .map((match) => match[0])
    .sort();
}

const translationLanguages = Object.keys(translations);
check(translationLanguages.join(',') === 'de,tr,en', 'translations: expected exactly de,tr,en');
const referenceKeys = Object.keys(translations.de).sort();
for (const language of translationLanguages) {
  const keys = Object.keys(translations[language]).sort();
  check(
    JSON.stringify(keys) === JSON.stringify(referenceKeys),
    `translations: ${language} keys differ from German`
  );
}
for (const key of referenceKeys) {
  const expected = placeholders(translations.de[key]);
  for (const language of translationLanguages) {
    check(
      JSON.stringify(placeholders(translations[language][key])) === JSON.stringify(expected),
      `translations: placeholder mismatch for ${key} in ${language}`
    );
  }
}

for (const file of htmlFiles) {
  const source = await readFile(join(root, file), 'utf8');
  const ids = matches(source, /\bid\s*=\s*(["'])(.*?)\1/gi).map((match) => match[2]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  const h1Count = matches(source, /<h1\b/gi).length;

  check(/^<!doctype html>/i.test(source), `${file}: missing HTML5 doctype`);
  for (const element of ['html', 'head', 'body', 'main']) {
    check(matches(source, new RegExp(`<${element}\\b`, 'gi')).length === 1, `${file}: expected one <${element}>`);
  }
  check(h1Count === 1, `${file}: expected one h1, found ${h1Count}`);
  check(duplicateIds.length === 0, `${file}: duplicate IDs: ${[...new Set(duplicateIds)].join(', ')}`);

  const canonicalTags = matches(source, /<link\b[^>]*rel\s*=\s*(["'])canonical\1[^>]*>/gi);
  check(canonicalTags.length === 1, `${file}: expected one canonical link`);
  if (canonicalTags[0]) {
    check(attribute(canonicalTags[0][0], 'href') === canonicalUrls[file], `${file}: incorrect canonical URL`);
  }

  for (const property of ['og:title', 'og:description', 'og:type', 'og:url', 'og:image']) {
    check(
      new RegExp(`<meta\\b[^>]*property\\s*=\\s*(["'])${property}\\1[^>]*>`, 'i').test(source),
      `${file}: missing ${property}`
    );
  }
  check(/<link\b[^>]*rel\s*=\s*(["'])icon\1[^>]*>/i.test(source), `${file}: missing favicon`);
  check(/<link\b[^>]*rel\s*=\s*(["'])apple-touch-icon\1[^>]*>/i.test(source), `${file}: missing apple-touch-icon`);
  check(/<script\b[^>]*src\s*=\s*(["'])script\.js\1[^>]*type\s*=\s*(["'])module\2[^>]*>/i.test(source), `${file}: script.js must load as a module`);

  const i18nReferences = matches(source, /\bdata-i18n(?:-html|-aria|-alt|-title)?\s*=\s*(["'])(.*?)\1/gi)
    .map((match) => match[2]);
  for (const key of i18nReferences) {
    for (const language of translationLanguages) {
      check(Object.hasOwn(translations[language], key), `${file}: missing ${language} translation for ${key}`);
    }
  }

  const tags = matches(source, /<(?:a|audio|iframe|img|link|script|source|video)\b[^>]*>/gi).map((match) => match[0]);
  for (const tag of tags) {
    for (const name of ['href', 'poster', 'src']) {
      const reference = attribute(tag, name);
      if (!reference || reference.startsWith('data:') || reference.startsWith('mailto:') || reference.startsWith('tel:')) continue;
      if (reference.startsWith('#')) {
        check(ids.includes(reference.slice(1)), `${file}: missing fragment target ${reference}`);
        continue;
      }
      if (/^https?:\/\//i.test(reference)) {
        const tagName = tag.match(/^<(\w+)/)?.[1]?.toLowerCase();
        const loadsResource = name !== 'href' || tagName === 'link';
        if (loadsResource && !reference.startsWith('https://hausdeskiosks.de/')) {
          check(
            allowedExternalResourceOrigins.has(new URL(reference).origin),
            `${file}: unplanned external resource ${reference}`
          );
        }
        continue;
      }
      check(await isFile(localPath(reference, file)), `${file}: missing local target ${reference}`);
    }

    if (/^<a\b/i.test(tag) && attribute(tag, 'target') === '_blank') {
      const rel = new Set((attribute(tag, 'rel') ?? '').split(/\s+/));
      check(rel.has('noopener'), `${file}: target=_blank link missing rel=noopener`);
    }
  }
}

const index = await readFile(join(root, 'index.html'), 'utf8');
const jsonLdSource = index.match(/<script\s+type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];
check(Boolean(jsonLdSource), 'index.html: missing JSON-LD');
if (jsonLdSource) {
  try {
    const jsonLd = JSON.parse(jsonLdSource);
    const hours = jsonLd.openingHoursSpecification?.[0];
    assert.equal(jsonLd['@type'], 'ConvenienceStore');
    assert.equal(jsonLd.url, canonicalUrls['index.html']);
    assert.equal(hours?.opens, OPENING_HOURS.opens);
    assert.equal(hours?.closes, OPENING_HOURS.closes);
    assert.deepEqual(hours?.dayOfWeek, OPENING_HOURS.days);
  } catch (error) {
    errors.push(`index.html: JSON-LD does not match site configuration (${error.message})`);
  }
}

const sitemap = await readFile(join(root, 'sitemap.xml'), 'utf8');
for (const file of ['index.html', 'impressum.html', 'datenschutz.html']) {
  check(sitemap.includes(canonicalUrls[file]), `sitemap.xml: missing ${canonicalUrls[file]}`);
}
check(!sitemap.includes(canonicalUrls['404.html']), 'sitemap.xml: 404 must not be indexed');

const robots = await readFile(join(root, 'robots.txt'), 'utf8');
check(robots.includes('Sitemap: https://hausdeskiosks.de/sitemap.xml'), 'robots.txt: missing canonical sitemap URL');

if (errors.length > 0) {
  console.error(errors.map((error) => `- ${error}`).join('\n'));
  process.exitCode = 1;
} else {
  console.log(`Static checks passed for ${htmlFiles.length} HTML files and ${referenceKeys.length} translation keys.`);
}
