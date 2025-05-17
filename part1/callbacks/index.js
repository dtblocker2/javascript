//to can external function inside function

sum(display,1,2);

function sum(callback,x,y){
    let k = x+y;
    callback(k);
}

function display(t){
    console.log(t)
}