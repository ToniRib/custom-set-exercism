function CustomSet(numberArray) {
  this.data = numberArray;
}

CustomSet.prototype.eql = function(otherSet) {
  if (lengthsAreNotEqual(this.data, otherSet.data)) return false;

  uniqueElements = this.data.filter(function(element) {
    return otherSet.data.indexOf(element) === -1;
  });

  return arrayIsEmpty(uniqueElements);
};

var lengthsAreNotEqual = function(array1, array2) {
  return array1.length !== array2.length;
};

var arrayIsEmpty = function(array) {
  return array.length === 0;
};

module.exports = CustomSet;
