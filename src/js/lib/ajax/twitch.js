

function twitchCall(url, sFunc, eFunc) {
  $.ajax({
    url: url,
    method: 'GET',
    crossDomain: true,
    dataType: 'jsonp',
    jsonp: true,
    success: sFunc,
    error: eFunc
  });
}


module.exports = twitchCall;
