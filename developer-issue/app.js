const countElement = document.querySelector('#attendee-count');
const joinButton = document.querySelector('#join-button');
let attendeeCount = Number(countElement.textContent);

joinButton.addEventListener('click', () => {
  attendeeCount = window.incrementCount(attendeeCount);
  countElement.textContent = String(attendeeCount);
});
standee

