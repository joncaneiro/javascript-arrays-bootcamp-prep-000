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

function destructivelyAddElementToEndOfArray(x, y) {
  x = [...x, y]
  return x
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
   x.pop()
   return x
}

function removeElementFromEndOfArray(x) {
  return x.slice(0, x.length - 1);
  
}






















