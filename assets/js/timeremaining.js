var date_future = new Date('2023-04-24');

$(function(){
    setInterval(calculate, 1000);
});

function calculate(){
    var delta = Math.abs(date_future - new Date()) / 1000;
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    $('.days').html(days);
    delta -= days * 86400;
    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    $('.hours').html(hours);
    delta -= hours * 3600;
    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    $('.min').html(minutes);
    delta -= minutes * 60;
    // what's left is seconds
    var seconds = delta % 60; 
    $('.secs').html(Number(seconds.toFixed(0)));
}

