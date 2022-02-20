function saveConfig() {
    
    // engine = the search engine select menu
    var engine = document.getElementById("engines");
    
    // self-explanatory
    if (engine.value == "swivro") {
        localStorage.setItem("searchengine", "https://search.swivro.net/secure/search?q=");
        localStorage.setItem("searchname", "swivro");
    }
    
    if (engine.value == "google") {
        localStorage.setItem("searchengine", "https://www.google.com/search?q=");
        localStorage.setItem("searchname", "google");
    }
    
    if (engine.value == "bing") {
        localStorage.setItem("searchengine", "https://www.bing.com/search?q=");
        localStorage.setItem("searchname", "bing");
    }
    
    if (engine.value == "qwant") {
        localStorage.setItem("searchengine", "https://www.qwant.com/?q=");
        localStorage.setItem("searchname", "qwant");
    }
    
    if (engine.value == "brave") {
        localStorage.setItem("searchengine", "https://search.brave.com/search?q=");
        localStorage.setItem("searchname", "brave");
    }
    
    if (engine.value == "duckduckgo") {
        localStorage.setItem("searchengine", "https://duckduckgo.com/?q=");
        localStorage.setItem("searchname", "duckduckgo");
    }
    
    if (engine.value == "startpage") {
        localStorage.setItem("searchengine", "https://www.startpage.com/sp/search?query=");
        localStorage.setItem("searchname", "startpage");
    }
    
    if (engine.value == "ecosia") {
        localStorage.setItem("searchengine", "https://www.ecosia.org/search?method=index&q=");
        localStorage.setItem("searchname", "ecosia");
    }
    
    if (engine.value == "mojeek") {
        localStorage.setItem("searchengine", "https://www.mojeek.com/search?q=");
        localStorage.setItem("searchname", "mojeek");
    }
    
    if (engine.value == "yandex") {
        localStorage.setItem("searchengine", "https://yandex.com/search/?text=");
        localStorage.setItem("searchname", "yandex");
    }
    
   var saveBtn = document.getElementById("saveBtn");
   saveBtn.innerHTML = "<i class='fas fa-check-circle'></i>";
    
    setTimeout(function() {
     saveBtn.innerHTML = "Save";
    }, 1500);
}