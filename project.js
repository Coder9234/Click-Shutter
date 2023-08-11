// Hamburger button
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector(".navbar");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  navbar.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))

// fade-in animation
const faders = [...document.querySelectorAll(".fade-in")];
function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};


function checkSlide() {
  faders.forEach((fader) => {
     // half way through the image
     const slideInAt = (window.scrollY + window.innerHeight) - fader.clientHeight / 2;
     // bottom of the image
     const imageBottom = fader.offsetTop + fader.clientHeight;
     const isHalfShown = slideInAt > fader.offsetTop;
     const isNotScrolledPast = window.scrollY < imageBottom;
     if (isHalfShown && isNotScrolledPast) {
        console.log("appear add honi chaye!!")
       fader.classList.add('appear');
     }
  })
}
window.addEventListener('scroll', debounce(checkSlide));

//Contact Page
document.querySelectorAll(".text-input").forEach((element) => {
  element.addEventListener("blur", (Event) => {
    if (Event.target.value != "")
    {
      Event.target.nextElementSibling.classList.add("filled");
    }
    else
    {
      Event.target.nextElementSibling.classList.remove("filled");
    }
  });
});

