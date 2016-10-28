var express = require('express');
var router = express.Router();
var ical = require('ical');

router.get('/ics_data', function (req, res) {

  var url = 'https://calendar.google.com/calendar/ical/4nalnve51t9jgvkv4b6k9sugmc%40group.calendar.google.com/public/basic.ics';

  ical.fromURL(url, {}, function(err, data) {
    var icsData = data;
    res.send(icsData);
  });
});

module.exports = router;
