const mail=document.getElementById('mail');
const password=document.getElementById('pwd');
const Vpassword=document.getElementById('Vpwd');
const phone=document.getElementById('number');
const name=document.getElementById('uname');
const btn=document.getElementById('submit');
const form=document.querySelector('form');

form.addEventListener('submit',(event) => {
    event.preventDefault();
    validate();
})

//validate mail through Regular Expression...
const isMail = (mailVal) =>{
    let regex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;
    if(regex.test(mailVal)){
        return true;
    }
    return false;
}

//validation function...
const validate = () =>{
     
    const mailVal= mail.value.trim();
    const passwordVal= password.value.trim();
    const VpasswordVal= Vpassword.value.trim();
    const phoneVal= phone.value.trim();
    const nameVal=  name.value.trim();

    //Email validation...
    if(mailVal===""){
        setErrormsg(mail,"mail can't be empty!");
    }else if(!isMail(mailVal)){
        setErrormsg(mail,"Invalid Mail");
    }else{
        setSuccessmsg(mail);
    }
}

function setErrormsg(input,errormsgs){
    const field=input.parentElement;
    const small=field.querySelector('small');
    field.className="field error";
    small.innerText=errormsgs;
    // console.log(field,small);
}

function setSuccessmsg(input){
    const field=input.parentElement;
    field.className="field success";
}


// btn.onclick=function(e){
//     if(phone.value === '')
//     {   
//         e.preventDefault();
//         const sent=document.getElementById('Mobile').querySelector('small');
//         let ele=document.getElementById('Mobile').querySelectorAll('i')[1];
//         console.log(ele);
//         ele.style.visibility='visible';
//         sent.style.visibility='visible';
//         sent.innerText="Number is invalid";
//         phone.style.borderColor='rgb(255,0,0)';
//     }
//     else
//     {
//         e.preventDefault();
//         document.getElementById('Mobile').querySelector('small').innerText="";
//         phone.style.borderColor='#2ecc71';
//         let ele=document.getElementById('Mobile').querySelectorAll('i')[0];
//         console.log(ele);
//         ele.style.visibility='visible';
//     }
// }



