var express = require("express");
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

//creating timeline object
var timeline = {
	"timeline": {
		"headline":"",
		"type":"default",
		"text":"This is a collection",
		"date": []
	}
};

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
})();
	
//don't load timeline until data has been populated	
$.when(
	populateTimeline.youtube()
).then(function() {
	createStoryJS({
		width: window.innerWidth,
		height: window.innerHeight,
		source: 'http://content.guardianapis.com/search?date-id=date%2F2013'
		embed_id: 'my-timeline'
	});
});
