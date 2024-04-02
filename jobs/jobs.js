let loading = document.getElementById("preloader");
let pop1 = document.getElementById("apply1");
let pop2 = document.getElementById("apply2");
let pop3 = document.getElementById("apply3");
let pop = document.getElementsByClassName("Apply");
setTimeout(()=>{loading.style.display = "none"} ,3500);

function software_engi(){
    pop1.style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
function data_sci(){
    pop2.style.display = "block";
}
function ai_engi(){
    pop3.style.display = "block";
}
function Close() {
    let pops = document.getElementsByClassName("Apply");
    for (let i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
    }
}
