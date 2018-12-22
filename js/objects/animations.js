const debounce = function (func, wait, immediate) {
  let timeout;
  return function (...args) {
    const context = this;
    const later = function () {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
};
var target = document.querySelectorAll('[data-anime]');
const animationClass = '-animate';

function animeScroll() {
  const windowTop = window.pageYOffset + (window.innerHeight * .80);
  

  target.forEach(function (element) {

  if (windowTop > element.offsetTop) {
    element.classList.add(animationClass);
    
  } else {
    element.classList.remove(animationClass);
    
  }
  console.log(" windowTop ",windowTop)
  console.log(" elemment ",element.offsetTop)
      

});
}
animeScroll();

if (target.length) {
  window.addEventListener('scroll', debounce(function () {
    animeScroll();
  }, 200));
}