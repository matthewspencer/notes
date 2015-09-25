define(['jquery', 'pjax'], function ($) {

  var initialized = false,
    bodyClassCache = {};

  (function init() {

    if (initialized) {
      return
    }

    updateBodyClassCache(document.body.className)

    $(document)
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

    initialized = true;

  })()

  /**
   * Keep track of the body classes for by location.
   *
   * @param  {String} className
   */
  function updateBodyClassCache(className) {

    bodyClassCache[document.location.pathname] = className

  }

})