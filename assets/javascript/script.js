
(function(b,i,t,C,O,I,N) {
    window.addEventListener('load',function() {
      if(b.getElementById(C))return;
      I=b.createElement(i),N=b.getElementsByTagName(i)[0];
      I.src=t;I.id=C;N.parentNode.insertBefore(I, N);
    },false)
  })(document,'script','https://widgets.bitcoin.com/widget.js','btcwdgt');




var url1 = 'https://newsapi.org/v2/everything?' +
    'q=bitcoin&' +
    'from=' + moment().format('L') + '&' +
    'sortBy=popularity&' +
    'apiKey=4a933268eadd4054ad084e87571eedac';
var req = new Request(url1);
fetch(req)
    .then(function (response) {
        console.log("heya");
        console.log(response);

        $.ajax({
            url: response.url,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            for (let i = 0; i < response.articles.length; i++) {
                var newdiv = $("<div>");
                newdiv.css("border", ".5px lightgrey solid");
                var Aurl = $("<a>");
                Aurl.attr("href", response.articles[i].url);
                var title = response.articles[i].title;
                Aurl.text(title);
                Aurl.css("padding", "10px"); 
                var image = $("<img>");
                image.attr("src", response.articles[i].urlToImage);
                image.css("width", "25%");         
                var space = $("<p>");
                space.css("height", "3%");
                newdiv.prepend("<p>");
                newdiv.prepend(Aurl);
                newdiv.prepend(image);
                newdiv.prepend(space);
                $("#newdiv").append(newdiv);

            }
        });
});
$(document).ready(function () {
 $(".btcwdgt-chart").addClass("charted");
})