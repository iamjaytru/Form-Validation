
const nameError = document.getElementById("name-error");
const phoneError = document.getElementById("phone-error");
const emailError = document.getElementById("email-error");
const messageError = document.getElementById("message-error");
const submitError = document.getElementById("submit-error");

function validateName(){
    const name = document.getElementById("contact-name").value;

    if (name.length === 0) {
        nameError.innerHTML = "Name is Required";
        return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = "Write full name";
        return false;       
    }
    {
        nameError.innerHTML = '<i class = "fas fa-check-circle"></i>';
        return true;
    }
}

function validateNum() {
    const num = document.getElementById("phone-num").value;

    if (num.length === 0){
        phoneError.innerHTML = "Phone Number is Required";
        return false;
    }
    if (num.length !== 10) {
        phoneError.innerHTML = "Phone Number should be 10 digits";
        return false;
    }
    if (!num.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML = "Only digits Please";
        return false;
    }
     {
        phoneError.innerHTML = '<i class = "fas fa-check-circle"></i>';
        return true;
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;

    if (email.length === 0){
        emailError.innerHTML = "Email is Required";
        return false;
    }
    if (!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = "Email is invalid";
        return false;
    }
     {
        emailError.innerHTML = '<i class = "fas fa-check-circle"></i>';
        return true;
    }
}

function validateMessage(){
    const message = document.getElementById("message").value;
    const required = 30;
    const left = required - message.length;

    if (left > 0){
        messageError.innerHTML = left + " More characters Required";
        return false;
    }
        messageError.innerHTML = '<i class = "fas fa-check-circle"></i>';
        return true;
    
}

function validateForm(){
    if (!validateName() || !validateNum() || !validateEmail() || !validateMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "Please fix Error to submit";
        setTimeout(() => {
        submitError.style.display = "none";  
        }, 3000);
        return false;
    }
    
}