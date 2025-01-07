const menu = document.getElementById("nav-links");

function toggleMenu() {
  if (menu.style.left === "0px") {
    menu.style.left = "-100%";
  } else {
    menu.style.left = "0px";
  }
}

const carousel = document.getElementById("carousel");

setInterval(() => {
  const subtractPadding =
    window.innerWidth > 850 ? 80 : window.innerWidth > 450 ? 40 : 20;
  if (carousel.scrollLeft + carousel.offsetWidth >= carousel.scrollWidth) {
    carousel.scrollTo({ left: 0, behavior: "smooth" });
  } else {
    carousel.scrollBy({
      left: carousel.offsetWidth - subtractPadding,
      behavior: "smooth",
    });
  }
}, 3000);
