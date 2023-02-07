function toggleAbstract(id) {
  var abstract = document.getElementById("abstract-" + id);
  var button = document.getElementById("button-" + id);
  if (abstract.style.display === "none") {
    abstract.style.display = "block";
    button.innerHTML = "Hide abstract";
  } else {
    abstract.style.display = "none";
    button.innerHTML = "Show abstract";
  }
}
