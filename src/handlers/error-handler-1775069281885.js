'use strict';

class ErrorHandler {
  constructor(opts = {}) {
    this.logger = opts.logger || console;
    this.exitOnUncaught = opts.exitOnUncaught !== false;
  }

  handle(err) {
    if (!err) return;
    const code = err.code || 'UNKNOWN';
    this.logger.error('[500]', code, err.message);
    return { handled: true, code };
  }
}

module.exports = ErrorHandler;
