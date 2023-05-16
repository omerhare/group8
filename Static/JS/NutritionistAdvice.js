const showButtonLeft = document.getElementById("show-number");
const phoneNumberLeft = document.getElementById("phone-number");

showButtonLeft.addEventListener("click", () => {
  if (phoneNumberLeft.classList.contains("hidden")) {
    phoneNumberLeft.classList.remove("hidden");
  } else {
    phoneNumberLeft.classList.add("hidden");
  }
});

const showButtonMiddle = document.getElementById("email");
const phoneNumberMiddle = document.getElementById("pEmail");

showButtonMiddle.addEventListener("click", () => {
  if (phoneNumberMiddle.classList.contains("hidden")) {
    phoneNumberMiddle.classList.remove("hidden");
  } else {
    phoneNumberMiddle.classList.add("hidden");
  }
});

const bookMeetingButton = document.getElementById("book-meeting");
const bookingForm = document.getElementById("booking-form");
const messageElement = document.getElementById("message");

let selectedDateTime = null;

bookMeetingButton.addEventListener("click", () => {
  bookingForm.classList.toggle("hidden");
  messageElement.classList.add("hidden");
});

bookingForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  selectedDateTime = document.getElementById("datetime-input").value;
  console.log("Booking date and time:", selectedDateTime);
  bookingForm.classList.add("hidden");
  messageElement.classList.remove("hidden");

  // send the selected date and time to the server using an HTTP request
  const response = await fetch("https://example.com/book-meeting", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ date: selectedDateTime }),
  });
  const data = await response.json();
  console.log("Server response:", data);

  messageElement.classList.remove("hidden");
});

