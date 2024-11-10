document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");
    const nameInput = d
ocument.querySelector('input[name="name"]');
    const emailInput = document.querySelector('input[name="email"]');
    const messageInput = document.querySelector('textarea[name="message"]');
    
    const nameError = document.createElement("p");
    const emailError = document.createElement("p");
    const messageError = document.createElement("p");
    
    // Styling error messages
    nameError.style.color = "red";
    emailError.style.color = "red";
    messageError.style.color = "red";

    nameInput.insertAdjacentElement("afterend", nameError);
    emailInput.insertAdjacentElement("afterend", emailError);
    messageInput.insertAdjacentElement("afterend", messageError);

    // Real-time validation for Name
    nameInput.addEventListener("input", function() {
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
        } else {
            nameError.textContent = "";
        }
    });

    // Real-time validation for Email
    emailInput.addEventListener("input", function() {
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required.";
        } else if (!validateEmail(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
        } else {
            emailError.textContent = "";
        }
    });

    // Real-time validation for Message
    messageInput.addEventListener("input", function() {
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message cannot be empty.";
        } else {
            messageError.textContent = "";
        }
    });

    // Form submission
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // Check if all fields are valid
        if (nameInput.value.trim() === "") {
            nameError.textContent = "Name is required.";
            nameInput.focus();
            return;
        }
        if (emailInput.value.trim() === "") {
            emailError.textContent = "Email is required.";
            emailInput.focus();
            return;
        }
        if (!validateEmail(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            emailInput.focus();
            return;
        }
        if (messageInput.value.trim() === "") {
            messageError.textContent = "Message cannot be empty.";
            messageInput.focus();
            return;
        }

        // Simulate successful form submission
        alert("Message sent successfully!");
        contactForm.reset();
    });
});

// Email validation function
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}