/*Scroll Button*/
$("#buttonArrow").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".offer").offset().top
    }, 1800)
})


// Images load from top - Offer
const sliderImagesTop = document.querySelectorAll('.imageLoadFromTop');

function checkSlide(e) {
    sliderImagesTop.forEach(sliderImagesTop => {

        //Bottom border of window - (image height *1.2)
        const sliderInAt = (window.scrollY + window.innerHeight) - sliderImagesTop.height / (1.2);

        //top border of image
        const imageHeight = sliderImagesTop.offsetTop;

        //so if bottom border of window - (~80% of image) is > then top border of image then add class "imageLoadFromTopActive"
        if (sliderInAt > imageHeight) {
            sliderImagesTop.classList.add('imageLoadFromTopActive')
        }
    });

}
window.addEventListener('scroll', checkSlide);


// Images load from right - Offer
const sliderImagesRight = document.querySelectorAll('.imageLoadFromRight');

function checkSlideRight(e) {
    sliderImagesRight.forEach(sliderImagesRight => {

        //Bottom border of window - (image height *1.2)
        const sliderInAt = (window.scrollY + window.innerHeight) - sliderImagesRight.height / (1.2);

        //top border of image
        const imageHeight = sliderImagesRight.offsetTop;

        //so if bottom border of window - (~80% of image) is > then top border of image then add class "imageLoadFromTopActive"
        if (sliderInAt > imageHeight) {
            sliderImagesRight.classList.add('imageLoadFromTopActive')
        }
    });

}
window.addEventListener('scroll', checkSlideRight);


// Images load from left - Offer
const sliderImagesLeft = document.querySelectorAll('.imageLoadFromLeft');

function checkSlideLeft(e) {
    sliderImagesLeft.forEach(sliderImagesLeft => {

        //Bottom border of window - (image height *1.2)
        const sliderInAt = (window.scrollY + window.innerHeight) - sliderImagesLeft.height / (1.2);

        //top border of image
        const imageHeight = sliderImagesLeft.offsetTop;

        //so if bottom border of window - (~80% of image) is > then top border of image then add class "imageLoadFromTopActive"
        if (sliderInAt > imageHeight) {
            sliderImagesLeft.classList.add('imageLoadFromTopActive')
        }
    });

}
window.addEventListener('scroll', checkSlideLeft);


//Slider
var slideImage = ["trynextstep.png",
                  "podesty24.png"];

var slideHref = ["http://www.trynextstep.pl",
                "http://www.podesty24.skrypty.net", ]

//variable to change slide 
var i = 0;

//timers use in setTimeout. We need it to clearTimeout
var timer1 = 0;
var timer2 = 0;

//function to change slide by click. I clearTimeout to show slide always same time long
function changeSlideByClick(e) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    i = e - 1; //we have to -1 because in function "changeSlideAuto" we increment i++;

    hideSlide();
    setTimeout("changeSlideAuto()", 500);

}

function hideSlide() { //hide slide with animation fade out
    $("#slider").fadeOut(500); //jQuery $("#slider) -> same like getElementById 
}

function changeSlideAuto() {
    i++; // i is 1 in first iteration
    if (i >= slideImage.length) i = 0; //check how many slide we got
    if (i == 0) {
        var imageWithHref = "<a target=\"_blank\" href=\"" + slideHref[i] + "\"><img src=\"img/" + slideImage[i] + "\" ></a>";
    } else if (i == 1) {
        var imageWithHref = "<a target=\"_blank\" href=\"" + slideHref[i] + "\"><img src=\"img/" + slideImage[i] + "\" ></a>";
    }


    document.getElementById("slider").innerHTML = imageWithHref;
    $("#slider").fadeIn(500); //jQuery $("#slider) -> same like getElementById 

    timer1 = setTimeout("changeSlideAuto()", 4000);
    timer2 = setTimeout("hideSlide()", 3500); //hide slide after 3.5s and start jQuery function fadeOut.
}
