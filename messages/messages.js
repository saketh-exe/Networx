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
