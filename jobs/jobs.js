let loading = document.getElementById("preloader");
let pop1 = document.getElementById("apply1");
let pop2 = document.getElementById("apply2");
let pop3 = document.getElementById("apply3");
let pop = document.getElementsByClassName("Apply");
let search = document.getElementById("search");
let job_cards = document.getElementsByClassName("job-cards");

setTimeout(() => {
    loading.style.display = "none";
    document.body.style.overflowY = "scroll"
}, 2500);

function software_engi() {
    pop1.style.display = "block";
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function data_sci() {
    pop2.style.display = "block";
}

function ai_engi() {
    pop3.style.display = "block";
}

function Close() {
    let pops = document.getElementsByClassName("Apply");
    for (let i = 0; i < pops.length; i++) {
        pops[i].style.display = "none";
    }
}

let jobTitles = document.querySelectorAll('.job-cards h2'); // Select all job title elements

search.addEventListener("input", (e) => {
    let search_term = e.target.value.trim().toLowerCase(); // Trim and convert search term to lowercase
    for (let j = 0; j < job_cards.length; j++) {
        let job_title = jobTitles[j].textContent.trim().toLowerCase(); // Get job title text content and convert to lowercase
        if (job_title.includes(search_term)) {
            job_cards[j].style.display = "block";
        } else {
            job_cards[j].style.display = "none";
        }
    }
});
