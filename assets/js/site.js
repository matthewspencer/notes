requirejs.config({
  paths: {
    app:    '/assets/js/modules',
    vendor: '/assets/js/vendor',
    jquery: '/assets/js/vendor/jquery.min',
    pjax:   '/assets/js/vendor/jquery.pjax'
  },
  shim: {
    pjax: {
      deps: ['jquery']
    }
  }
})

requirejs([
  'app/router',
  'app/gist'
])
