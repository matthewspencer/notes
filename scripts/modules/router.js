var $ = require('jquery')
require('./gist')
require('jquery-pjax')

var initialized = false;
var bodyClassCache = {};

updateBodyClassCache(document.body.className)
require('jquery-pjax')

$(document)
  .ready(loadGists)
  .on('pjax:success', loadGists)
  .on('click', 'a:not([data-exclude])', function (event) {

    $.pjax.click(event, {
      container: 'main',
      fragment:  'main'
    })

  })
  .on('pjax:success', function(event, data) {

    var bodyClass = data.match(/body class=\"(.*?)\"/)[1]

    updateBodyClassCache(bodyClass)

  })
  .on('pjax:end', function (event) {

    document.body.className = bodyClassCache[document.location.pathname]

  })

/**
 * Keep track of the body classes for by location.
 *
 * @param  {String} className
 */
function updateBodyClassCache(className) {

  bodyClassCache[document.location.pathname] = className

}

function loadGists() {
  $('[data-gist]').gist()
}
