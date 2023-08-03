// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

function incrementCounter() {
    time++; 
    counterElement.innerText = time;
} 

setInterval(incrementCounter, 1000);