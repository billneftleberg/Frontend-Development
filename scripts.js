
document.getElementById("confirmation-button").addEventListener("click", function () {
    const confirmationMessage = document.getElementById("confirmation-message");

    // Show confirmation message
    confirmationMessage.classList.remove("hidden");
    confirmationMessage.textContent = "Action completed successfully!";

    // Hide message after 3 seconds
    setTimeout(() => {
        confirmationMessage.classList.add("hidden");
    }, 3000);
});
