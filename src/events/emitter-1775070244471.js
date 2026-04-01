'use strict';

class Emitter {
  constructor() { this._events = {}; }
  on(evt, fn) { (this._events[evt] = this._events[evt] || []).push(fn); return this; }
  off(evt, fn) { this._events[evt] = (this._events[evt] || []).filter(f => f !== fn); return this; }
  emit(evt, ...args) { (this._events[evt] || []).forEach(fn => fn(...args)); }
}

module.exports = Emitter; // v504
