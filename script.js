// page nav
var next = document.getElementById('next')
var prev = document.getElementById('previous')
var pages = document.getElementsByTagName('main')
var x = pages.length
var p = 0

$('main').each(function(){
  $(this).hide();
});

pages[p].style.display="flex"

next.addEventListener('click', function () {
  p++
  if ( p > 2 ) {
    p = 0
  }
  setPage()
})

prev.addEventListener('click', function () {
  p--
  if ( p < 0 ) {
    p = 2
  }
  setPage()
})

function setPage () {
  $('main').each(function(){
    $(this).hide();
  });
  pages[p].style.display="flex"
}
