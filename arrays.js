var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]



function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  arr = [ele, ...arr] 
  return arr
}



function addElementToEndOfArray(arr, ele) {
  return [...arr, ele]
}

function destructivelyAddElementToEndOfArray(arr, ele) {
  return arr = [...arr, ele]
}


function accessElementInArray(x, y) {
  return x[y]
}


function destructivelyRemoveElementFromBeginningOfArray(x) {
  x.shift();
  return x 
}

function removeElementFromBeginningOfArray(x) {
  return x.slice(1);
  
}

function destructivelyRemoveElementFromEndOfArray(x) {
  return x.pop()
}

function removeElementFromEndOfArray(x) {
  x.slice(0, x.length - 1);
  return x
}






















