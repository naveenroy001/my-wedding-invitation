import data from './invitation_data.json' assert { type: "json" };
var siteUrl = 'https://naveenroy001.github.io/my-wedding-invitation?invite=';

$(document).ready(function(){
    console.log(data);
    $('#invitationurl').html('');
    
    for(let i=0;i<data.length;i++) $('#invitationurl').append('<p><b>Sno.</b>: '+ (i+1) +'<br><b>Name</b> : ' + data[i].name + ',<br><b>URL</b> : <a target="_blank" href="'+ siteUrl + data[i].url +'">'+ siteUrl + data[i].url +'</a></p>')    


});