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
  let timestring = "11:00"
 let hour = timestring.split(":")[0]
if (hour > "17"){
   "Good Evening"}
if (hour < "12"){
  "Good Morning"
}
else {
  "Good Afternoon"
}
}
const displayMessage = () => {
  
}
