// $(document).ready(function () {
//     $('.carousel__inner').slick({
//         prevArrow: '<button type="button" class="slick-prev"><img src="icons/carousel/left.svg"></button>',
//         nextArrow: '<button type="button" class="slick-next"><img src="icons/carousel/right.svg"></button>',
//         responsive: [
//             {
//                 breakpoint: 992,
//                 settings: {
//                     dots: true,
//                     arrows: false
//                 }
//             }
//         ]
//     });
// });

var slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
  });

document.querySelector('.prev').addEventListener('click', () => {
  slider.goTo('prev');
});

document.querySelector('.next').addEventListener('click', () => {
  slider.goTo('next');
});