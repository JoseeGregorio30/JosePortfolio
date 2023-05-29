const me = document.querySelector(".myself");

me.addEventListener("mouseover", () => {
  me.style.opacity = "50%";
});

me.addEventListener("mouseout", () => {
  me.style.opacity = "100%";
});
