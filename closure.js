function messageFunc(){
    const message = "Hey there!"
    const displayMessage = function(){
        console.log(message);
    }
    displayMessage();
}

// Calling the function which internally defines the message
messageFunc();

// Trying to access message from outside the function which defines it
console.log("Message from outside: ",message);
