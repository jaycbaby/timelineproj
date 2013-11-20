/*var express = require("express");
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
    var dataObject = {
        "timeline": {
            "headline": "Test",
                "type": "default",
                "text": "Text",
                "startDate": "2012,1,26",
                "date": [{
                "startDate": "2011,12,12",
                    "endDate": "2012,1,27",
                    "headline": "Headline2",
                    "text": "<p></p>",
                    "asset": {
                    "media": "  ",
                        "credit": "",
                        "caption": ""
                }
            }, {
                "startDate": "2012,1,26",
                    "endDate": "2012,1,27",
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

    createStoryJS({
        type: 'timeline',
        width: '800',
        height: '600',
        source: dataObject,
        embed_id: 'my-timeline'
    });
});
	//initializing new timeline



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