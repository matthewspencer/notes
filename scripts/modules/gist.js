/**
 * Asynchronously load gists.
 * Because the gist embeds use `document.write` smh.
 */
var $ = require('jquery')
require('pjax')
require('gist')

$(document)
  .ready(loadGists)
  .on('pjax:success', loadGists)

function loadGists() {
  $('[data-gist]').gist()
}
