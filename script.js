const menuToggle = document.querySelector('.menu-toggle');
const menuLinks = document.querySelectorAll('.menu li a');

menuLinks.forEach(function(link) {
  link.addEventListener('click', function() {
    menuToggle.checked = false; 
  });
});
