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


