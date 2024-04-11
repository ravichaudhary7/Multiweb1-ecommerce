var input=document.querySelectorAll("input");
var span=document.querySelectorAll("span");
var form=document.querySelector("form");
var storage=[];
var lstorage=JSON.parse(localStorage.getItem("lstorage"));
if(lstorage){
    storage=lstorage;
}

form.addEventListener("submit",(e)=>{
    var regx=/^[a-zA-Z]{2,15}$/;
    var regx1=/^[6-9][0-9]{9}$/;
    var regx2=/^[a-z]{2,10}$/;
    var flag=true;
// first name
    if(input[0].value==""){
        span[0].innerHTML="first name is required <br>";
        e.preventDefault();
        flag=false;
    }
    else if(regx.test(input[0].value)){
        span[0].innerHTML="";
        
    }
    else{
        span[0].innerHTML="invalid first name"
        e.preventDefault();
        flag=false;
    }
//lastname
    if(input[1].value==""){
        span[1].innerHTML="last name is required <br>";
        e.preventDefault();
        flag=false;
    }
    else if(regx.test(input[1].value)){
        span[1].innerHTML="";
        
    }
    else{
        span[1].innerHTML="invalid last name"
        e.preventDefault();
        flag=false;
    }
    // email
    if(input[2].value==""){
        span[2].innerHTML="Email is required";
        e.preventDefault();
        flag=false;
    }

    //mobile

    if(input[3].value==""){
        span[3].innerHTML="mobile number is required";
        e.preventDefault();
        flag=false;
    }
    else if (regx1.test(input[3].value)){
        span[3].innerHTML="";
    }
    else{
        span[3].innerHTML="invalid mobile number";
        e.preventDefault();
        flag=false;
    }

    // for password
    if(input[4].value==""){
        span[4].innerHTML="Password is required";
        e.preventDefault();
        flag=false;
    }
    else if(regx2.test(input[4].value)){
        span[4]="";
    }
    else{
        span[4].innerHTML="invalid password";
        flag=false;
    }
    // confirm password

    if(input[5].value!=input[4].value){
        span[5].innerHTML="password is not matching";
        e.preventDefault();
        flag=false;

    }
    if(flag){
        var obj={
            fname:input[0].value,
            lname:input[1].value,
            email:input[2].value,
            mobile:input[3].value,
            pass:input[4].value
        }
        storage.push(obj);
        localStorage.setItem("lstorage",JSON.stringify(storage));
    }
});