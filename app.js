

//make an ajax request to the guardian api
$.ajax({
  url: "http://content.guardianapis.com/search?q=nsa+spying+on+allies+angela&tag=tone%2Fnews%2C+type%2Farticle&section=world&from-date=2013-06-01&page-size=30&order-by=relevance&show-fields=headline%2Cstandfirst%2Cthumbnail&ids=world%2Fnsa%2C+the-nsa-files&date-id=date%2F2013&api-key=8xgymsddbs3r5tzvu2gd2kzz",
  dataType: "jsonp"
  //when ajax call is finished... 
}).done(function(data){
    //call the maketimeline function, passing in the response data object.
  maketimeline(data);
}); 

var maketimeline = function(data) {

    //timeline object will store the JSON fetched from The Guardian API
    var articleJSON = {
        "timeline": {
            //default values
            "headline":"NSA Revelations",
            "type":"default",
            "text":"<p>An overview of The Guardian's coverage of the NSA releases</p>",
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
                media: article.fields.thumbnail
            }
        })
    });

    //TimelineJS 
    createStoryJS({
        type: 'timeline',
        width: 'window.width',
        height: '700',
        source: articleJSON,
        embed_id: 'myTimeline'
    });
};

