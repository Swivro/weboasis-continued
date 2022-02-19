function saveConfig() {
    
    // engine = the search engine select menu
    var engine = document.getElementById("engines");
    
    // self-explanatory
    if engine.value == "swivro") {
        localStorage.setItem("searchengine", "https://search.swivro.net/secure/search?q=");
    }
    
    if engine.value == "google") {
        localStorage.setItem("searchengine", "https://www.google.com/search?q=");
    }
    
    if engine.value == "bing") {
        localStorage.setItem("searchengine", "https://www.bing.com/search?q=");
    }
    
    if engine.value == "qwant") {
        localStorage.setItem("searchengine", "https://www.qwant.com/?q=");
    }
    
    if engine.value == "brave") {
        localStorage.setItem("searchengine", "https://search.brave.com/search?q=");
    }
    
    if engine.value == "duckduckgo") {
        localStorage.setItem("searchengine", "https://duckduckgo.com/?q=");
    }
    
    if engine.value == "startpage") {
        localStorage.setItem("searchengine", "https://www.startpage.com/sp/search?query=");
    }
    
    if engine.value == "ecosia") {
        localStorage.setItem("searchengine", "https://www.ecosia.org/search?method=index&q=");
    }
    
    if engine.value == "mojeek") {
        localStorage.setItem("searchengine", "https://www.mojeek.com/search?q=");
    }
    
    if engine.value == "yandex") {
        localStorage.setItem("searchengine", "https://yandex.com/search/?text=");
    }
    
    
   // saving this code for later
   // engine.value = "brave";
}