

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


module.exports = {
  getChannelURL: getChannelURL,
  isStreaming: isStreaming,
  getLogoURL: getLogoURL,
  getChannelName: getChannelName,
  channelExists: channelExists
};
