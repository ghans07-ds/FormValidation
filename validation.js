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

//function for validate mail through Regular Expression...
const isMail = (mailVal) =>{
    let regex=/^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;  //Regular Expression of Email..
    if(regex.test(mailVal)){
        return true;
    }
    return false;
}

//function for validate Mobile Number through Regular Expression...
const isPhone = (phoneVal) =>{
    let regex=/^(\d){10}$/;  //Regular Expression of Mobile Number..
    if(regex.test(phoneVal)){
        return true;
    }
    return false;
}

//function for validate Username through Regular Expression...
const isName = (nameVal) =>{
    let regex=/^([a-z\d]){3,10}$/;  ////Regular Expression of Username..
    if(regex.test(nameVal)){  
        return true;
    }
    return false;
}

//function for validate Password through Regular Expression...
const isPassword = (passwordVal) =>{
    let regex=/^[\w@-]{8,20}$/;
    if(regex.test(passwordVal)){  
        return true;
    }
    return false;
}
//validation function...
const validate = () =>{
     
    const mailVal= mail.value.trim();
    const passwordVal= password.value.trim();
    const vPasswordVal= Vpassword.value.trim();
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

    //Mobile Number validation
    if(phoneVal === ""){
        setErrormsg(phone,"Mobile Number can't be empty!");
    }else if(!isPhone(phoneVal)){
        setErrormsg(phone,"Invalid Mobile Number");
    }else{
        setSuccessmsg(phone);
    }

    //Username Validation
    if(nameVal === ""){
        setErrormsg(name,"Username can't be empty!");
    }else if(!isName(nameVal)){
        if(nameVal.length<3){
            setErrormsg(name,"Username must be greter than three character");
        }else{
            setErrormsg(name,"Invalid Username");
        }
    }else{
        setSuccessmsg(name);
    }

    //password Validation
    if(passwordVal === ""){
        setErrormsg(password,"password can't be empty!");
    }else if(!isPassword(passwordVal)){
        setErrormsg(password,"password is not valid");
    }else{
        setSuccessmsg(password);
    }

    //password matching..
    if(vPasswordVal === ""){
        setErrormsg(Vpassword,"password can't be empty!");
    }else if(vPasswordVal === passwordVal){
        setSuccessmsg(Vpassword);
    }else{
        setErrormsg(Vpassword,"Password not matching");
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



