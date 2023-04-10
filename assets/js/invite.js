import data from './invitation_data.json' assert { type: "json" };
var siteUrl = 'https://naveenroy001.github.io/my-wedding-invitation?invite=';

var copyText = "You are cordially invited to the beautiful ceremony of my wedding taking place on 24 April 2023 at Purnia. Let us be blessed with your presence during the occasion.";


$(document).ready(function(){
    $('#invitationurl').html('');
    for(let i=0;i<data.length;i++) $('#invitationurl').append('<p><b>Sno.</b>: '+ (i+1) +'<br><b>Name</b> : ' + data[i].name + ',<br><b>URL</b> : <a target="_blank" href="'+ siteUrl + data[i].url +'">'+ siteUrl + data[i].url +'</a><button type="button" class="copy-button" data-url="'+ siteUrl + data[i].url +'">Copy Text</button></p>');
});

$('#invitationurl').on('click','.copy-button', function(){
    var fullurl = $(this).attr('data-url');
    var textData = copyText + "\n\n" + fullurl;
    navigator.clipboard.writeText(textData);
});