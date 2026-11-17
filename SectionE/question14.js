// ---- Q14. Array of Objects (Database Simulation) ----
console.log("---- Q14 ----");
let lecturersDb = [];
lecturersDb.push({
  id: 1,
  fullName: "Amadu Kamara",
  department: "DICT",
  phoneNumber: "+232 76 111111",
});
lecturersDb.push({
  id: 2,
  fullName: "Samuel Amkam",
  department: "Software Engineering",
  phoneNumber: "+232 77 222222",
});
lecturersDb.push({
  id: 3,
  fullName: "Salu Bangura",
  department: "Networking",
  phoneNumber: "+232 78 333333",
});
console.log(lecturersDb);
// Second lecturer is at index 1
console.log(
  `Name: ${lecturersDb[1].fullName}, Phone: ${lecturersDb[1].phoneNumber}`,
);
