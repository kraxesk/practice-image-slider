const swiper = new Swiper('.slider-wrapper', {
  loop: true, // Включает зацикливание
  grabCursor: true, // Показывает курсор "перетаскивания"
  spaceBetween: 30, // Расстояние между слайдами

  // Пагинация
  pagination: {
    el: '.swiper-pagination', // Элемент пагинации
    clickable: true, // Позволяет кликать по пагинации
    dynamicBullets: true // Динамические точки
  },

  // Навигационные стрелки
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  // Адаптивность
  breakpoints: {
    0: {
      slidesPerView: 1 // Количество видимых слайдов на экране менее 768px
    },
    768: {
      slidesPerView: 2 // Количество видимых слайдов на экране от 768px
    },
    1024: {
      slidesPerView: 3 // Количество видимых слайдов на экране от 1024px
    }
  }
});
