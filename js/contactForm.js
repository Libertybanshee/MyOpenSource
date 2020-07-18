let contactForm = document.getElementById(`frmContact`);

let fields = document.querySelectorAll(`input[required], textarea[required]`);

fields.forEach((field) => {
    field.addEventListener(`focus`, () => {resetField(field)}, false);
    field.addEventListener(`blur`, () => {validateField(field)}, false);
});

contactForm.addEventListener(`submit`, (a) => {
    a.preventDefault();
    alert(`Votre mail est envoyé`);

    fields.forEach((field) => {resetField(field)});

    let valid = true;

    fields.forEach((field) => {
        if(! validateField(field)){
            valid = false;
        }
    });
    if(valid){
        a.target.submit();
    }

    console.log(fields); 
}, false);

function validateField(field){
    if(field.checkValidity()){
        return true;
    } else {
        field.classList.add(`invalid`);
        field.previousElementSibling.insertAdjacentHTML(`beforeend`, `<span class="msg">${field.validationMessage}</span>`);
        return false;
    }
};

function resetField(field){
    let fieldLabel = field.previousElementSibling;
    field.classList.remove(`invalid`);
    while(fieldLabel.firstElementChild){
        fieldLabel.removeChild(fieldLabel.firstElementChild);
    }
    field.valid = true;
};