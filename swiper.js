const swiper1 = new Swiper('.swiper1', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    spaceBetween: 100,

    autoplay: {delay: 2500},

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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

  const swiper2 = new Swiper('.swiper2', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    observer: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      769: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1025: {
        spaceBetween: 20,
        slidesPerView: 4,
      }
    }
  });

  const swiper3 = new Swiper('.swiper3', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    observer: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 15,
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1025: {
        spaceBetween: 20,
        slidesPerView: 4,
      }
    }
  });

  const swiper4 = new Swiper('.swiper4', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    observer: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
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

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 10,
      },

      576: {
        slidesPerView: 2,
        spaceBetween: 15,
      },

      768: {
        spaceBetween: 20,
        slidesPerView: 3,
      },

      1025: {
        spaceBetween: 20,
        slidesPerView: 4,
      }
    }
  });

