const list = document.querySelectorAll(".list");

list.forEach((item) => item.addEventListener("click", ClassActive));

function ClassActive() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
