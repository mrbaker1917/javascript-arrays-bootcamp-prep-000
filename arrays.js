var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
  var newArray = [el, ...arr];
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr = [el, ...arr];
  return arr;
}

function addElementToEndOfArray(arr, el) {
  var newArray = [...arr, el];
  return newArray;
}

function destructivelyAddElementToEndOfArray(arr, el) {
  arr = [...arr, el];
  return arr;
}

function accessElementInArray(arr, index) {
  return arr[index];
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.shift();
  return arr;
}

function 