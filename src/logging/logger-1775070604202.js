'use strict';

const LEVELS = { debug: 0, info: 1, warn: 2, error: 3 };

class Logger {
  constructor(level = 'info') { this.level = LEVELS[level] || 1; }
  _log(lvl, ...args) { if (LEVELS[lvl] >= this.level) console.log('[' + lvl.toUpperCase() + ']', new Date().toISOString(), ...args); }
  debug(...a) { this._log('debug', ...a); }
  info(...a) { this._log('info', ...a); }
  warn(...a) { this._log('warn', ...a); }
  error(...a) { this._log('error', ...a); }
}

module.exports = Logger; // v16
