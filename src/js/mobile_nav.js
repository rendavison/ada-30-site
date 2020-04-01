var hamburger = document.getElementById('mobile-nav');
var links = document.getElementById('main-links');

hamburger.addEventListener('click', function(){
  if (links.classList.contains('hide')) {
    links.classList.remove('hide')
  } else {
    links.classList.add('hide')
  }
})
