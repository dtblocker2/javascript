//using window prompt

let username = window.prompt("What is your username");
console.log(username);

document.getElementById("greetings").textContent = `Welcome ${username}`;
//using text box
document.getElementById("submit").onclick = function(){
    let username = document.getElementById("change_username").value;
    document.getElementById("greetings").textContent = `Welcome ${username}`;
};