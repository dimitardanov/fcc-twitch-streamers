

function renderCard (data, template, $parent) {
  $parent.append(template(data));
}


module.exports = renderCard;
