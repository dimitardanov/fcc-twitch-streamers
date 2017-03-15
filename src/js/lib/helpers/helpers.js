

function getChannelURL (data) {
  return data.url;
}


function isStreaming (data) {
  return data.stream !== null;
}


function getLogoURL (data) {
  return data.logo;
}


function getChannelName (data) {
  return data.display_name;
}


function channelExists (data) {
  return data.status !== 404 && data.error !== 'Not Found';
}


function createTwitchURL(url, route, name) {
  return [url, route, name.toLowerCase()].join('/');
}


function getStreamStatusMsg(data) {
  if (isStreaming(data)) {
    return data.stream.channel.status;
  } else {
    return 'Offline';
  }
}


function createExistingChannelData (data, status) {
  return {
    logo: getLogoURL(data),
    name: getChannelName(data),
    url: getChannelURL(data),
    status: status
  };
}


module.exports = {
  getChannelURL: getChannelURL,
  isStreaming: isStreaming,
  getLogoURL: getLogoURL,
  getChannelName: getChannelName,
  channelExists: channelExists,
  createTwitchURL: createTwitchURL,
  getStreamStatusMsg: getStreamStatusMsg,
  createExistingChannelData: createExistingChannelData
};
