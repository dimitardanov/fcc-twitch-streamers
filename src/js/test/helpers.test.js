var expect = require('chai').expect;

var helpers = require('../lib/helpers/helpers.js');


describe('Helper module', function () {

  describe('createChannelURL function', function () {

    it('should return a url of a twitch.tv channel', function () {
      expect(helpers.createChannelURL('FreeCodeCamp')).to.be.equal(
        'https://www.twitch.tv/freecodecamp'
      );
    });
  });

});
