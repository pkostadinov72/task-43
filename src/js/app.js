import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready
  function newMessage() {
    document.title = "One new message";
  }

  setTimeout(newMessage, 3000);

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });
});
