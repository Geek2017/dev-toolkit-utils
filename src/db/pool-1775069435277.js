'use strict';

class Pool {
  constructor(factory, size = 7) {
    this.factory = factory;
    this.size = size;
    this.available = [];
    this.waiting = [];
  }

  async acquire() {
    if (this.available.length) return this.available.pop();
    if (this._total < this.size) { this._total = (this._total || 0) + 1; return this.factory(); }
    return new Promise(r => this.waiting.push(r));
  }

  release(conn) {
    if (this.waiting.length) { this.waiting.shift()(conn); }
    else { this.available.push(conn); }
  }
}

module.exports = Pool;
