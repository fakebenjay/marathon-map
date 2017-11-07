$(document).ready(function() {
  $('div.col-md-9').html(`<div class='landmark' id='welcome'><h1>Marathon Map</h1><p>Click any of the landmarks on the map to see photos before and during the 2017 New York City Marathon!</p><img class='photo' alt='front' src='front-pics/${Math.round(Math.random()*21)}.jpg'></img></div>`)

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
