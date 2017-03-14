

function createChannelURL (channel) {
  return 'https://www.twitch.tv/'.concat(channel.toLowerCase());
}


function isChannelOnline (data) {
  return data.stream !== null;
}


module.exports = {
  createChannelURL: createChannelURL,
  isChannelOnline: isChannelOnline
};
