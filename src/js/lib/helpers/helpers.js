

function getChannelURL (data) {
  return data.url;
}


function isStreaming (data) {
  return data.stream !== null;
}


module.exports = {
  getChannelURL: getChannelURL,
  isStreaming: isStreaming
};
