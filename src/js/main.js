

$(function() {
  var streamers = require('./lib/data/initialStreamersList.js');
  var twitchCall = require('./lib/ajax/twitch.js');
  var helpers = require('./lib/helpers/helpers.js');
  var renderCard = require('./lib/renderers/renderCard.js');
  var extistingChannelTemplate = require('./lib/templates/existingChannelCard.hbs');
  var baseURL = 'https://wind-bow.gomix.me/twitch-api';

  var $channelsList = $('section');


  function setChannelStatus(channel) {
    twitchCall(
      helpers.createTwitchURL(baseURL, 'streams', channel),
      function (data, status, jqxhr) {
        var channelStatusMsg = helpers.getStreamStatusMsg(data);
        $('#'+ channel + ' .status').text(channelStatusMsg);
      },
      function (jqxhr, status, error) {console.log(error);}
    );
  }


  function createChannelCardWrapper (channel) {
    return (function createChannelCard (data, status, jqxhr) {
      if (helpers.channelExists(data)) {
        var channelData = helpers.createExistingChannelData(data);
        channelData.channel = channel;
        renderCard(
          channelData,
          extistingChannelTemplate,
          $channelsList)
        setChannelStatus(channel);
      } else {
        console.log(channel, ' - does not exist.');
      }
    });
  }


  function displayChannel (channel) {
    twitchCall(
      helpers.createTwitchURL(baseURL, 'channels', channel),
      createChannelCardWrapper(channel),
      function (jqxhr, status, error) {
        console.log('error', status, error);
      }
    );
  }


  for (var i=0; i<streamers.length; i++) {
    displayChannel(streamers[i]);
  }

});
