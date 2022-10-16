// function $(x) {
//     return document.getElementById(x);
// }
// function $$(x){
//     return document.querySelector(x);
// }

const nav = document.querySelector(".nav");
const top = document.querySelector(".top");
let topHeight = top.offsetHeight;

let lastScrollPosition = 0;
document.onreadystatechange = function() {
    let currScrollPosition;
    window.addEventListener('scroll', function(e) {
        currScrollPosition = window.scrollY;
        // if(currScrollPosition )
        // {

        // }
        if(currScrollPosition <= 20)
        {
            // nav.style.backgroundColor = "#00"
            nav.classList.remove('nav--colored');
        }
        if(currScrollPosition > 20 && currScrollPosition < topHeight)
        {
            // console.log(topHeight);
            nav.classList.remove('disable-desktop');
            // going down
            if(currScrollPosition > lastScrollPosition)
            {
                // nav.classList.add('disable-desktop');
                nav.classList.add('nav--transparent');
                nav.classList.add('nav--translate-up');
                // nav.style.backgroundColor = "#00FF"
            }
            // going up
            else
            {
                // nav.classList.remove('disable-desktop');
                nav.classList.remove('nav--transparent');
                nav.classList.remove('nav--translate-up');
                nav.classList.add('nav--colored');
                // nav.style.backgroundColor = "#3B3F52";
            }
                lastScrollPosition = currScrollPosition;
        } else if (currScrollPosition >= topHeight)
        {
            // leave disabled / deactivated
            nav.classList.add('disable-desktop');
        }
    })
}

/* <script>
        window.onscroll = function() {scrollFunction()};
     
    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        
        document.getElementById("navbar").style.background = "#501e27";
      } else {
       
        document.getElementById("navbar").style.background = "none";
      }
    }
</script> */


// const nav = document.querySelector(".nav");
// document.onreadystatechange = function() {
//     let lastScrollPosition= 0;
//     window.addEventListener('scroll', function(e) {
//         lastScrollPosition = window.scrollY;

//         if(lastScrollPosition > 100)
//             nav.classList.add('disable-desktop');
//         else
//             nav.classList.remove('disable-desktop');
//     })
// }

// const top = document.querySelector(".top");
// const nav = document.querySelector(".nav");
// const intro = document.querySelector('.intro');

// function scrollFunction() {
//     // default behaviour, 
//     console.log(intro.scrollTop);
//     if(intro.scrollTop){
//         console.log(intro.scrollTop);
//         nav.classList.add('disable-desktop');
//     } else {
//         console.log(intro.scrollTop);
//         nav.classList.remove('disable-desktop')
//     }
// }
// window.onscroll = function() {scrollFunction()};
// top.addEventListener("scroll", scrollFunction());


// $(window).scroll(function () {
//     if($(window).scrollTop() > 150) {
//         $$('.nav').addClass('disable');
//         // $$('.nav').css('position', 'fixed');
//         // $$('.nav').css('top', 0);
//     } else {
//         $$('.nav').removeClass('disable');
//         // $$('.nav').css('position', '');
//         // $$('.nav').css('top', '-100%');
//     }
// })





















// // import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
// // import './scroll-timeline_3063e156535f3ab1ffc8a4000ffdd3290232c121_dist/scroll-timeline.js'

// const scrollAsteroids = document.querySelector('.top-asteroids');

// const scrollAsteroidsTimeline = new ScrollTimeline ({
//     // source: document.scrollingElement,
    
//     // scrollOffsets: [
//     //     '40px',
//     //     '50px'
//     // ],
//     scrollOffsets: [
//         CSS.percent(0),
//         CSS.percent(25)
//     ],
//     // scrollOffsets: [
//     //     new CSSUnitValue(0, 'percent'),
//     //     new CSSUnitValue(10, 'percent'),
//     // ],
// });

// scrollAsteroids.animate(
//     [
//         {
//             transform: 'translateX(0vw) translateY(0vw)',
//             opacity: '1'
//         },
//         {
//             transform: 'translateX(77.5vw) translateY(45vw)',
//             // opacity: '0.2'
//             opacity: '1'
//         },
//         {
//             transform: 'translateX(155vw) translateY(90vw)',
//             // opacity: '0'
//             opacity: '0'
//         }
//     ]
//     // {
//     //     transform: ['translateX(0vw) translateY(0vw)', 'translateX(155vw) translateY(80vw)'],
//     //     opacity: ['1','0']
//     // }
//     ,
//     {
//         timeline: scrollAsteroidsTimeline,
//     }
// );