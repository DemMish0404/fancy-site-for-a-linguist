const menuBurger = document.getElementsByClassName('burger-menu')[0]
const navHeader = document.getElementsByClassName('nav-header')[0]

const body = document.querySelector('body')


//menu burger
body.addEventListener('click', (event)=>{
   if(event.target.closest('.burger-menu')){
      menuBurger.classList.toggle('active')
      navHeader.classList.toggle('active')
   }
})

//menu burger END



//* swiper SLIDER
const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
 
   // If we need pagination
   pagination: {
     el: '.swiper-pagination',
   },
   slidesPerView: 1, //сколько слайдов доступно к просмотру за раз
   spaceBetween: 20,
   slidesPerGroup: 1, //сколько слайдов мы листаем в одно нажатие кнопки / свайп

   breakpoints: {
      1360: {
        slidesPerView: 2,
        spaceBetween: 0,
        
      }
    },


   // Navigation arrows
   navigation: {
     nextEl: '.swiper-button-next',
     prevEl: '.swiper-button-prev',
   },
 
   // And if we need scrollbar
   scrollbar: {
     el: '.swiper-scrollbar',
   },
 });

//* swiper slider END