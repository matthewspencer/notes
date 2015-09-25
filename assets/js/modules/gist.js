/**
 * Asynchronously load gists.
 * Because the gist embeds use `document.write` smh.
 */
define(['jquery', 'pjax', 'vendor/gist'], function ($) {

  $(document)
    .ready(loadGists)
    .on('pjax:success', loadGists)

  function loadGists() {
    $('[data-gist]').gist()
  }

})