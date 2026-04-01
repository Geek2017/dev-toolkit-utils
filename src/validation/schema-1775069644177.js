'use strict';

const isEmail = s => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
const isURL = s => { try { new URL(s); return true; } catch { return false; } };
const isInt = n => Number.isInteger(Number(n));
const inRange = (n, min, max) => n >= min && n <= max;

module.exports = { isEmail, isURL, isInt, inRange }; // v8
