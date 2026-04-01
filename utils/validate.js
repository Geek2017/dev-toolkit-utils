/**
 * Validation utility functions
 */

function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function isURL(str) {
  try { new URL(str); return true; } catch { return false; }
}

function isEmpty(val) {
  if (val == null) return true;
  if (typeof val === 'string') return val.trim().length === 0;
  if (Array.isArray(val)) return val.length === 0;
  if (typeof val === 'object') return Object.keys(val).length === 0;
  return false;
}

function sanitize(str) {
  return str.replace(/[<>'"&]/g, '');
}

module.exports = { isEmail, isURL, isEmpty, sanitize };
