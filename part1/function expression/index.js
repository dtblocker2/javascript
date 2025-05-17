//function expression = storing function as variables

function hello(i=5){
    console.log("hello",i);
};

setTimeout(hello,3000) //function hello will run after 3 sec

let hello2 = hello;

hello2(1)