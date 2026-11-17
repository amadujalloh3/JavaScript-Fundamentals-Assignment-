// ---- Q10. Nested Objects, Arrays & Template Literals ----
console.log("---- Q10 ----");
let hotelRoom = {
  location: "Aberdeen",
  pricePerNight: 120,
  guestName: "Fatmata Sesay",
  nights: 3,
  amenities: ["Wi-Fi", "AC", "Ocean View", "Breakfast"],
  bathroom: {
    count: 2,
    hasJacuzzi: true,
  },
};
console.log(hotelRoom.amenities); // entire amenities array
console.log(hotelRoom.bathroom.hasJacuzzi); // only hasJacuzzi

let totalBill = hotelRoom.pricePerNight * hotelRoom.nights;
console.log(`
===== BOOKING SUMMARY CARD =====
Guest Name : ${hotelRoom.guestName}
Location   : ${hotelRoom.location}, Freetown
Nights     : ${hotelRoom.nights}
Total Bill : $${totalBill}
================================`);
