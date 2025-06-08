function sendMail() {
    let params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
    };

    const formMessage = document.getElementById("form-message");
    formMessage.textContent = "Sending your message...";

    emailjs.send("service_205a2uv", "template_hccpaag", params)
        .then(() => {
            formMessage.textContent = "Your message has been sent successfully!";
            formMessage.style.color = "var(--form-message-text)";
            // Reset the form
            document.getElementById("contact-form").reset();
        })
        .catch((error) => {
            formMessage.textContent = "Failed to send your message. Please try again later.";
            formMessage.style.color = "red";
            console.error("EmailJS Error:", error);
        });
}