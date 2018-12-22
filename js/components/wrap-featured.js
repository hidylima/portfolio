function typeWriter(element) {
  var textArray = element.innerHTML.split("");
  element.innerHTML = "";
  textArray.forEach((letra, i) => {
    setTimeout(() => {
      element.innerHTML += letra;
    }, 100 * i);
  });
}
function execute(element) {
  return document.querySelector(element);
}

typeWriter(execute(".wrap-featured .subtitle"));
