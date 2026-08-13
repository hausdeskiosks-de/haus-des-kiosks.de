export const SUPPORTED_LANGUAGES = Object.freeze(['de', 'tr', 'en']);
export const LANGUAGE_STORAGE_KEY = 'haus-des-kiosks-language';

export const OPENING_HOURS = Object.freeze({
  timeZone: 'Europe/Berlin',
  days: Object.freeze([
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday'
  ]),
  opens: '08:00',
  closes: '22:00'
});

export function normalizeLanguage(locale) {
  if (typeof locale !== 'string') return null;
  const language = locale.trim().toLowerCase().split(/[-_]/)[0];
  return SUPPORTED_LANGUAGES.includes(language) ? language : null;
}

export function getStoredLanguage(storage) {
  try {
    return normalizeLanguage(storage?.getItem(LANGUAGE_STORAGE_KEY));
  } catch {
    return null;
  }
}

export function selectLanguage(stored, browserLocales = []) {
  const persisted = normalizeLanguage(stored);
  if (persisted) return persisted;

  for (const locale of browserLocales) {
    const language = normalizeLanguage(locale);
    if (language) return language;
  }

  return 'de';
}

export function nextLanguage(language) {
  const currentIndex = SUPPORTED_LANGUAGES.indexOf(normalizeLanguage(language));
  return SUPPORTED_LANGUAGES[(currentIndex + 1) % SUPPORTED_LANGUAGES.length];
}

function minutesSinceMidnight(value) {
  if (typeof value !== 'string' || !/^\d{2}:\d{2}$/.test(value)) return null;
  const [hour, minute] = value.split(':').map(Number);
  if (hour > 23 || minute > 59) return null;
  return hour * 60 + minute;
}

export function zonedDateParts(instant, timeZone = OPENING_HOURS.timeZone) {
  const date = instant instanceof Date ? instant : new Date(instant);
  if (Number.isNaN(date.getTime()) || typeof timeZone !== 'string' || !timeZone) return null;

  try {
    const parts = new Intl.DateTimeFormat('en-GB', {
      timeZone,
      weekday: 'long',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    }).formatToParts(date);
    const value = (type) => parts.find((part) => part.type === type)?.value;
    const hour = Number(value('hour'));
    const minute = Number(value('minute'));
    const weekday = value('weekday');
    if (!weekday || !Number.isInteger(hour) || !Number.isInteger(minute)) return null;
    return { weekday, hour, minute };
  } catch {
    return null;
  }
}

export function isOpenAt(instant = new Date(), schedule = OPENING_HOURS) {
  if (!schedule || !Array.isArray(schedule.days) || schedule.days.length === 0) return false;
  const opens = minutesSinceMidnight(schedule.opens);
  const closes = minutesSinceMidnight(schedule.closes);
  const local = zonedDateParts(instant, schedule.timeZone);
  if (opens === null || closes === null || opens === closes || !local) return false;
  if (!schedule.days.includes(local.weekday)) return false;

  const current = local.hour * 60 + local.minute;
  if (opens < closes) return current >= opens && current < closes;
  return current >= opens || current < closes;
}
