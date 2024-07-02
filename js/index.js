
       let submitButton = document.getElementById('submit-button');
       let fullnameInput = document.getElementById('fullname');
       let emailInput = document.getElementById('email');
       let messageTextarea = document.getElementById('message');

       let emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

       function validateForm() {
           let data = {};
           let errors = [];

           if (fullnameInput.value.trim() !== '') {
               data.fullname = fullnameInput.value.trim();
           } else {
               errors.push("Full Name is missing.");
           }

           if (emailInput.value.trim() !== '') {
               if (emailValidation.test(emailInput.value.trim())) {
                   data.email = emailInput.value.trim();
               } else {
                   errors.push("Email is not valid.");
               }
           } else {
               errors.push("Email is missing.");
           }

           if (messageTextarea.value.trim() !== '') {
               data.message = messageTextarea.value.trim();
           } else {
               errors.push("Message is missing.");
           }

           if (errors.length > 0) {
               console.error("ERRORS:", errors);
           } else {
               console.log("COLLECTED DATA:", data);
               clearFields();
           }
       }

       function clearFields() {
           fullnameInput.value = '';
           emailInput.value = '';
           messageTextarea.value = '';
       }

       submitButton.addEventListener('click', validateForm);
