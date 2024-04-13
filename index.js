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