//synchronous behaviour
console.log("Step 1: Start");

function synchronousTask() {
    console.log("Step 2: Synchronous task");
}

synchronousTask();

console.log("Step 3: End");



//asynchronous behaviour
console.log("Step 4: Start");

setTimeout(function asynchronousTask() {
    console.log("Step 5: Asynchronous task");
}, 1000);  // Waits for 1 second (1000 milliseconds) before executing

console.log("Step 6: End");
