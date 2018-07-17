var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray(arr, el) {
  var newArray = [el, ...arr];
}

function destructivelyAddElementToBeginningOfArray(arr, el) {
  arr = [el, ...arr];
}