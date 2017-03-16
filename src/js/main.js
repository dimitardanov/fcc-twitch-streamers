

$(function() {
  var streamers = require('./lib/data/initialStreamersList.js');
  var twitchCall = require('./lib/ajax/twitch.js');
  var helpers = require('./lib/helpers/helpers.js');
  var renderCard = require('./lib/renderers/renderCard.js').renderCard;
  var prependCard = require('./lib/renderers/renderCard.js').prependCard;
  var extistingChannelTemplate = require('./lib/templates/existingChannelCard.hbs');
  var inexistingChannelTemplate = require('./lib/templates/inexistingChannelCard.hbs');
  var baseURL = 'https://wind-bow.gomix.me/twitch-api';

  var $channelsList = $('section');
  var $buttons = $('button');
  var $search = $('#search');


  function setChannelStatus(channel) {
    twitchCall(
      helpers.createTwitchURL(baseURL, 'streams', channel),
      channelStatusWrapper(channel),
      function (jqxhr, status, error) {console.log(error);}
    );
  }

  function channelStatusWrapper (channel) {
    return (
      function channelStatus (data, status, jqxhr) {
        var channelStatusMsg = helpers.getStreamStatusMsg(data);
        $('#'+ channel + ' .status').text(channelStatusMsg);
        if (helpers.isStreaming(data)) {
          $('#' + channel).addClass('online');
        } else {
          $('#' + channel).addClass('offline');
        }
      }
    );
  }


  function createChannelCardWrapper (channel) {
    return (
      function createChannelCard (data, status, jqxhr) {
        if (helpers.channelExists(data)) {
          var channelData = helpers.createExistingChannelData(data);
          channelData.channel = channel;
          renderCard(
            channelData,
            extistingChannelTemplate,
            $channelsList);
          setChannelStatus(channel);
        } else {
          prependCard(
            {channel: channel},
            inexistingChannelTemplate,
            $channelsList);
          setTimeout(function () {
            $('.inexisting-streamer#' + channel)
              .slideUp(400, function () {
                $(this).remove();
              });
          }, 5000);
        }
      }
    );
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


  $buttons.on('click', function () {
    var $this = $(this);
    $buttons.removeClass('active');
    $this.addClass('active');
    var data = $this.data('streamers');
    $search.data('streamers', data);
    if (data === 'online') {
      $('.media.online').show();
      $('.media.offline').hide();
    } else if (data === 'offline') {
      $('.media.online').hide();
      $('.media.offline').show();
    } else {
      $('.media').show();
    }
    searchStreamers();
  });

  $search.on('keyup', searchStreamers)

  function searchStreamers () {
    var scope = $search.data('streamers');
    var pattern = new RegExp($search.val(), 'ig');
    if (scope == 'online' || scope == 'offline') {
      var $elements = $('.media.' + scope);
    } else {
      var $elements = $('.media');
    }
    $elements.each(function (index) {
      var $this = $(this);
      var id = $this.attr('id');
      if (id.search(pattern) == -1) {
        $this.hide();
      } else {
        $this.show();
      }
    });
  }


});
