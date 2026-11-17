// ----Q6:Cocatenation and Template Literals----
console.log("---- Q6 ----");
let courseName = "Web Development";
let lecturerName = "Amadu Kamara";
let creditHours = 3;
let semester = "Semester 3";

// Standard + concatenation
console.log(
  "The course " +
    courseName +
    " is taught by " +
    lecturerName +
    ". It carries " +
    creditHours +
    " credit hours and runs in " +
    semester +
    ".",
);
// Average of three scores using template literals
let test1 = 68,
  test2 = 74,
  test3 = 89;
let average = (test1 + test2 + test3) / 3;
console.log(`The average of the three test scores is ${average}`); // 77
