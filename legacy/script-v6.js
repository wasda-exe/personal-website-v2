// import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';
// import './scroll-timeline_3063e156535f3ab1ffc8a4000ffdd3290232c121_dist/scroll-timeline.js'

const scrollAsteroids = document.querySelector('.top-asteroids');

const scrollAsteroidsTimeline = new ScrollTimeline ({
    // source: document.scrollingElement,
    
    // scrollOffsets: [
    //     '40px',
    //     '50px'
    // ],
    scrollOffsets: [
        CSS.percent(0),
        CSS.percent(20)
    ],
    // scrollOffsets: [
    //     new CSSUnitValue(0, 'percent'),
    //     new CSSUnitValue(10, 'percent'),
    // ],
});

scrollAsteroids.animate(
    [
        {transform: 'translateX(0vw) translateY(0vw)'},
        {transform: 'translateX(155vw) translateY(80vw)'}
    ]
    // {
    //     transform: ['translateX(0vw)', 'translateX(155vw)'],
    // }
    ,
    {
        timeline: scrollAsteroidsTimeline,
    }
);