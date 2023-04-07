// var video = document.getElementById("background-video");
// var music = document.getElementById("audioPlayer");

import data from './invitation_data.json' assert { type: "json" };

$(document).ready(function(){
    console.log(data);
    let searchParams = new URLSearchParams(window.location.search);
    if(searchParams.has('invite')){
        let param = searchParams.get('invite');
        $('#userInvite').removeClass('d-none');
        $('#userInvite .nameclass').html(findData(param));
    }
});

$(document).click(function(){
    //document.getElementById("audioPlayer").play();
});

$(window).scroll(function() {
   // document.getElementById("audioPlayer").play();
});


function findData(urlName){
    return data.filter((d)=>d.url==urlName)[0].name;
      
}



$('.open-button').click(function(){
    $('#invitation-card').hide();


});




