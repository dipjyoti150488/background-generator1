// Assignment: Two "input" tags with type "color" are provided. The background calor needs to change based on the color manually selected by the user on these two input tags
// first we need to grab these two input tags with the class as defined in the HTML file
// var css = document.querySelector("h3");
// var color1 = document.querySelector(".color1");
// var color2 = document.querySelector(".color2");

// now testing
// console.log(css);
// console.log(color1);
// console.log(color2);

// now, what do we want to happen?
// now we want to listen to an event where we notice the user's actions here (i.e the user selecting the colors)
// we have previously learnt about the following events:
//click
//keypress
//mouseenter
//now there is a different event for input called:
//input
// so everytime the input value changes, we can notice and capture that change
// so, we need addEventListener for both the input tags with class "color1" and "color2"
//we did console.log in the addEventListener's function to check that the hex color codes are console logged in the google chrome console
//sa, we are grabbing the value with "color1.value" and "color2.value", so what we want to do next?
// well, we want to change the background color
// how can we do that?
// do "inspect" upon clicking on the background, we notice that the background is in the "body" tag
// so we add an "id": id="gradient", then we cach it with a variable "body" 

//tip: we can change the style of the body by (which is a css property):
// body.style.background = "red";
// *** Not Working independently**
// but working inside the addEventListener function
// DRY: both the ddEventListener functions are repeating. so create a function
// LAST THING: we need the color codes to be displayed below the "current css background" text. For this we will use "textContent". we already know the below two:
//innerHTML
//createTextNode
// well, "textContent" adds a text content

var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
// now testing
// console.log(css);
// ok 
// console.log(color1);
// ok 
// console.log(color2);
// ok 
// console.log(body);
// ok 
function setGradient(){
  body.style.background = "linear-gradient(to right,"
                            +color1.value
                            +", "
                            +color2.value
                            +")";
  css.textContent = body.style.background + ";";
}

// color1.addEventListener("input",function(){
//   // console.log (color1.value);
//   //body.style.background = "linear-gradient(to right, red, yellow)";
//   body.style.background = "linear-gradient(to right,"
//                             +color1.value
//                             +", "
//                             +color2.value
//                             +")";
// })
// color2.addEventListener("input",function(){
//   // console.log (color2.value);
//   body.style.background = "linear-gradient(to right,"
//                             +color1.value
//                             +","
//                             +color2.value
//                             +")";
// })
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
//note:we don't need to call the function setGradient as it is a CALLBACK FUNCTION
