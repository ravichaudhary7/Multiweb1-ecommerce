var userName=document.querySelector("#username");
var userPassword=document.querySelector("#password");
var input=document.querySelectorAll("input");
var btn=document.querySelectorAll("button")[0];
var span=document.querySelectorAll("span");
var form=document.querySelector("form");
var lstorage=JSON.parse(localStorage.getItem("lstorage"));
console.log(lstorage);

form.addEventListener("submit",(e)=>{
    var flag =true;
    span.forEach((e)=>{
        e.innerHTML=""
    })



    var matching=lstorage.find((e)=>{
        if((input[0].value==e.mobile || input[0].value==e.email)&& input[1].value==e.pass){
            return e;
        }
    });
    

    if(input[0].value==""&&input[1].value==""){
        
        span[0].innerHTML="username is required";
        span[1].innerHTML="password is required";
        e.preventDefault();
        console.log(e);
        flag=false;
    }
    else if(input[0].value==""){
        span[0].innerHTML="username is required";
        e.preventDefault();
        flag=false;
            }
            
    else if(input[1].value==""){
         span[1].innerHTML="passsword is required";
            e.preventDefault();
            flag=false;
     }
     else if(matching){
        alert("chaliyein shuru karte hain")
        
     }
     else{
        span[2].innerHTML="please enter the correct details "
        e.preventDefault();
        flag=false;
     }

     if(flag){
        localStorage.setItem("login",JSON.stringify(matching))
     }
})

// btn.addEventListener("click",()=>{
//     if(input[0].value==""&&input[1].value==""){
//         alert("chichha pahele username and password toh likho itni bhi kya jaldi hain aplo");
       
//     }
//     else if(input[0].value==""){
//         alert("chichha pahele username toh likho");
//     }
//     else if(input[1].value==""){
//         alert("chicha pahele password toh lihko");
//     }
//     else if(input[0].value=="ram"&&input[1].value=="1234"){
//         alert("chaliyein shuru karte hain!");
//     }
//     else{
//         alert("maccha sahi se yaad kar apna password and username itna jaldi bhuul jata hain");
//     }
// })