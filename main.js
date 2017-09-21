console.log("test");

$(document).ready(function(){
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en#", function(json){
        console.log(json);
    });
});