// var main = document.getElementById("main");
var searchInput = document.getElementById("searchInput");
var suggestion = document.getElementById("suggestion");
searchInput.addEventListener("keyup", (event) => {
  var query = event.target.value;
  if (query) {
    suggestion.innerHTML = "";
    searchQuery(query);
  } else {
    suggestion.innerHTML = "";
  }
});

function searchQuery(query) {
  console.log(query);
  for (var i = 0; i < 10; i++) {
    var paragraph = document.createElement("p");
    paragraph.innerHTML = query + " " + i;
    suggestion.appendChild(paragraph);
  }
}
