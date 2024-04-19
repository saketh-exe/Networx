let loading = document.getElementById("preloader");
setTimeout(() => {
    loading.style.display = "none";
}, 2500);

function sendMessage() {
    
    var messageInput = document.getElementById("messageInput");
    var messageText = messageInput.value.trim();


    if (messageText !== "") {
     
        var messageElement = document.createElement("div");
        messageElement.classList.add("message", "sent");
        messageElement.innerHTML = "<p>" + messageText + "</p>";

   
        var chatBox = document.getElementById("chatBox");
        chatBox.appendChild(messageElement);

    
        messageInput.value = "";

     
        chatBox.scrollTop = chatBox.scrollHeight;
    }
}


document.getElementById("sendMessageBtn").addEventListener("click", sendMessage);


document.getElementById("messageInput").addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        sendMessage(); 
    }
});

let cards = document.getElementsByClassName("contact-card");

Array.from(cards).forEach(card => {
    card.addEventListener("click", (e) => {

        
        // Traverse up the DOM tree until the card element is found
        let target = e.target;
        while (target !== card && target.parentElement) {
            target = target.parentElement;
        }

        // If the card element is found, apply the "Active" class
        if (target === card) {
            // Remove "Active" class from all cards
            Array.from(cards).forEach(elem => {
                elem.classList.remove("Active")
            });
            // Add "Active" class to the clicked card
            card.classList.add("Active");
            let name = card.querySelector(".contact-name").innerHTML;
            document.querySelector(".chat-header h2").innerHTML = `${name}`;
        }
    });
});


