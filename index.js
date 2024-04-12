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
})
document.querySelector("#Post-btn").addEventListener("click",() => {
   document.querySelector(".post-interface").style.display = "block";
})