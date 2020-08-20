const mail=document.getElementsByName('mail');
const password=document.getElementsByName('pwd');
const Vpassword=document.getElementsByName('Vpwd');
const phone=document.getElementsByName('number');
const name=document.getElementsByName('uname');
const form=document.getElementsByClassName('form');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    validate();
})
