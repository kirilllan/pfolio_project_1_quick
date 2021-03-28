// back to top button
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0; 
  document.documentElement.scrollTop = 0; 
}
// end of back to top button

// header color change on scroll
window.onscroll = function() {
  let header = document.querySelector('header nav ul');
  if (window.scrollY > 50) {
    header.classList.add('updated-class');
  } else {
    header.classList.remove('updated-class');
  }
}
// end of header colr change

// mobile menu toggle
const hamburger = document.getElementById('hamburger');
const navUl = document.getElementById('nav-ul');

hamburger.addEventListener('click', () => {
  console.log(5)
  navUl.classList.toggle('show')
})
// end of mobile menu toggle