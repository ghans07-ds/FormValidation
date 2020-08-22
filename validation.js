const mail=document.getElementById('mail');
const password=document.getElementById('pwd');
const Vpassword=document.getElementById('Vpwd');
// const phone=document.getElementsByName('number');
const phone=document.getElementById('number');
const name=document.getElementById('uname');
const form=document.querySelector('form');
// const btn=document.querySelector('button');
const btn=document.getElementById('submit');



console.log(phone,mail,form);

btn.onclick=function(e){
    if(phone.value === '')
    {   
        e.preventDefault();
        const sent=document.getElementById('Mobile').querySelector('small');
        let ele=document.getElementById('Mobile').querySelectorAll('i')[1];
        console.log(ele);
        ele.style.visibility='visible';
        sent.style.visibility='visible';
        sent.innerText="Number is invalid";
        phone.style.borderColor='rgb(255,0,0)';
    }
    else
    {
        e.preventDefault();
        document.getElementById('Mobile').querySelector('small').innerText="";
        phone.style.borderColor='#2ecc71';
        let ele=document.getElementById('Mobile').querySelectorAll('i')[0];
        console.log(ele);
        ele.style.visibility='visible';
    }
}


