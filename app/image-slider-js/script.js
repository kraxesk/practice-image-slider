document.addEventListener('DOMContentLoaded', event => {
  //buttons
  const next = document.querySelector('.next');
  const prev = document.querySelector('.prev');

  //slides
  const slider = document.querySelector('.slider'); //main container slider
  let slides = document.querySelector('.slides'); //container slides
  const slide = document.getElementsByClassName('slide'); //all slides

  //indexes
  let activeIndex = 0;
  const lastSlideIndex = slide.length - 1;
  const slideCount = slide.length;

  //counts from navigation
  let firstCount = document.getElementById('firstCount');
  let secondCount = document.getElementById('secondCount');

  //flag
  let isAnimating = false;

  secondCount.textContent = slideCount;

  next.addEventListener('click', () => {
    if (isAnimating) {
      return;
    }
    isAnimating = true;

    slides.style.transition = `all 0.5s linear`;

    activeIndex++;
    firstCount.textContent = activeIndex + 1; //navigation

    if (activeIndex <= lastSlideIndex) {
      counter(activeIndex);
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    } else if (activeIndex === slideCount) {
      activeIndex = 0; //navigation
      firstCount.textContent = activeIndex + 1; //navigation

      let cloneSlides = slides.cloneNode(true);
      cloneSlides.style.transform = `translateX(-4000px)`;
      slides.insertAdjacentElement('afterEnd', cloneSlides); // элемент в конец
      setTimeout(() => {
        counter(slideCount); //-4800
        cloneSlides.style.transform = `translateX(-4800px)`;
      });
      setTimeout(() => {
        slides.remove();
        slides = cloneSlides;
        slides.style.transition = `none`;
        activeIndex = 0;
        slides.style.transform = `translateX(0px)`;
        isAnimating = false;
      }, 500);
    }
  });

  prev.addEventListener('click', () => {
    if (isAnimating) {
      return;
    }
    isAnimating = true;

    slides.style.transition = `all 0.5s linear`;

    activeIndex--;
    firstCount.textContent = activeIndex + 1; //navigation

    if (activeIndex >= 0) {
      counter(activeIndex);
      setTimeout(() => {
        isAnimating = false;
      }, 500);
    } else {
      const cloneSlides = slides.cloneNode(true);
      activeIndex = 5; //navigation
      firstCount.textContent = activeIndex + 1; //navigation
      slides.style.transition = `none`;
      cloneSlides.style.transform = `translateX(-${
        slider.clientWidth * slideCount
      }px)`;
      slides.style.transform = `translateX(-${
        slider.clientWidth * slideCount
      }px)`;
      slider.prepend(cloneSlides); // элемент в начало

      setTimeout(() => {
        slides.style.transition = `all 0.5s linear`;
        slides.style.transform = `translateX(-${
          slider.clientWidth * (slideCount - 1)
        }px)`;
        cloneSlides.style.transform = `translateX(-${
          slider.clientWidth * (slideCount - 1)
        }px)`;
      });
      activeIndex = lastSlideIndex;
      setTimeout(() => {
        slides.remove();
        slides = cloneSlides;
        isAnimating = false;
      }, 500);
    }
  });
});

//Кейс-задача № 5

//Вариант через копию первого и последнего слайдов в конец и начало карусели соответственно

// document.addEventListener('DOMContentLoaded', event => {
//   const next = document.querySelector('.next');
//   const prev = document.querySelector('.prev');
//   const slider = document.querySelector('.slider');
//   let slides = document.querySelector('.slides');
//   const slide = document.getElementsByClassName('slide');

//   let activeIndex = 1; // Начальный индекс сделаем 1, тк клон последнего слайда будет в начале
//   const slideCount = slide.length;
//   let firstCount = document.getElementById('firstCount');
//   let secondCount = document.getElementById('secondCount');
//   let isAnimating = false;
//   let startX, currentX, diffX;

//   secondCount.textContent = slideCount;

//   // Отдельное клонирование первого и последнего слайдов
//   const firstSlideClone = slide[0].cloneNode(true);
//   const lastSlideClone = slide[slideCount - 1].cloneNode(true);

//   slides.appendChild(firstSlideClone); //добавляет копию первого слайда в конец контейнера
//   slides.insertBefore(lastSlideClone, slide[0]); // вставляет копию последнего слайда в начало контейнера

//   function updateSlideWidth() {
//     slides.style.transition = `none`;
//     slides.style.transform = `translateX(-${
//       activeIndex * slider.clientWidth
//     }px)`;
//   }

//   window.addEventListener('resize', updateSlideWidth);

//   function counter(currentSlide) {
//     slides.style.transition = `all 0.5s linear`;
//     slides.style.transform = `translateX(-${
//       currentSlide * slider.clientWidth
//     }px)`;
//   }

//   next.addEventListener('click', () => {
//     if (isAnimating) return;
//     isAnimating = true;

//     activeIndex++;
//     firstCount.textContent = activeIndex === slideCount + 1 ? 1 : activeIndex;

//     counter(activeIndex);

//     if (activeIndex > slideCount) {
//       setTimeout(() => {
//         slides.style.transition = `none`;
//         activeIndex = 1;
//         slides.style.transform = `translateX(-${
//           activeIndex * slider.clientWidth
//         }px)`;
//         firstCount.textContent = activeIndex;
//         isAnimating = false;
//       }, 500);
//     } else {
//       setTimeout(() => (isAnimating = false), 500);
//     }
//   });

//   prev.addEventListener('click', () => {
//     if (isAnimating) return;
//     isAnimating = true;

//     activeIndex--;
//     firstCount.textContent = activeIndex === 0 ? slideCount : activeIndex;

//     counter(activeIndex);

//     if (activeIndex === 0) {
//       setTimeout(() => {
//         slides.style.transition = `none`;
//         activeIndex = slideCount;
//         slides.style.transform = `translateX(-${
//           activeIndex * slider.clientWidth
//         }px)`;
//         firstCount.textContent = activeIndex;
//         isAnimating = false;
//       }, 500);
//     } else {
//       setTimeout(() => (isAnimating = false), 500);
//     }
//   });

//   function handleTouchStart(event) {
//     startX = event.touches[0].clientX;
//   }

//   function handleTouchMove(event) {
//     currentX = event.touches[0].clientX;
//     diffX = startX - currentX;
//   }

//   function handleTouchEnd() {
//     if (diffX > 50) {
//       next.click();
//     } else if (diffX < -50) {
//       prev.click();
//     }
//   }

//   slider.addEventListener('touchstart', handleTouchStart);
//   slider.addEventListener('touchmove', handleTouchMove);
//   slider.addEventListener('touchend', handleTouchEnd);

//   updateSlideWidth();
// });
