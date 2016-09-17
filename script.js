function getQuote() {
    $.ajax({
        headers: {
            "X-Mashape-Key": "hS2nakiehhmshJ9Z8Nwf8o8NisYJp1nMCz7jsnWmjxOGiGkfZn",
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous',
        success: function (response) {
            var r = JSON.parse(response);
            currentQuote = r.quote;
            currentAuthor = r.author;

            $("#quoteText").html(r.quote);
            $("#author").html("~ " + r.author);

            var tweetText = encodeURIComponent(r.quote + '\n~' + r.author);
            var tweetUrl = 'https://\ttwitter.com/intent/tweet?text=' + tweetText; // '\t' bypasses adblock
            $('#tweetLink').attr('href', tweetUrl);
        },
        error: function (jqxhr, textStatus, error) {
            $("#quoteText").html("Request Failed: " + textStatus);
            $("#author").html("~ Random Quote Machine");
        }
    });
};

$(document).ready(function () {
    getQuote();
    $("#button").on("click", function () {
        getQuote();
    });
});