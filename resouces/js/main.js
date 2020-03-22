// Back to top arrow
toTopBtn = document.getElementById('toTop');
window.onscroll = function() {
    scrollFunction()
};

toTopBtn.addEventListener('click', function() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    toTopBtn.style.display = "block";
  } else {
    toTopBtn.style.display = "none";
  }
}