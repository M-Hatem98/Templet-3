let section = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".progress span");
// console.log(section)
window.addEventListener("scroll" , function () {
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
});


let nums = document.querySelectorAll(".box .number");
let countSection = document.querySelector(".stats");
let started = false; // function Started ? No
window.addEventListener("scroll", function () {
  if (window.scrollY >= countSection.offsetTop - 200) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
});
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 1000 / goal);
}