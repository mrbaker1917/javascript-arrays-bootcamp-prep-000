var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
  var newArray = [el, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr = [el, ...arr];
  return arr;
}

function addElementToBeginningOfArray(arr, el) {
  var newArray = [el, ...arr];
  return newArray;
}

function destructivelyAddElementToOfArray(arr, el) {
  arr = [el, ...arr];
  return arr;
}