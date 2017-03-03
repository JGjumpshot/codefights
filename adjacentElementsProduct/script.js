function adjacentElementsProduct(inputArray) {
  var tempArr = []; // initialize empty array
  var product = 0; // initialize product variable
  for(var i = 0; i < inputArray.length-1; i++) { //loop through the array
    product = inputArray[i] * inputArray[i + 1]; //re-initialize product as the index * the index after
    tempArr.push(product); // push the product into into a temporary array
  }
  tempArr.sort(function(a, b) { // sort the array
    return a - b; // return numbers lowest to highest
  })
  return tempArr.pop() // pop off the ending element to retrieve the answer
}

adjacentElementsProduct([5,6,7,2,8,6]);
