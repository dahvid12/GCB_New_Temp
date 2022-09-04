function setup() {
 noCanvas();
}
function styleRemover(){
    // used to remove the styling of the CO name;
    var style2 = document.getElementById("centered1");
    style2.style.removeProperty("font-size");
}
var centeredState = 0;
  //  //  //\\  \\  \\
 //  //  //  \\  \\  \\
//  //  //    \\  \\  \\
var scrollPercent;
var scrollPrelim;

function rounder(){
scrollPercent = (scrollPrelim * 100);
scrollPercent = Math.round(scrollPercent)/10;
scrollPercent = scrollPercent * 10; 
// make sure to only run wiht updated number! // // // (Thats why it runs inside roudner)
   
}
function navCheck() {
    if (scrollPercent > 10) {
        document.getElementById("navbar").style.backgroundColor = "rgb(54,112,30)";
        document.getElementById("navLogo").style.opacity = 1;
        console.log("nav = changed");
    } 
    else if (scrollPercent < 10) {
        console.log("scroll remvoed");
        document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, .0)";
        document.getElementById("navLogo").style.opacity = 0.0;
    }
}

function draw() {

// scroll stuff
var altScroll = window.pageYOffset;
var userH = window.innerHeight
|| document.documentElement.clientHeight
|| document.body.clientHeight;

scrollPrelim = (altScroll / userH) ;
rounder();
navCheck();
console.log("offset scroll is: ", scrollPercent, "%");

// window adjust
var screenW = window.innerWidth;
 var screenH = window.innerHeight;
// constantly re-check for window size
console.log(mouseX, mouseY);
console.log('screen width is',screenW);
console.log('screen height is',screenH);





if (screenW >= 1440) {
    centeredState = 0;
    document.getElementById("centered1").style.cssText = "font-size: 40px";
}
if (screenW < 1440)  {
    // set Medium (2)
   // styleRemover();
   if(screenW >= 1150){
   centeredState = 1;
    console.log('screen is medium');
    document.getElementById("centered1").style.cssText = "font-size: 32px";
   }
}
if  (screenW < 1150) {
    if(screenW >= 900)
    {
    console.log('screen is kinda small');
    centeredState = 2;
    document.getElementById("centered1").style.cssText = "font-size: 28px";
    }
}
var intI = centeredState;
/*
switch (intI) {
    case 0: 
        // greater than 1440px 
        document.getElementById("centered1").style.cssText = "font-size: 40px";
    case 1: 
        // (screenW > 1440) && (screenW >= 1150)
        document.getElementById("centered1").style.cssText = "font-size: 32px";
    case 2: 
        // (screenW < 1150) && (screenW > 900)
        document.getElementById("centered1").style.cssText = "font-size: 28px";
        break;
    default: 
    document.getElementById("centered1").style.cssText = "font-size: 40px";
    
}
*/

console.log('centered Text state is', intI);
}

/*
if(screenW < 1700) {
console.log('screen W < 1700 px');
var style2 = document.createElement('style');
document.head.appendChild(style2);
style.sheet.insertRule('#centered1 {font-size: 30px}');
}
}

if (window.innerWidth >= 1700 ) {
    var preStyler = document.getElementById('centered1');
    element.style.removeProperty('font-size');
}
if (screenW >= 1700) {
    console.log('screen W >= 1700 px');
    // not working right!!
  //  document.getElementById('centered1').style.font-size = '40px';

  var style = document.createElement('style');
  
  document.head.appendChild(style);
  style.sheet.insertRule('#centered1 {font-size: 40px}');
  */
    
   // opption2 for GCB words
   
   


var set0 = '40px'; 

// adaptive screen


//
document.getElementById("contactButton").addEventListener("click",function(){
window.location.href = "contact.html";
});

document.getElementById("homeButton").addEventListener("click", function(){
// redirect -> home
window.location.href = "index.html";

});

document.getElementById("portfolioButton").addEventListener("click", function(){
 // goto portfolio
    window.location.href = "portfolio.html";
});

document.getElementById("servicesButton").addEventListener("click", function(){
// services tab: 10/27 not complete yet!
    window.location.href = "services.html";

});
 



    




