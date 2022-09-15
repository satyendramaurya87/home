let opened = null
const toggleVisibility = e => {
    if (e) {
        e.classList.toggle('show')
        e.previousSibling.parentElement.classList.toggle('active')
    }
}

const handleDropdown = e => {
    const clickedItem = e.parentElement.lastChild.previousSibling
    toggleVisibility(clickedItem)
    if (!opened) {
        opened = clickedItem
    } else if (opened == clickedItem) {
        opened = null
    } else {
        toggleVisibility(opened)
        opened = clickedItem
    }
}

const handleClick = e => {
    if (e.target.className.includes('dropDown')) {
        handleDropdown(e.target)
    } else if (opened) {
        toggleVisibility(opened)
        opened = null
    }
}

document.addEventListener('click', handleClick);
document.addEventListener('keyup', (e) => {
    if (e.code === 'Escape') toggleVisibility(opened);
    opened = null
});


if (document.getElementById("quoteBlock")) {

    var slideIndex = 1;
    showSlides(slideIndex);

    function nextQuote(n) {
        showSlides(slideIndex += n);
    }

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("quote");
        if (n > slides.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slides.length
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[slideIndex - 1].style.display = "block";
    }

}

function darkMode() {
    var element = document.getElementById("global");
    element.classList.toggle("dark");
}

if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    darkMode();
}