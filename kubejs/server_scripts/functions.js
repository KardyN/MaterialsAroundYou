//priority: 1001

String.prototype.splice = function (start, subStr) {
  return this.slice(0, start) + subStr + this.slice(start);
};
