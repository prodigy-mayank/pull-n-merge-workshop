// Command-practice task: change this title, save, then inspect Git's view of the edit.
const eventTitle = "Campus Workshop Meetup for Git";

document.querySelector("#event-title").textContent = eventTitle;

const joinButton = document.querySelector("#join-button");
const joinMessage = document.querySelector("#join-message");
joinButton.addEventListener("click", () => {
  joinMessage.textContent = "You're on the list. See you there!";
  joinButton.disabled = true;
});
