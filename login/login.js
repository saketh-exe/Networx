let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 5000); // Change slide every 3 seconds
}
// function redirectToIndex() {
//     // Use window.location.href for redirection
//     window.location.href = '../index.html';
// }
let log = document.getElementById("sign-up");
let lc = document.getElementById("sign-co");
function Login(){
 
  log.style.animation = "Fade_Down 0.5s ease 1";
  setTimeout(() =>{
    lc.style.display = "none";
  }, 100)
  setTimeout(function() {
      log.style.display = "none";
  }, 300);
}



function signin(){
  lc.style.display = "block";
  log.style.display = "block";
  log.style.animation = "signup 0.5s ease 1";
}