const subscribe_checkbox = document.getElementById("subscribe");


function submit(){
    if (subscribe_checkbox.checked){
        console.log("you are subscribed")
    }
    else{
        console.log("you are not subscribed")
    };
};