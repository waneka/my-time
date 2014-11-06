$(document).ready(function() {
  fetchData('massage')
  bindEventListeners()
})

function fetchData(venueType) {
  console.log(venueType)
  $.ajax({
    type: 'GET',
    url: '/venues/' + venueType
  }).success(function(data) {
    // addDistanceAway(data)
    // convertDateFormat(data)
    var dealData = {
      deals: data
    }
    renderBusinesses(dealData)
  })
}

function renderBusinesses(data) {
  var template = $('#business').html()
  Mustache.parse(template)
  var rendered = Mustache.render(template, data)
  $('.deals').html(rendered)
}

function bindEventListeners() {
  $('.deals-search').submit(function(event) {
    event.preventDefault()
    var newVenue = $('.search-field').val()
    fetchData(newVenue)
  })
}

function addDistanceAway(data) {
  // loop through locations
  // find distance between points
  // add distance-away attribute to each object
}

function convertDateFormat(data) {
  // loop through locations
  // grab next-appointment-times[0]
  // convert to user friendly format
}