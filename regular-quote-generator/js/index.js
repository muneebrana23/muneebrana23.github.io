var qurl = "https://api.forismatic.com/api/1.0/?format=jsonp&method=getQuote&jsonp=?&lang=en";
var turl="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=";   
$("#quote").on("click", function(){
  getQuote();
});
$("#twet").on("click", function(){
  tweet();
});


   
  function getQuote(){
   $.getJSON(qurl, function(response){
   
     $(".message").html(response.quoteText);
     //$("#tweetlink").attr("href",turl + response.quoteText + " ― " + response.quoteAuthor);
   });
   
 }

function tweet(){
 
  var quotee = $(".message").text();
  window.open("https://twitter.com/intent/tweet?text="+quotee+"&hashtags=FamousQuotes");
}
getQuote();