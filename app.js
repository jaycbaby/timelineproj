/* var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); */


var TIMELINE = {};



$(document).ready(function () {
    //JSONP timeline object will store JSON fetched from The Guardian API




    TIMELINE.articleJSON = {
        "timeline": {
            "headline":"NSA Revelations",
            "type":"default",
            "text":"<p>An overview of The Guardian's coverage of the NSA releases</p>",
            "asset": {
                "media":"http://gia.guim.co.uk/2013/10/nsa-decoded/html/asset/img/title-nsafiles.png",
                "credit":"The Guardian",
                "caption":"The Guardian"
            }
        }
    }











//             "article1": [
//                 {
//                     "startDate": article.webPublicationDate,
//                     "headline": "fields.headline",
//                     "text":"<p>Body text goes here, some HTML is OK</p>",
//                     "tag":"This is Optional",
//                     "classname":"optionaluniqueclassnamecanbeaddedhere",
//                     "asset": {
//                         "media":"http://twitter.com/ArjunaSoriano/status/164181156147900416",
//                         "thumbnail":"optional-32x32px.jpg",
//                         "credit":"Credit Name Goes Here",
//                         "caption":"Caption text goes here"
//                     }
//                 }
//             ],
//             "article2": [
//                 {
//                     "startDate":"2011,12,10",
//                     "headline":"Headline Goes Here",
//                     "text":"<p>Body text goes here, some HTML is OK</p>",
//                     "tag":"This is Optional"
//                 }
    
//             ]


    // articleJSON.timeline.article1 = []
    // articleJSON.timeline.article1[0] = {};
    
    // articleJSON.timeline.article1[0]



    //TimelineJS 
    createStoryJS({
        type: 'timeline',
        width: '800',
        height: '600',
        source: TIMELINE.articleJSON,
        embed_id: 'my-timeline'
    });
});

  	$.ajax({
	    url: "http://content.guardianapis.com/search?q=nsa&tag=tone%2Fnews%2C+type%2Farticle&section=world&from-date=2013-06-01&page-size=30&order-by=relevance&show-fields=headline%2Cstandfirst%2Cthumbnail&ids=world%2Fthe-nsa-files&date-id=date%2F2013&api-key=8xgymsddbs3r5tzvu2gd2kzz",
	    dataType: "jsonp"
	}).done(function(data){
        _.each(data.response.results, function(article, i){
            TIMELINE.articleJSON.timeline["article"+i] = [{
                
            }];

            // articleJSON.timeline.article1[].startDate = article.webPublicationDate
        })
    });



