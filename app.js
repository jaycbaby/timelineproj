/*var express = require("express"
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); */


$(document).ready(function () {
    //JSONP timeline object will store JSON fetched from The Guardian API
    var jsonp = {
        "timeline": {
            "headline": "NSA Revelations",
                "type": "default",
                "text": "This is an overview of the NSA events...",
                "startDate": " ",
                "date": [
                {
                "startDate": "2012,12,12",
                    "endDate": "",
                    "headline": "Headline",
                    "text": "<p>The Guardian standfirst</p>",
                    "asset": {
                    "media": "News thumbnail",
                        "credit": "",
                        "caption": ""
                }
            }, {
                "startDate": "2013,1,26",
                    "endDate": "",
                    "headline": " ",
                    "text": "<p>this is text.</p>",
                    "asset": {
                    "media": "http://youtu.be/u4XpeU9erbg",
                        "credit": "",
                        "caption": ""
                }
            }]
        }
    };

    //TimelineJS 
    createStoryJS({
        type: 'timeline',
        width: '800',
        height: '600',
        source: jsonp,
        embed_id: 'my-timeline'
    });
});

  	$.ajax({
	    url: "http://content.guardianapis.com/search?q=nsa&tag=tone%2Fnews%2C+type%2Farticle&section=world&from-date=2013-06-01&page-size=30&order-by=relevance&show-fields=headline%2Cstandfirst%2Cthumbnail&ids=world%2Fthe-nsa-files&date-id=date%2F2013&api-key=8xgymsddbs3r5tzvu2gd2kzz&callback=jsoncallback",
	    dataType: "jsonp"
	});
	function jsoncallback(res){
	console.log(res);
	}

  	//populating jsonp variable
  	function populate(){
  	}

	


/*
var populateTimeline = (function() {

//test Youtube data

	function youtube() {
		$.get('https://gdata.youtube.com/feeds/api/users/nitesshadow/favorites?alt=json', function(data) {
			for (var i=0; i < data.feed.entry.length; i++) {

				var url = data.feed.entry[i].media$group.media$player[0].url,
					taintedId = url.substr(url.indexOf('?v='), 14),
					id = taintedId.replace('?v=', '');

				var timestamp = Date.parse(data.feed.entry[i].published.$t),
					date = new Date(timestamp),
					month = date.getMonth() + 1;

				var video = {
					headline: data.feed.entry[i].title.$t,
					text: '',
					asset: {
						media: 'http://youtu.be/' + id,
						credit: data.feed.entry[i].author[0].name.$t,
						caption: data.feed.entry[i].content.$t
					},
					startDate: date.getFullYear() + ',' + month + ',' + date.getDate(),
					endDate: this.startDate
				};

				timeline.timeline.date.push(video);
			}
		});
	}

	return {
		youtube: youtube
	};

}); 

$.when(
	populateTimeline.youtube()
).then(function() {
	createStoryJS({
		width: window.innerWidth,
		height: window.innerHeight,
		source: 'js/guardiandata.jsonp',
		embed_id: 'my-timeline'
	});
}
);
*/