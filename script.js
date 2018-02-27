// page nav
var firstPage = document.getElementById('two-column')
var searchPage = document.getElementById('search-page')
var searchResultsPage = document.getElementById('search-results')
var next = document.getElementById('next')
var prev = document.getElementById('previous')
var pages = ['firstPage', 'searchPage', 'searchResultsPage']
var pagesLength = pages.length
var i = 0

$(document).ready(function () {
  pages[i].css('display', 'block')
});

next.addEventListener('click', function () {
  i++
  alert(pages[i])
})

prev.addEventListener('click', function () {
  i--
  alert(pages[i])
})
