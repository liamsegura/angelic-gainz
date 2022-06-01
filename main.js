function headsortails(){
    x = Math.random()

    console.log(x < .5 ? 'heads' : 'tails')
}

headsortails()


// window.onload = function() {
//     document.documentElement.classList.add('show-time');
// };


// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
  
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // you could also use addEventListener() instead
    window.onload = function() {
      
       // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
       window.requestAnimationFrame(function() {
      
          // GSAP custom code goes here     
          document.documentElement.classList.add('show-time');
         
       });
      
    };
  
});