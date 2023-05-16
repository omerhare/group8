const meetingSelect = document.getElementById("Book-Meeting");
const bookingFormContainer = document.getElementById("booking-form-container");
const bookingForm = document.getElementById("booking-form");
const dateTimeInput = document.getElementById("datetime-input");
const messageElement = document.getElementById("message");

meetingSelect.addEventListener("change", () => {
  if (meetingSelect.value === "Yes") {
    bookingFormContainer.classList.remove("hidden");
    messageElement.classList.add("hidden");
  } else {
    bookingFormContainer.classList.add("hidden");
    messageElement.classList.add("hidden");
  }
});

bookingForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selectedDateTime = dateTimeInput.value;
  console.log("Selected datetime:", selectedDateTime);
  bookingFormContainer.classList.add("hidden");
  messageElement.classList.remove("hidden");
});
