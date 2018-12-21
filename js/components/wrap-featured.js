function typeWriter(element){
    var textArray = element.innerHTML.split('');
    element.innerHTML = '';
    textArray.forEach((letra, i) => {
        
        setTimeout(() => {
            element.innerHTML += letra;
        }, 100 * i);
    });
    
}

//  function typeWriter(elemento) {
//     const textoArray = elemento.innerHTML.split('');
//     elemento.innerHTML = '';
//     for(let i = 0; i < textoArray.length; i++) {
//       setTimeout(() => elemento.innerHTML += textoArray[i], 75 * i);
//     }
//   }

var title = document.querySelector('.wrap-featured .title');
var subtitle = document.querySelector('.wrap-featured .subtitle');

typeWriter(title);
