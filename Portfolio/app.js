var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Designer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true   
});

    // Function to create the thank you message (pure function)
    const createThankYouMessage = () => {
        return `
            <h2>Thank You!</h2>
            <p>Your message has been received. We will get back to you soon!</p>
        `;
    };

    // Function to hide the form and display the thank you message
    const displayThankYouMessage = () => {
        document.querySelector('.form-container').style.display = 'none';
        document.getElementById('thankYouMessage').style.display = 'block';
        document.getElementById('thankYouMessage').innerHTML = createThankYouMessage();
    };

    // Function to handle form submission (pure function)
    const handleFormSubmission = (formData) => {
        const messages = JSON.parse(localStorage.getItem('messages')) || [];
        const updatedMessages = [...messages, formData]; // Immutable operation
        localStorage.setItem('messages', JSON.stringify(updatedMessages));
        return updatedMessages;
    };

    // Function to get form data (pure function)
    const getFormData = () => {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        return { name, email, message };
    };

    // Submit form function that ties everything together
    const submitForm = () => {
        const formData = getFormData();
        const savedMessages = handleFormSubmission(formData); // Save message
        displayThankYouMessage(); // Show the thank you message
        displaySavedMessages(savedMessages); // Optionally display saved messages
    };

    // Function to display saved messages (pure function)
    const displaySavedMessages = (messages) => {
        const savedMessagesContainer = document.getElementById('savedMessages');
        const messagesHTML = messages.map((msg, index) => `
            <div class="saved-message">
                <h4>Message ${index + 1}</h4>
                <p><strong>Name:</strong> ${msg.name}</p>
                <p><strong>Email:</strong> ${msg.email}</p>
                <p><strong>Message:</strong> ${msg.message}</p>
                <hr>
            </div>
        `).join('');
        savedMessagesContainer.innerHTML = messagesHTML;
    };

