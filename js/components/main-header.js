function init() {
    var cabecalho = document.querySelector('.main-header');
    var cabecalhoOffset = cabecalho.offsetTop;

    function verificaCabecalho() {
        var scrollTop = window.scrollY;

        if (scrollTop > cabecalhoOffset) {      
            cabecalho.classList.add('-active');
        } else {       
            cabecalho.classList.remove('-active');
        }
    }
    
    window.addEventListener('scroll', verificaCabecalho);
    window.addEventListener('resize', verificaCabecalho);
}

window.addEventListener('load', init);