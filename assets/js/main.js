
const readMoreBtns = document.querySelectorAll(".read-more-btn");

readMoreBtns.forEach(function(btn) {
  const paragraph = btn.previousElementSibling;
  btn.addEventListener("click", function() {
    if (paragraph.classList.contains("show-more")) {
      paragraph.classList.remove("show-more");
      btn.innerHTML = "Read More";
    } else {
      paragraph.classList.add("show-more");
      btn.innerHTML = "Read Less";
    }
  });
});



// slider ----

'use strict'
$('.testimonial-slider').slick({
    prevArrow: '<div class="prev"><i class="fa-solid fa-arrow-left"></i></div>',
    nextArrow: '<div class="next"><i class="fa-solid fa-arrow-right"></i></div>'
});
