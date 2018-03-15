// page nav
var next = document.getElementById('next')
var prev = document.getElementById('previous')
var pages = document.getElementsByTagName('article')
var p = 0

$('article').each(function(){
  $(this).hide();
});

pages[p].style.display = 'flex'

next.addEventListener('click', function () {
  p++
  if (p > 1) {
    p = 0
  }
  setPage()
})

prev.addEventListener('click', function () {
  p--
  if (p < 0) {
    p = 1
  }
  setPage()
})

function setPage () {
  $('article').each(function () {
    $(this).hide();
  });
  if (p == 0) {
    pages[p].style.display = 'flex'
  } else {
    pages[p].style.display = 'block'
  }
}
