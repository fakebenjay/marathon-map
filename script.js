$(document).ready(function() {
  $('div.col-md-9').html("<div class='landmark' id='welcome'><h1>Marathon Map</h1></div>")

  $("body").on("click", "input.button", function(e) {
    e.preventDefault()
    if (e.target.value === 'See Before the Marathon') {
      $('img.photo').attr('src', `img/${e.target.id}-before.jpg`)
      e.target.value = "See During the Marathon"
    } else {
      $('img.photo').attr('src', `img/${e.target.id}-during.jpg`)
      e.target.value = "See Before the Marathon"
    }
  })
})
