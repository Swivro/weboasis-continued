function saveConfig() {
    
    const yourInput = document.getElementById("idGoesHere");
     let fromTo = {
        "google": "https://google.com/?q=",
        "qwant": "https://qwant.com/?q="
        // more things go here...
     }
    localStorage.setItem(yourInput.value, fromTo[yourInput.value])  
}