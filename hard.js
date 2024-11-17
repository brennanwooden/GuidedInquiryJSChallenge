function createPII() {
    const pii = {
      name: "Brennan",
      ssn: "123-45-6789"
    };
  
    return {
      getName: function() {
        return pii.name;
      }
    };
  }
  
  const patient2 = createPII();
  
  console.log(patient2.name); // Output: Undefined
  console.log(patient2.ssn);  // Output: Undefined
  console.log(patient2.getName()); // Output: Brennan
  