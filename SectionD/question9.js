// ---- Q9. Object Manipulation (Read, Update, Add) ----
console.log("---- Q9 ----");
let course = {
  code: "BSEM2104",
  title: "Web Development",
  lecturer: "Amadu Kamara",
  credits: 3,
  isCore: true,
};
console.log(course.title); // Read
course.lecturer = "Samuel Amkam"; // Update
course.room = "Lab 4"; // Add
console.log(course);
