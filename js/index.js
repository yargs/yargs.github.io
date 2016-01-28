$(document).ready(function() {
  var app = new App()

  app.angleDown.on("click", app.scrollToOverview)

  $('pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  })
})
