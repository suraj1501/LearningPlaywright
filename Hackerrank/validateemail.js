function validateEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  console.log("Validating email:", email);
  console.log("Validating email:", regex.test(email));
  return regex.test(email);
}

// Test cases
console.log(validateEmail("user@example.com")); // true
console.log(validateEmail("invalid-email@"));    // false