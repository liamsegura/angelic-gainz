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
        const element = document.querySelector('.hero-text');
        const imgOne = document.querySelector('.img-one')
        const imgTwo = document.querySelector('.img-two')
        const aboutUs = document.querySelector('.about-container')
    


        element.classList.add('slide-in');
        imgOne.classList.add('slide-in');
        imgTwo.classList.add('slide-in');
        aboutUs.classList.add('slide-in');

        document.documentElement.classList.add('show-time');
         
       });
      
    };
  
});


const menu = document.getElementById('toggle').addEventListener('click', () => {

    const navbar = document.querySelector('navbar')
    const about = document.querySelector('.about')
    const home = document.querySelector('.home')

    navbar.classList.toggle('open')
    about.classList.toggle('open')
    home.classList.toggle('open')
})




document.addEventListener("DOMContentLoaded", function(event) {
  
    // wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
    // you could also use addEventListener() instead
    window.onload = function() {
      
       // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
       window.requestAnimationFrame(function() {
      
          // GSAP custom code goes here     
        const element = document.querySelector('.hero-text');
        const imgOne = document.querySelector('.img-one')
        const imgTwo = document.querySelector('.img-two')
   
    


        element.classList.add('slide-in');
        imgOne.classList.add('slide-in');
        imgTwo.classList.add('slide-in');
  
        document.documentElement.classList.add('show-time');
         
       });
      
    };
  
});


// fixes animation bug
let resizeTimer;
window.addEventListener("resize", () => {
  document.body.classList.add("resize-animation-stopper");
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    document.body.classList.remove("resize-animation-stopper");
  }, 400);
});

// const comingSoonButton = document.querySelectorAll('.buttonComingSoon')
// comingSoonButton.forEach(e => e.addEventListener('click', () => {
//   e.innerHTML = "COMING SOON"
// }))