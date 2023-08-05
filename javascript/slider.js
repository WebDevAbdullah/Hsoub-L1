const links = document.querySelectorAll(".itemLinks");
const wrapper = document.getElementById("wrapper");

links.forEach(function(link) {
  link.addEventListener("click", function(e) {
    links.forEach(function(item) {
      item.classList.remove("active");
    });

    const clickedLink = e.target;
    const position = clickedLink.getAttribute("data-pos");
    const translateValue = `translateX(${position * 25}%)`;
    wrapper.style.transform = translateValue;

    clickedLink.classList.add("active");
  });
});

links[0].classList.add("active");
