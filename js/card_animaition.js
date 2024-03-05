(function () {
    const cardWrap = document.querySelectorAll('.card_wrap');
    
    cardWrap.forEach(e => {
        const explane = e.getElementsByClassName('card_explan');
        e.addEventListener("mouseover", (idx) => {
            console.log(explane)
          explane[0].classList.remove("dis-none");
        });
    })
    cardWrap.forEach(e => {
        const explane = e.getElementsByClassName('card_explan');
        e.addEventListener("mouseout", (idx) => {
          explane[0].classList.add("dis-none");
        });
    })
})();