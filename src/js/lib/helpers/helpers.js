

function getChannelURL (data) {
  return data.url;
}


function isStreaming (data) {
  return data.stream !== null;
}


function getLogoURL (data) {
  return data.logo;
}


module.exports = {
  getChannelURL: getChannelURL,
  isStreaming: isStreaming,
  getLogoURL: getLogoURL
};
