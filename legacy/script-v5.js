const hiddenAsteroid = document.querySelector('.top-asteroids');

const options = {
    // rootMargin: "-300px 0px 0px 0px",
    // threshold: 0.5
};

const observer = new IntersectionObserver(function
    (entries, observer) {
        entries.forEach(entry => {
            console.log(entry);
            // if(!entry.isIntersecting){
            //     return;
            // }
            if(entry.isIntersecting){
                // entry.target.classList.add('top-asteroids--show');
                entry.target.classList.add("top-asteroids--show");
            }
            else{
                entry.target.classList.remove("top-asteroids--show");
            }
        })
    }, options);

    observer.observe(hiddenAsteroid);




// // const hiddenAsteroids = document.querySelectorAll('.top-asteroids-wrapper--hidden');
// const hiddenAsteroids = document.querySelectorAll('.top-asteroids-wrapper');

// const observer = new IntersectionObserver((entries) => {
//     console.log(entries)
//     entries.forEach((entry) => {
//         entry.target.classList.toggle(".top-asteroids-wrapper--show", entry.isIntersecting);
//         // if(entry.isIntersecting){
//         //     entry.target.classList.add(".top-asteroids-wrapper--show");
//         //     console.log('meow');
//         // }
//         // else{
//         //     entry.target.classList.remove(".top-asteroids-wrapper--show");
//         // }
//     })
// }, {
//     // threshold: 0.5 
//     threshold: 0
// }, {
//     rootMargin: "-100px"
// })

// hiddenAsteroids.forEach((entry) => {
//     // observer.observe(hiddenAsteroids[0]);
//     observer.observe(entry);
// })
