

function renderCard (data, template, $parent) {
  $parent.append(template(data));
}


function prependCard (data, template, $parent) {
  $parent.prepend(template(data));
}


module.exports = {
  renderCard: renderCard,
  prependCard: prependCard
};
