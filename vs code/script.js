const items = document.querySelectorAll(".item");
const blob = document.querySelector(".blob");

items.forEach((item, index) => {
  item.addEventListener("click", () => {
    document.querySelector(".item.active").classList.remove("active");
    item.classList.add("active");

    blob.style.left = `${18 + index * 80}px`;

    // bounce reset
    blob.style.transform = "scale(0.9)";
    setTimeout(() => {
      blob.style.transform = "scale(1)";
    }, 120);
  });
});



