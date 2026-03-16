const button = document.getElementById('submit')
const submit = document.getElementById('form')
const welcome = document.querySelector('h2')


const Username = "admin";
const Password = "access"

submit.addEventListener("submit", (e)=>{
    e.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password  = document.getElementById('password').value.trim();

    if(username === Username && password === Password){
        sessionStorage.setItem("auth", "true");
        window.location.href = "scanner.html"
    }
    else if(username === "" || password === ""){ 

    }
    else{
      welcome.textContent = "Invalid Credentials"
    }
  
})





