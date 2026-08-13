import assert from 'node:assert/strict';
import test from 'node:test';

import {
  LANGUAGE_STORAGE_KEY,
  OPENING_HOURS,
  getStoredLanguage,
  isOpenAt,
  nextLanguage,
  normalizeLanguage,
  selectLanguage,
  zonedDateParts
} from '../../site-config.js';

test('normalizes supported locales without accepting unknown languages', () => {
  assert.equal(normalizeLanguage('TR-tr'), 'tr');
  assert.equal(normalizeLanguage('en_US'), 'en');
  assert.equal(normalizeLanguage(' fr-FR '), null);
  assert.equal(normalizeLanguage(null), null);
});

test('prefers a valid stored language, then browser locales, then German', () => {
  assert.equal(selectLanguage('tr', ['en-US', 'de-DE']), 'tr');
  assert.equal(selectLanguage('corrupted', ['fr-FR', 'en-GB']), 'en');
  assert.equal(selectLanguage(null, ['fr-FR']), 'de');
  assert.equal(selectLanguage(null, []), 'de');
});

test('reads persisted language defensively', () => {
  const validStorage = { getItem: (key) => key === LANGUAGE_STORAGE_KEY ? 'EN-gb' : null };
  const corruptedStorage = { getItem: () => '{not-a-language' };
  const blockedStorage = { getItem: () => { throw new Error('blocked'); } };

  assert.equal(getStoredLanguage(validStorage), 'en');
  assert.equal(getStoredLanguage(corruptedStorage), null);
  assert.equal(getStoredLanguage(blockedStorage), null);
  assert.equal(getStoredLanguage(undefined), null);
});

test('keeps the manual DE to TR to EN language cycle', () => {
  assert.equal(nextLanguage('de'), 'tr');
  assert.equal(nextLanguage('tr'), 'en');
  assert.equal(nextLanguage('en'), 'de');
  assert.equal(nextLanguage('corrupted'), 'de');
});

test('uses Europe/Berlin independently of the browser time zone', () => {
  assert.deepEqual(zonedDateParts('2026-01-15T07:00:00Z'), {
    weekday: 'Thursday',
    hour: 8,
    minute: 0
  });
  assert.deepEqual(zonedDateParts('2026-07-15T06:00:00Z'), {
    weekday: 'Wednesday',
    hour: 8,
    minute: 0
  });
});

test('handles opening and closing boundaries in winter and summer time', () => {
  const cases = [
    ['2026-01-15T06:59:00Z', false],
    ['2026-01-15T07:00:00Z', true],
    ['2026-01-15T20:59:00Z', true],
    ['2026-01-15T21:00:00Z', false],
    ['2026-07-15T05:59:00Z', false],
    ['2026-07-15T06:00:00Z', true],
    ['2026-07-15T19:59:00Z', true],
    ['2026-07-15T20:00:00Z', false],
    ['2026-07-15T22:00:00Z', false]
  ];

  for (const [instant, expected] of cases) {
    assert.equal(isOpenAt(instant), expected, instant);
  }
});

test('applies the configured hours on every weekday', () => {
  for (let day = 10; day <= 16; day += 1) {
    assert.equal(isOpenAt(`2026-08-${day}T10:00:00Z`), true);
  }
});

test('fails closed for missing or invalid opening-hours configuration', () => {
  assert.equal(isOpenAt('invalid-date'), false);
  assert.equal(isOpenAt(new Date(), null), false);
  assert.equal(isOpenAt(new Date(), { ...OPENING_HOURS, opens: '25:00' }), false);
  assert.equal(isOpenAt(new Date(), { ...OPENING_HOURS, closes: '08:00' }), false);
  assert.equal(isOpenAt(new Date(), { ...OPENING_HOURS, timeZone: 'Invalid/Zone' }), false);
  assert.equal(isOpenAt(new Date(), { ...OPENING_HOURS, days: [] }), false);
});
