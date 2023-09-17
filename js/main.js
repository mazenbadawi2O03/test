
let nums = document.querySelectorAll(".nums .num");

nums.forEach((num) => startCont(num));
window.onscroll=function(){
    if(window.scrollY >=section.offsetTop){
        nums.forEach((num) => startCont(num));   
    }
}

function startCont(el) {
    let goal = parseInt(el.dataset.goal);
    let count = setInterval(() => {
        el.textContent = parseInt(el.textContent) + 1;
        if (parseInt(el.textContent) === goal) {
            clearInterval(count);
        }
    }, 2000/ goal);
}


  document.addEventListener('DOMContentLoaded', function () {
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
      },
      touch: true,
      keyboard: true,
    });
  });
