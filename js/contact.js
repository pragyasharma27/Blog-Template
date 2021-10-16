console.log("Contact page");
const Name = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');

failure.style.display = "none";
success.style.display = "none";

let submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
    e.preventDefault();

    console.log('You clicked on submit');

    // Submit here
    if (Name.value !== "" && phone.value !== "" && email.value !== "") {
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        failure.style.display = "none";
        success.style.display = "block";
        setInterval(() => {
            success.style.display = "none";
        }, 3000);
        console.log('Phone, email and user are valid. Submitting the form');

    }
    else {
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        let success = document.getElementById('success');
        success.style.display = "none";
        failure.style.display = "block";
        setInterval(() => {
            failure.style.display = "none";
        }, 3000);
    }
})
