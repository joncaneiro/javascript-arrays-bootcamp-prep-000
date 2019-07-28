var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]



function addElementToBeginningOfArray(arr, ele) {
  return [ele, ...arr]
}

function destructivelyAddElementToBeginningOfArray(arr, ele) {
  return arr = [ele, ...arr] 
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
  return x.shift()
}

function removeElementFromBeginningOfArray(x) {
  return x.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(x) {
  return x.pop()
}

function removeElementFromEndOfArray(x) {
  return x.slice(x.length - 1)
}






















