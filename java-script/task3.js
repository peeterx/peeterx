
// creating a function called myFunction that takes a single parameter
function myFunction(number) {

  // Creating an array to store the values
  var result = [];

  // Using a for loop to evaluate.
  for (var i = 1; i <= number; i++) {
    // Numbers divisible by 2, 3 and 5
    if (i % 2 == 0 && i % 3 == 0 && i % 5 == 0) {
      result.push("yu-gi-oh");
    }
    // Numbers divisible by 2 and 3
    else if (i % 2 == 0 && i % 3 == 0) {
      result.push("yu-gi");
    }
    // Numbers divisible by 2 and 5
    else if (i % 2 == 0 && i % 5 == 0) {
      result.push("yu-oh");
    }
    // Numbers divisible by 3 and 5
    else if (i % 3 == 0 && i % 5 == 0) {
      result.push("gi-oh");
    }
    // Numbers divisible by 2
    else if (i % 2 == 0) {
      result.push("yu");
    }
    // Numbers divisible by 3
    else if (i % 3 == 0) {
      result.push("gi");
    }
    // Numbers divisible by 5
    else if (i % 5 == 0) {
      result.push("oh");
    }
    else {
      result.push(i);
    }
  }
  console.log(result);
}

// Call the function and pass 100 as an argument
myFunction(100);

// Call the function and pass it a random number of choice
myFunction(10);
