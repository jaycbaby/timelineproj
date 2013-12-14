//make an ajax request to the guardian api

$.ajax({
  url: "http://content.guardianapis.com/search?q=nsa&tag=tone%2Fnews%2C+type%2Farticle&section=world&from-date=2013-05-01&page-size=50&order-by=relevance&show-fields=headline%2Cstandfirst%2Cthumbnail&date-id=date%2F2013&api-key=8xgymsddbs3r5tzvu2gd2kzz",
  dataType: "jsonp"
  //when ajax call is finished... 
}).done(function(data){
    //call the maketimeline function, passing in the response data object.
  maketimeline(data);
   });

var maketimeline = function(data) {
    $(document).ready(function () {
    //JSONP timeline object will store JSON fetched from The Guardian API
    articleJSON = {
        "timeline": {
            "headline":"Forward in timeline-->",
            "type":"default",
            "text":"<p>A dyanamic timeline that automatically generates relevant articles based on The Guardian's news coverage of the NSA surveillance controversy. </p>",
            "asset": {
                "media":"http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/img/title-nsafiles.png",
                "credit":"The Guardian",
                "caption":"The Guardian"
            },
            //empty date array that will hold new article objects
            "date": []
        }
    };

    _.each(data.response.results, function(article, i){
        //creating new article object and appending data into 'date' array
        articleJSON.timeline.date.push({
            startDate: article.webPublicationDate,
            headline: article.fields.headline,
            text: article.fields.standfirst,
            asset: {
                media: article.fields.thumbnail,
                caption: article.webUrl
            }
        });
    });

    //TimelineJS 
    createStoryJS({
        type: 'timeline',
        width: 'window.width',
        height: '800',
        source: articleJSON,
        embed_id: 'myTimeline'
    });

});

};
