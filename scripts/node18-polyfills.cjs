/* Polyfills for Node 18 runtime compatibility. */

if (!Array.prototype.toReversed) {
  Object.defineProperty(Array.prototype, "toReversed", {
    value: function toReversed() {
      return this.slice().reverse();
    },
    writable: true,
    configurable: true,
  });
}

if (!Array.prototype.toSorted) {
  Object.defineProperty(Array.prototype, "toSorted", {
    value: function toSorted(compareFn) {
      return this.slice().sort(compareFn);
    },
    writable: true,
    configurable: true,
  });
}

if (!Array.prototype.toSpliced) {
  Object.defineProperty(Array.prototype, "toSpliced", {
    value: function toSpliced(start, deleteCount, ...items) {
      const clone = this.slice();
      clone.splice(start, deleteCount, ...items);
      return clone;
    },
    writable: true,
    configurable: true,
  });
}
