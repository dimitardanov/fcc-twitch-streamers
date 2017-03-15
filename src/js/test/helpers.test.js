var expect = require('chai').expect;

var helpers = require('../lib/helpers/helpers.js');
var fixtures = require('./fixtures/fixtures.js');


describe('Helper module', function () {

  describe('getChannelURL function', function () {

    it('should return a url of a twitch.tv channel', function () {
      expect(helpers.getChannelURL(fixtures.existingChannel)).to.be.equal(
        'https://www.twitch.tv/freecodecamp'
      );
    });
  });

  describe('isStreaming function', function () {

    it('should return true if given data of online channel', function () {
      expect(helpers.isStreaming(fixtures.onlineStream)).to.be.true;
    });

    it('should return false if given data of offline channel', function () {
      expect(helpers.isStreaming(fixtures.offlineStream)).to.be.false;
    });
  });

  describe('getLogoURL function', function () {

    it('should return the url of the channel logo', function () {
      expect(helpers.getLogoURL(fixtures.existingChannel)).to.be.equal("https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png");
    });
  });

  describe('getChannelName function', function () {

    it('should return the name of the channel', function () {
      expect(helpers.getChannelName(fixtures.existingChannel)).to.be.equal('FreeCodeCamp');
    });
  });

  describe('channelExists function', function () {

    it('should return true if channel exists', function () {
      expect(helpers.channelExists(fixtures.existingChannel)).to.be.true;
    });

    it('should return false if channel doesn\'t exist', function () {
      expect(helpers.channelExists(fixtures.inexistingChannel)).to.be.false;
    });
  });

  describe('createTwitchURL function', function () {

    it('should return a url concatenated from args', function () {
      expect(helpers.createTwitchURL('https://wind-bow.gomix.me/twitch-api', 'channels', 'freecodecamp')).to.be.equal('https://wind-bow.gomix.me/twitch-api/channels/freecodecamp');
    });

    it('should switch the name arg to lower case', function () {
      expect(helpers.createTwitchURL('https://wind-bow.gomix.me/twitch-api', 'streams', 'FreeCodeCamp')).to.be.equal('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp');
    });
  });

  describe('getStreamStatusMsg function', function () {

    it('should return channel status if streaming', function () {
      expect(helpers.getStreamStatusMsg(fixtures.onlineStream)).to.be.equal("RERUN: Stats vs. Dark [PvZ] - Semifinal - IEM Katowice 2017 ");
    });

    it('should return "Offline" if not streaming', function () {
      expect(helpers.getStreamStatusMsg(fixtures.offlineStream)).to.be.equal('Offline');
    });
  });

  describe('createExistingChannelData function', function () {

    it('should return an object for a channel card', function () {
      expect(helpers.createExistingChannelData(fixtures.existingChannel, '...')).to.be.deep.equal({
        logo: "https://static-cdn.jtvnw.net/jtv_user_pictures/freecodecamp-profile_image-d9514f2df0962329-300x300.png",
        name: "FreeCodeCamp",
        url: "https://www.twitch.tv/freecodecamp",
        status: '...'
      });
    });
  });

});
