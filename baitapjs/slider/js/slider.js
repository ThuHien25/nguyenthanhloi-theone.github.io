/* 
 *Js Slider
 *Auth: Nguyen Thanh Loi
 *Idea: Display:none all image, 1 image display 
 */
var initImage = 0;
var reTimeout;
var img = document.getElementsByClassName("image-slider");
var img_mini = document.getElementsByClassName("image-mini");
showImage(initImage);

/*
 *Show Image, Auto Image 3s
 *@param {int} value_Img : value point image for functon
 */
function showImage(valueImg) {
    if (valueImg < 0) {
        initImage = img.length - 1;
    }
    if (valueImg > img.length - 1) {
        initImage = 0;
    }
    var i;
    for (i = 0; i < img.length; i++) {
        img[i].style.display = "none";
        img_mini[i].className = "image-mini";
    }
    img[initImage].style.display = "block";
    img_mini[initImage].className += " effect";
    clearTimeout(reTimeout);
    reTimeout = setTimeout(function() {
        showImage(initImage += 1);
    }, 3000);
}

/*
 *If click btn next or prev , image will next or prev image
 *@param {int} valueClick: -1: prev and +1 next
 */
function btnClick(valueClick) {
    showImage(initImage += valueClick);
}

/*
 *function image mini current
 *@param {int} n : value image current
 */
function curMiniImg(n) {
    showImage(initImage = n)
}