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

});
