/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

const greet = (timeString) => {
 let hour = timeString.split(":")[0].join("")
if (hour > "1700"){
  return "Good Evening"}
if (hour < "1200"){
  return"Good Morning"}
else {
  return "Good Afternoon"}
}
const displayMessage = (msg) => {
   document.getElementById("greeting").innerText = msg;
}
