console.log("test");
var quote;
var author;


$(document).ready(function(){

    //first quote has to be loaded on startup
    getQuote();

    //clicking on the new quote button
    $("#newQuote").on("click", function()
    {
        getQuote();
        //maybe change the text to 'another!' - rem to make sure that on load it is set to new quote though
    });

    $("#tweet").on("click", function()
    {
        var tweetString = '"' + quote+ '"' + " - " + author;
        window.open("http://twitter.com/home/?status=" + tweetString);
    });

    function getQuote()
    {
        $.get("https://talaikis.com/api/quotes/random/", function(data){
            quote = data.quote;
            author = data.author;
            $("#quoteSpace").html('"' + quote+ '"');
            $("#author").html(" - " + author);
        });
    }


 });   