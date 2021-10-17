const navbarLinks = document.querySelectorAll(".navbar a");

navbarLinks.forEach((elem) => elem.addEventListener("click", navbarLinkClick));

function navbarLinkClick(event) {
  smoothScroll(event); //call the "smoothScroll function"
}

//smooth scrolling

//approach #1 - window.scrollTo() or window.scroll()
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.target.getAttribute("href");
  window.scrollTo({
    top: document.querySelector(targetId).offsetTop,
    behavior: "smooth",
  });
}
