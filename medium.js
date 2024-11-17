function sharePizza(slices, people) {
    const slicesPerPerson = (slices / people).toFixed(2); // Calculates slices and rounds to 2 decimal places
    return `Each person gets ${slicesPerPerson} slices of pizza; from our ${slices} slice pizza`;
  }
  
  console.log(sharePizza(8, 2)); // Output: Each person gets 4.00 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(8, 3)); // Output: Each person gets 2.67 slices of pizza; from our 8 slice pizza
  console.log(sharePizza(21, 20)); // Output: Each person gets 1.05 slices of pizza; from our 21 slice pizza
  console.log(sharePizza(10, 3)); // Output: Each person gets 3.33 slices of pizza; from our 10 slice pizza
  