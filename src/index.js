// var main = document.getElementById("main");
var searchInput = document.getElementById("searchInput");
var suggestion = document.getElementById("suggestion");
searchInput.addEventListener("keyup", (event) => {
  var query = event.target.value;
  if (query) {
    suggestion.innerHTML = "";
    searchQuery(query);
  } else {
    suggestion.classList.remove("open-suggestion", "suggestion");
    suggestion.classList.add("hide-animate");
    setTimeout(() => {
      suggestion.classList.remove("hide-animate");
      suggestion.classList.add("hide");
    }, 200);
  }
});

function searchQuery(query) {
  var limit = 10;
  for (var i = 0; i < limit; i++) {
    var div = document.createElement("div");
    div.setAttribute("class", "new-suggestion-item");

    var paragraph = document.createElement("p");
    paragraph.setAttribute("class", "items-text");
    paragraph.innerHTML = query + " " + i;

    var line = document.createElement("hr");

    div.appendChild(paragraph);
    if (i < limit - 1) {
      div.appendChild(line);
    }
    suggestion.appendChild(div);
  }
  suggestion.classList.remove("hide");
  suggestion.classList.add("open-suggestion", "suggestion");
}
