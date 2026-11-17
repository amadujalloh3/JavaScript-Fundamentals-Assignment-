// ----Q7:Authentication Check----
console.log("---- Q7 ----");
const registeredEmail = "student@limkokwing.edu.sl";
const registeredPassword = "pass1234";

// Simulated login attempt (change these values to test Access Denied)
let enteredEmail = "student@limkokwing.edu.sl";
let enteredPassword = "pass1234";

if (
  enteredEmail === registeredEmail &&
  enteredPassword === registeredPassword
) {
  console.log("Access Granted: Welcome to the Student Portal");
} else {
  console.log("Access Denied: Invalid email or password");
}
