

function createChannelURL (channel) {
  return 'https://www.twitch.tv/'.concat(channel.toLowerCase())
}


module.exports = {
  createChannelURL: createChannelURL
};
