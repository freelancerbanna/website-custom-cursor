const cursor = document.querySelector(".cursor");
window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.pageX + "px";
  cursor.style.top = e.pageY + "px";
  cursor.setAttribute("top-value", cursor.offsetTop - scrollY);
});
window.addEventListener("scroll", () => {
  const topValue = parseInt(cursor.getAttribute("top-value"));
  cursor.style.top = scrollY + topValue + "px";
});

window.addEventListener("click", () => {
  cursor.classList.add("active");
  setTimeout(() => {
    cursor.classList.remove("active");
  }, 300);
});
