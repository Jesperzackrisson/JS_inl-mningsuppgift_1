// Jesper Zackrisson
// Javascript 1, Inlämningsuppgift 1
// Gjorde endast för godkänt (G)

const form = document.querySelector('#userForm');
const inputs = document.querySelector('.form-control');
const addBtn = document.querySelector('#addUser');
const output = document.querySelector('#users');
const allEmail = document.querySelector('#email');


const firstname = document.getElementById('firstName');
const lastname =  document.getElementById('lastName');
const email = document.getElementById('email');

let users = [];

addBtn.addEventListener('click', (event) => {

    
    event.preventDefault();
    
    checkInputsValue();
    validateEmail();
    showUsers();
    


    
    
});



// funktion som kollar om det finns ett värde eller ej i en input
function checkInputsValue() {

    if ( firstname.value === '') {
        // error
        invalidInputsMsg(firstname, 'Får ej vara tom');
        
    } else {
        // success
        validInputsMsg(firstname)
        
    }

    if ( lastname.value === '') {
        // error
        invalidInputsMsg(lastname, 'Får ej vara tom');
        
        
    } else {
        // success
        validInputsMsg(lastname)
       
    }
    
 
}



// email funktion som kollar om en email är korrekt eller inte
function validateEmail() {
    
    let valid = false;
    const email = allEmail.value.trim(); 
    
    if ((email === '')) {
        
        invalidInputsMsg(allEmail, 'Får ej vara tom');

    } else if (!isEmailValid(email)) {
        
        invalidInputsMsg(allEmail, 'Var god ange en giltig epost adress')

    } else {
        
        validInputsMsg(allEmail);
        valid = true;
    }
    
    return valid;

}


function isEmailValid(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

// invalid and valid functions

function invalidInputsMsg(input, message) {
    
    
    const fieldInput = input.parentElement;
    
    // lägger till error class och tar bort success class
    fieldInput.classList.remove('success');
    fieldInput.classList.add('error');

    // gör så att error meddelandet visas 
    const error = fieldInput.querySelector('span');
    error.textContent = message;
}


function validInputsMsg(input) {
    
    // get the form-field element
    const fieldInput = input.parentElement;

    // remove the error class
    fieldInput.classList.remove('error');

    // hide the error message
    const error = fieldInput.querySelector('span');
    error.textContent = '';
    
}

// skapa users, sedan trycka upp den med hjälp utav outputUsers()
function showUsers() {

    if (( inputs.value !== '') && (validateEmail(email) == true)) {

        let user = {
            id: Date.now().toString(),
            firstname: firstname.value,
            lastname: lastname.value,
            email: email.value
        }
        
        users.push(user);
        outputUsers();
       
    } 
}


// Få ut users på sidan
function outputUsers() {
    
    output.innerHTML = '';

    users.forEach(user => {
        output.innerHTML += `<div id="${user.id}" class="border p-3 mb-2"> <span id="fullnameOutput"> ${user.firstname} ${user.lastname} </span> <br> <span id="emailOutput"> ${user.email} </span> </div>`
        
    })

    document.getElementById('userForm').reset();
    
}





// function som återställer outputs när man klickar på "clearForm" knappen som har en onClick på sig.
function clear() {
    document.getElementById('users').innerHTML='';
}
































    




