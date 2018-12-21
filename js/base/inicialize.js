// Identificar o clique no menu
// Verificar o item que foi clicado e fazer referência com o alvo
// Verificar a distância entre o alvo e o topo
// Animar o scroll até o alvo

const menuItems = document.querySelectorAll('.main-header a[href^="#"]');

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
});

function getScrollTopByHref(element) {
  const id = element.getAttribute('href');
  return document.querySelector(id).offsetTop;
}

function scrollToPosition(to) {
  smoothScrollTo(2500, to);
}

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.currentTarget)- 60;
	scrollToPosition(to);
}



// Caso deseje suporte a browsers antigos / que não suportam scroll smooth nativo
/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int) endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 2000;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};

// function smoothScroll(target, duration) {
//   var target = document.querySelector(target);
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;
//   console.log(startPosition)

//   function animation(currentTime) {
//     if (startTime === null) {
//       startTime = currentTime;
//     }
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed, startPosition, distance, duration);
//     window.screenTop(a, run);
//     if (timeElapsed < duration) {
//       requestAnimationFrame(animation);
//     }
//   }

//   function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) {
//       return c / 2 * t * t * b;
//     }
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animation);
// }

// var scrollSection = document.querySelector('.main-header a[href^="#"]');
// scrollSection.addEventListener('cllick', function () {
//   smoothScroll('.main-header a[href^="#"]', 1000);
// });