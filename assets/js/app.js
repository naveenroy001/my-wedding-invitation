// var video = document.getElementById("background-video");
// var music = document.getElementById("audioPlayer");

$(document).ready(function(){
    $(document).trigger('click');
    
});

$(document).click(function(){
    document.getElementById("audioPlayer").play();
});

$(window).scroll(function() {
    document.getElementById("audioPlayer").play();
});

//Flower falling
