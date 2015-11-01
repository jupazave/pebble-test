var UI = require('ui');
var ajax = require('ajax');


// Construct URL
var URL = 'http://192.168.1.70:1337/device/temperature?id=1';

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'Room Temperature',
  subtitle:'Fetching...'
});

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
  // Success!
  console.log('Successfully fetched weather data!');

  // Extract data
  card.body("DONE");
  card.subtitle(data);

},
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);


// Display the Card
card.show();
