var expect = require('chai').expect;

var helpers = require('../lib/helpers/helpers.js');
var fixtures = require('./fixtures/fixtures.js');


describe('Helper module', function () {

  describe('createChannelURL function', function () {

    it('should return a url of a twitch.tv channel', function () {
      expect(helpers.createChannelURL('FreeCodeCamp')).to.be.equal(
        'https://www.twitch.tv/freecodecamp'
      );
    });
  });

  describe('isChannelOnline function', function () {

    it('should return true if given data of online channel', function () {
      expect(helpers.isChannelOnline(fixtures.onlineResponse)).to.be.true;
    });

    it('should return false if given data of offline channel', function () {
      expect(helpers.isChannelOnline(fixtures.offlineResponse)).to.be.false;
    });
  });

});
