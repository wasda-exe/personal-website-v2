const nav = document.querySelector(".nav");
const top = document.querySelector(".top");
let topHeight = top.offsetHeight;

let lastScrollPosition = 0;
document.onreadystatechange = function() {
    let currScrollPosition;
    window.addEventListener('scroll', function(e) {
        currScrollPosition = window.scrollY;
        if(currScrollPosition <= 20)
        {
            nav.classList.remove('nav--colored');
        }
        if(currScrollPosition > 20 && currScrollPosition < topHeight)
        {
            nav.classList.remove('disable-desktop');
            // going down
            if(currScrollPosition > lastScrollPosition)
            {
                nav.classList.add('nav--transparent');
                nav.classList.add('nav--translate-up');
            }
            // going up
            else
            {
                nav.classList.remove('nav--transparent');
                nav.classList.remove('nav--translate-up');
                nav.classList.add('nav--colored');
            }
                lastScrollPosition = currScrollPosition;
        } else if (currScrollPosition >= topHeight)
        {
            // leave disabled / deactivated
            nav.classList.add('disable-desktop');
        }
    })
}