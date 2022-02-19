var input = document.getElementsByClassName("searchValue")[0];
input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
   event.preventDefault();
   document.getElementsByClassName("searchBtn")[0].click();
  }
});