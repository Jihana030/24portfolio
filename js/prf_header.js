(function () {
    'use strict';
    const label = document.querySelector('#prfLabel');
    const body = document.querySelector('body');
    const html = document.querySelector('html');

    label.addEventListener('click', e => {
        let header = document.createElement('header');
        header.setAttribute('data-include-path', "./header.html");
        let script = document.createElement('script');
        script.src = "./js/include.js";
        body.prepend(header);
        html.append(script);
    })
    
})();