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

});
