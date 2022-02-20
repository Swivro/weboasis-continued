window.onload = function WindowLoad(event) {
var searchValue = document.getElementById("searchValue");
searchValue.placeholder = "Search via " + localStorage.getItem("searchname"); 
var engine = document.getElementById("engines");
    
if (localStorage.getItem("searchengine")) {
    engine.value = (localStorage.getItem("searchname"));
    
} else {
    var engine = document.getElementById("engines");
    localStorage.setItem("searchengine", "https://search.swivro.net/secure/search?q=");
    localStorage.setItem("searchname", "swivro");
    location.reload();
}
}