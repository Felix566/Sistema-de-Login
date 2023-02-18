const container = document.querySelector(".container");

const btn_signup = document.querySelector(".signupbtn");

const btn_login = document.querySelector(".loginbtn");

btn_signup.addEventListener("click", ()=>{
    container.classList.add("signup-mode");
})

btn_login.addEventListener("click", ()=>{
    container.classList.remove("signup-mode");
})