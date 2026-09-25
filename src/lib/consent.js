// The visitor's cookie choice, kept on their own device. The site itself sets
// no tracking or advertising cookies; this choice decides whether any
// optional tools (such as analytics) may ever be switched on in future.
// Check hasOptionalConsent() before loading anything non-essential.

const KEY = "akshara-consent";
const EVENT = "akshara-consent-change";

export function getConsent() {
  try {
    const raw = window.localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function setConsent(optional) {
  const value = { optional: Boolean(optional), date: new Date().toISOString() };
  try {
    window.localStorage.setItem(KEY, JSON.stringify(value));
  } catch {
    // Storage blocked (private mode): the choice lasts for this visit only.
  }
  window.dispatchEvent(new CustomEvent(EVENT, { detail: value }));
  return value;
}

export function hasOptionalConsent() {
  return getConsent()?.optional === true;
}

export function onConsentChange(handler) {
  const listener = (event) => handler(event.detail);
  window.addEventListener(EVENT, listener);
  return () => window.removeEventListener(EVENT, listener);
}
