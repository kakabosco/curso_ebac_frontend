const message = document.getElementById("message");
const button = document.getElementById("my-button");

button.addEventListener("click", () => {
    message.style.display = "block";

    setTimeout(() => {
        message.style.display = "none";
    }, 5000);
});
