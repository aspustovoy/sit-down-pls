import Swiper from 'swiper';
import { Navigation, Pagination, A11y, Grid, FreeMode, Thumbs, Autoplay } from 'swiper/modules';

Swiper.use([Navigation, Pagination, A11y, Grid, FreeMode, Thumbs, Autoplay]);


const swiper1 = new Swiper('.hero__swiper', {
  loop: true,
  autoplay: {
    delay: 10000,

    disableOnInteraction: false,
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },

  pagination: {
    el: '.hero__swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '"><svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="20"></circle></svg></div>';
    }
  },

  on: {
    autoplayTimeLeft(s, time, progress) {
      const progressCircle = document.querySelector(".swiper-pagination-bullet.swiper-pagination-bullet-active svg");
      progressCircle.style.setProperty("--progress", 1 - progress);
    },
  }
});

const swiper2 = new Swiper('.offers__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },

  navigation: {
    nextEl: '.offers__swiper-button-next',
    prevEl: '.offers__swiper-button-prev',
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
});

const swiper3 = new Swiper('.beneficial__swiper', {
  slidesPerView: 1,
  slidesPerGroup: 1,
  spaceBetween: 32,

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },

  navigation: {
    nextEl: '.beneficial__swiper-button-next',
    prevEl: '.beneficial__swiper-button-prev',
  },
  breakpoints: {
    650: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1300: {
      slidesPerView: 2,
    },
  }
});

const swiper4 = new Swiper('.catalog__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 2,
  lazy: true,
  grid: {
    rows: 3,
    fill: "row",
  },
  spaceBetween: 16,
  breakpoints: {
    650: {
      spaceBetween: 32,
      slidesPerView: 2,
      slidesPerGroup: 2,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
    950: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
    1300: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 33,
      grid: {
        rows: 3,
        fill: "row",
      },
    },
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },

  pagination: {
    el: '.catalog__swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + '</span>';
    },
  },
});

const swiper5 = new Swiper('.card__swiper2', {
  slidesPerView: 'auto',
  spaceBetween: 38,
  grabCursor: true,

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },

  breakpoints: {
    650: {
      direction: "vertical",
      spaceBetween: 15,
      slidesPerView: 4,

    },
    950: {
      direction: "horizontal",
      spaceBetween: 38,
    },
    1300: {
      direction: "horizontal",
      spaceBetween: 38,
    },
  }
});

const swiper6 = new Swiper('.card__swiper1', {
  spaceBetween: 32,
  grabCursor: true,

  thumbs: {
    swiper: swiper5,
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },
});

const swiper7 = new Swiper('.similar__swiper', {
  slidesPerView: 2,
  slidesPerGroup: 1,
  spaceBetween: 16,

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },

  navigation: {
    nextEl: '.similar__swiper-button-next',
    prevEl: '.similar__swiper-button-prev',
  },
  breakpoints: {
    650: {
      spaceBetween: 32,
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    1300: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
  }
});

const swiper8 = new Swiper('.modal__swiper2', {
  slidesPerView: 'auto',
  spaceBetween: 65,
  grabCursor: true,

  navigation: {
    nextEl: '.modal__swiper-button-next',
    prevEl: '.modal__swiper-button-prev',
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },

  breakpoints: {
    650: {
      spaceBetween: 80,
    },
    950: {
      spaceBetween: 78,
    },
    1300: {
      spaceBetween: 78,
    },
  }
});

const swiper9 = new Swiper('.modal__swiper1', {
  spaceBetween: 156,
  grabCursor: true,

  thumbs: {
    swiper: swiper8,
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    nextSlideMessage: 'Следующий слайд',
    prevSlideMessage: 'Предыдущий слайд',
  },
});
