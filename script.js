// page nav
var next = document.getElementById('next')
var prev = document.getElementById('previous')
var pages = document.getElementsByTagName('main')
var x = pages.length - 1

pages[0].style.display="flex"

if ( x => 3 ) {
  next.style.display="none"
} else {
  next.style.display="inline"
}

next.addEventListener('click', function () {
  x++
  if ( x => 3 ) {
    next.style.display="none"
    prev.style.display="inline"
  } else {
    next.style.display="inline"
    prev.style.display="inline"
  }
  setPage()
})

prev.addEventListener('click', function () {
  x--
  if ( x == 0 ) {
    prev.style.display="none"
    next.style.display="inline"
  } else {
    prev.style.display="inline"
    next.style.display="inline"
  }
  setPage()
})

function setPage () {
  $('main').each(function(){
    $(this).hide();
  });
  pages[x].style.display="flex"
}
