let profile = document.getElementById("profile");
let sub = document.getElementById("sub-menu");
let sub_d = false;
profile.addEventListener("click",() =>{
   sub_d = !sub_d;
   if(sub_d == true){
    sub.style.display = "block";
    sub.style.transformOrigin = "top";
    sub.style.animation = "sub-m-ani 0.5s ease-out 1 forwards"
   }
   else{
    sub.style.transformOrigin = "top";
    sub.style.animation = "sub-m-ani-r 0.5s ease 1 forwards"
    setTimeout(()=>{
        sub.style.display = "none";},600)
   }
   
    
})

document.querySelector(".post-close").addEventListener("click",()=>{
   document.querySelector(".post-interface").style.display = "none";
   document.body.style.overflow = "scroll";
   document.body.style.overflowX = "hidden";

})
document.querySelector("#Post-btn").addEventListener("click",() => {
   document.querySelector(".post-interface").style.display = "block";
   document.body.style.overflow = "hidden";
   document.querySelector(".post-interface").style.overflow = "scroll";
})

document.querySelector(".profile-info h1").textContent = localStorage.getItem("username");
document.querySelector(".sub-text p").textContent = localStorage.getItem("username");
document.querySelector("#user-id").textContent = "@"+localStorage.getItem("username").split(" ")[0];

let input_file = document.getElementById("input-file");
let prev = document.querySelector(".preview");

input_file.addEventListener("change", event =>{

   let file = event.target.files[0];
   if(file){

      const Reader = new FileReader();

      Reader.onload = function(e){
         let img = document.createElement("img");
         img.src = e.target.result;
         img.style.width = "100%"
         img.style.height = "100%"
         prev.innerHTML = " "
         prev.appendChild(img);

      }

      Reader.readAsDataURL(file);

   }

});

window.addEventListener('scroll', function() {
   if(window.scrollY > 36) {
      // Hide elements when scrolled down
      document.querySelector(".navbar-1").style.display = "none";
      document.querySelector(".navbar-3").style.display = "none";
      // Add a class to the navbar for styling changes
      document.querySelector(".navbar").classList.add("on_scroll");
      document.querySelector(".navbar").classList.remove(".navbar");
   } else {
      // Show elements and reset navbar styles when scrolled up
      document.querySelector(".navbar-1").style.display = "flex";
      document.querySelector(".navbar-3").style.display = "flex";
  
      // Remove the class added for styling changes
      document.querySelector(".on_scroll").classList.add("navbar");
      document.querySelector(".navbar").classList.remove("on_scroll");
   }
});

// --background-c: hsl(0, 0%, 17%);
//     --text-c: hsl(0, 0%, 100%);
//     --nav-c: hsl(0, 0%, 38%);
//     --nav-sha-c: hsl(0, 0%, 26%);
//     --nav-inp-c: hsl(0, 0%, 55%);
//     --text: rgb(255, 255, 255);
//     --lside-content: hsl(0, 0%, 28%);
//     --subheadings : hsl(0, 0%, 77%);
//     --headings : hsl(0, 0%, 100%);
//     --hover-bc:hsl(0, 0%, 21%);

let them = false;

function theme() {
   them = !them

   if(them){

      document.documentElement.style.setProperty('--background-c', 'hsl(0, 0%, 17%)');
      document.documentElement.style.setProperty('--text-c', 'hsl(0, 0%, 100%)');
      document.documentElement.style.setProperty('--nav-c', 'hsl(0, 0%, 38%)');
      document.documentElement.style.setProperty('--nav-inp-c', 'hsl(0, 0%, 55%)');
      document.documentElement.style.setProperty('--nav-sha-c', 'hsl(0, 0%, 26%)');
      document.documentElement.style.setProperty('--text', 'rgb(255, 255, 255)');
      document.documentElement.style.setProperty('--lside-content', 'hsl(0, 0%, 28%)');
      document.documentElement.style.setProperty('--subheadings', 'hsl(0, 0%, 77%)');
      document.documentElement.style.setProperty('--headings', 'hsl(0, 0%, 100%)');
      document.documentElement.style.setProperty('--hover-bc', 'hsl(0, 0%, 21%)');
   }
   else{
      document.documentElement.style.setProperty('--background-c', 'hsl(210, 100%, 97%)');
      document.documentElement.style.setProperty('--text-c', 'hsl(0, 0%, 13%)');
      document.documentElement.style.setProperty('--nav-c', 'hsl(0, 0%, 100%)');
      document.documentElement.style.setProperty('--nav-inp-c', 'hsl(210, 15%, 87%)');
      document.documentElement.style.setProperty('--nav-sha-c', 'hsl(0, 0%, 89%)');
      document.documentElement.style.setProperty('--text', 'black');
      document.documentElement.style.setProperty('--lside-content', 'hsl(220, 100%, 99%)');
      document.documentElement.style.setProperty('--subheadings', 'hsl(0, 0%, 34%)');
      document.documentElement.style.setProperty('--headings', 'hsl(0, 0%, 15%)');
      document.documentElement.style.setProperty('--hover-bc', 'hsl(0, 0%, 85%)');
   }

}
