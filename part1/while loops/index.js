let username = "";

//below loop is used when we have to check condition before code execution
while (username === "" || username === null){
    console.log("you didn't enter your name");
    username = window.prompt("enter your username");
}

//or you can write like below to check condition after code execution 
do{
    console.log("you didn't enter your name");
    username = window.prompt("enter your username");
}while (username === "" || username === null)

console.log(`hello ${username}`);