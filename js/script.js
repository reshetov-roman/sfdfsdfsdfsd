var swiper = new Swiper(".avatar-mySwiper1", {
    loop: false,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 20,
    resistanceRatio : 0,
    navigation: {
      nextEl: ".swiper-button-next-sl0",
      prevEl: ".swiper-button-prev-sl1",
    },
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        resistanceRatio: 0.85
    },
      480: {
          slidesPerView: 2.2,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      600: {
        spaceBetween: 20,
        resistanceRatio: 0.85
    },
      768: {
          slidesPerView: 3,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      992: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      1600: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio : 0
      }
  },
  keyboard: {
      enabled: true,
   }
  });

  var swiper2 = new Swiper(".avatar-mySwiper2", {
    loop: false,
    slidesPerView: 4,
    paginationClickable: true,
    spaceBetween: 20,
    resistanceRatio : 0,
    navigation: {
      nextEl: ".swiper-button-next-ls0",
      prevEl: ".swiper-button-prev-ls1",
    },
    breakpoints: {
      320: {
        slidesPerView: 2.2,
        spaceBetween: 20,
        resistanceRatio: 0.85
    },
      480: {
          slidesPerView: 2.2,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      600: {
        spaceBetween: 20,
        resistanceRatio: 0.85
    },
      768: {
          slidesPerView: 3,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      992: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio: 0.85
      },
      1600: {
          slidesPerView: 4,
          spaceBetween: 20,
          resistanceRatio : 0
      }
  },
  keyboard: {
      enabled: true,
   }
  });



    const smoothLinks = document.querySelectorAll('.avatar-wrapper-top__arrow[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };



  const jellyfishTransalate = document.querySelectorAll('.jellyfish-transition');

  if(jellyfishTransalate) {
    window.addEventListener('mousemove', e => {
    
      let mouseX = e.clientX;
      let mouseY = e.clientY;
  
      jellyfishTransalate.forEach(elm => {
  
        let speed = elm.dataset.speed;
  
        elm.style.transform = `translate(${mouseX / 10 * speed}%,${mouseY / 5 * speed}%)`;
        elm.style.transition=" all .4s"
      });
  });
  }


// let tag = document.createElement('script');

// tag.src = "https://www.youtube.com/iframe_api";
// let firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  // Check all slides and initialize video players
  let swiper = document.getElementById('video-swiper');
  let slides = swiper.querySelectorAll('.swiper-slide');
  let players = [];
  
  for (let i=0; i < slides.length; i++) {
    let element = slides[i].querySelectorAll('.yt-player')[0];
    let id = element.getAttribute('data-id');
    
    let player = new YT.Player(element, {
      // height: '315',
      // width: '560',
      videoId: id,
      playerVars: {
        autoplay: false,
        rel: 0,
        frameborder: 0,
        modestbranding: true,
        controls: 1,
        playsinline: 1,
        // color: '#7fbc03',
        // fs: 1,
        // showinfo: 0,
        // autohide: 0
        // showinfo: 0,
        // frameborder: 0
      },
      // events: {
      //   'onReady': onPlayerReady,
      //   'onStateChange': onPlayerStateChange
      // }
    });
    players.push(player);
  }
  
  var mySwiper = new Swiper('.swiper-container-video', {
    observer: true,
    // effect: 'slide',
    allowTouchMove: false,
    spaceBetween: 30,
    slidesPerView: 1,
    centeredSlides: true,
    loop: false,
    speed: 400,
    initialSlide: 1,
    navigation: {
      nextEl: '.swiper-button-next-f1',
      prevEl: '.swiper-button-prev-f0',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  breakpoints: {
    320: {
      // slidesPerView: 1,
      spaceBetween: -20,
      // resistanceRatio: 0.85
  },
  670: {
    // slidesPerView: 1,
    spaceBetween: -35,
    // resistanceRatio: 0.85
  },
  992: {
    // slidesPerView: 1,
    spaceBetween: -100,
    // resistanceRatio: 0.85
  },
  1600: {
    // slidesPerView: 1,
    spaceBetween: 30,
    // resistanceRatio: 0.85
  }
}
  });


  mySwiper.on('slideChange', function (e) {
    players[mySwiper.realIndex].playVideo();
    players[mySwiper.previousIndex -0].pauseVideo();
  // setTimeout(() => {
  //   let utubeLink =  document.querySelectorAll('iframe');
  //   console.log(utubeLink[mySwiper.realIndex]);
  // }, 2000);
    // let allIndex = document.querySelector('.wrap .swiper-slide-active');
    // e.slides.forEach((elm, index) => {
    
    // });
    
});
  
}


var swiperFide1 = new Swiper('.swiper-container-fide1', {
  loop: false,
  effect: 'fade',
  speed: 0,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.swiper-button-next-fd1',
      prevEl: '.swiper-button-prev-fd2'
  },
});

var swiperFide2 = new Swiper('.swiper-container-fide2', {
  loop: false,
  effect: 'fade',
  speed: 0,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.swiper-button-next-fd3',
      prevEl: '.swiper-button-prev-fd4'
  },
});




var swiperFide1Mobile = new Swiper('.swiper-container-fide1-mobile', {
  loop: false,
  slidesPerView: 1.2,
  speed: 500,
  spaceBetween: 0,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      resistanceRatio: 0.85
  },
}
});

var swiperFide2Mobile = new Swiper('.swiper-container-fide2-mobile', {
  loop: false,
  slidesPerView: 1.2,
  speed: 500,
  spaceBetween: 0,
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  breakpoints: {
    320: {
      spaceBetween: 20,
      resistanceRatio: 0.85
  },
}
});

var swiperFide2 = new Swiper('.swiper-container-fide2', {
  loop: false,
  effect: 'fade',
  speed: 0,
  fadeEffect: {
    crossFade: true
  },
  pagination: {
      el: '.swiper-pagination',
      clickable: true
  },
  navigation: {
      nextEl: '.swiper-button-next-fd3',
      prevEl: '.swiper-button-prev-fd4'
  },
});








