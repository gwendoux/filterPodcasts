// request a feed url on podcast.gwendoux.com/name_of_podcast
// see if exist
// if not break Internet
// if so parse xml origin feed
// and put content in a array
// and remove item with the filter config of each podcast
// then build the new feed with xml or json rss (https://jsonfeed.org/)
// and publish it

"use strict";

config = require(__dirname + '/config');

const filter_type = {
    "duration_min" : "itunes:duration",
    "duration_max" : "itunes:duration"
}
