(function () {
  var $width = document.querySelector('.label-width')
  var $height = document.querySelector('.label-height')

  function updateTitle (width, height) {
    document.title = width + ' x ' + height
  }

  function updateLabels (width, height) {
    $width.innerHTML = width
    $height.innerHTML = height
  }

  function handleResize () {
    var width = window.innerWidth + 'px'
    var height = window.innerHeight + 'px'

    updateTitle(width, height)
    updateLabels(width, height)
  }

  window.addEventListener('resize', handleResize)
  handleResize()
})()
