window.onload = function WindowLoad(event) {
var engine = document.getElementById("engines");
if (localStorage.getItem("searchengine")) {
    engine.value = (localStorage.getItem("searchname"));
    
} else {
    var engine = document.getElementById("engines");
    localStorage.setItem("searchengine", "https://search.swivro.net/secure/search?q=");
    engine.value = "swivro";
}
}