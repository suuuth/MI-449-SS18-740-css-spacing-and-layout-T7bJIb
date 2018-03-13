// page nav
var next = document.getElementById('next')
var prev = document.getElementById('previous')
var pages = document.getElementsByTagName('main')
var i = pages.length

pages[0].style.display="flex"

next.addEventListener('click', function () {
  i++
  setPage()
})

prev.addEventListener('click', function () {
  i--
  setPage()
})

function setPage () {
  for ( pages[i] != i ) {
    pages[i].style.display="none"
  } else {
    pages[i].style.display="flex"
  }
}
