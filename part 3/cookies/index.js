/**
 * is used to maintain state on client
 * cookies are stored on client's machine as text file
 * when user visits again, the website reads the data from the cookie
 */

//cookie types: 1. Session cookie       2. persistent cookie

function WriteCookie(){
    if (document.myform.customer.value == ""){
        alert("enter some value");
        return;
    }
    let cookievalue = escape(document.myform.customer.value) + ";";
    document.cookie = "name" + cookievalue;
    document.write("setting cookies: " + "name = " + cookievalue)
}