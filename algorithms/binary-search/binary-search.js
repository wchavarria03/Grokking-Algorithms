function binarySearchLoop(list, ele) {
  var min = 0;
  var max = list.length - 1;

  while(min <= max) {
    var mid = Math.round((min + max) / 2);
    var guess = list[mid];

    if(ele === guess) {
      return mid;
    } else if(ele < guess) {
      max = mid - 1;
    } else {
      min = mid + 1;
    }
  }
  return null;
}

function binarySearchRecursive(array, ele) {
  return null;
}

module.exports = {
  binarySearchLoop,
  binarySearchRecursive
};