var cards = 0;

// grid view
$("span.grid-view").click(function gridView (){
    cards = 1
    $("#search-result-table").addClass("grid");
    $("table").addClass("grid");
    $("tbody").addClass("grid");
    $("tr").addClass("grid");
    $("td").addClass("grid");
    $("span.first").addClass("grid");
    $("span.meta").addClass("grid");
    $(this).addClass("show");
    $("span.table-view").removeClass("show");
    $("#search-result-configure-download-row").hide();
    setGridWidth()
});

// table view
$("span.table-view").click(function tableView (){
    cards = 0
    $("#search-result-table").removeClass("grid");
    $("table").removeClass("grid");
    $("tbody").removeClass("grid");
    $("tr").removeClass("grid");
    $("td").removeClass("grid");
    $("span.first").removeClass("grid");
    $("span.meta").removeClass("grid");
    $(this).addClass("show");
    $("span.grid-view").removeClass("show");
    $("#search-result-configure-download-row").show();
    $('table').css('width','');
    $('table').css('margin','');
});

// the content of div#search-result-wrap needs to be centered
// the width of each content block inside the element is 250px (including padding/border/margins)
var result_wrap = document.getElementById('search-result-wrap')
var inline_width
function setGridWidth () {
    _width = result_wrap.offsetWidth
    
    if (_width >= 1250 && _width < 1500) {
        $("table.grid").css('width','1250px');
        $("table.grid").css('margin','auto');
        inline_width = 1250
    } else if (_width >= 1000 && _width < 1250) {
        $("table.grid").css('width','1000px');
        $("table.grid").css('margin','auto');
        inline_width = 1000
    } else if (_width < 1000 && _width >= 750) {
        $("table.grid").css('width','750px');
        $("table.grid").css('margin','auto');
        inline_width = 750
    } else if (_width < 750 && _width >= 500 ) {
        $("table.grid").css('width','500px');
        $("table.grid").css('margin','auto');
        inline_width = 500
    } else {
        $("table.grid").css('width','250px');
        $("table.grid").css('margin','auto');
        inline_width = 250
    }
}
// using jQuery's '.css' causes the css styles coded here to be inserted into the page in an inline-styling fashion - this can be problematic because it overwrites css styles applied in the stylesheet
// $(element).css('style',''); unsets these inline styles

// toggle show/hide filter menu
var count = 0
var tableWidth = 0
$(".show-filter").click(function(){
    count = count + 1;                          // 270px is filter-menu width
    if (count%2 != 0){                          // 290px is the margin-left value
        // odd                                  //applied to right column results
        $("div.filter-menu").addClass("show"); // show filter menu
        $(this).find("img:first").css("transform","rotate(180deg)"); // flip arrow
        if ( window.innerWidth <= 820 ) {
            $(".searchResults").removeClass("show");
        } else {
            centerStuffWithFilter()
        }
    } else {
        // even
        // toggle off filter-menu
        $(".filter-menu").removeClass("show");
        $(this).find("img:first").css("transform","rotate(0deg)");
        $(".searchResults").removeClass("show");
        $('div.searchResults').css('width','');
        setTimeout(function(){ // re-center card grid
            setGridWidth()
        }, 150);
    }
});

function centerStuffWithFilter () {
    $(".searchResults").addClass("show");
    
    if (cards == 1) { // check if we are in grid view
        tableWidth = window.innerWidth - 490
        $('div.searchResults.show').css('width',tableWidth);
        setTimeout(function(){ // re-center card grid
            setGridWidth()
        }, 150);
    } else if (window.innerWidth > 820) {
        tableWidth = window.innerWidth - 490 // calculates width with filtermenu visible
        $('div.searchResults.show').css('width',tableWidth); // applies width
    }
    
    if (window.innerWidth <= 820) {
        $('div.searchResults.show').css('width','');
        $(".searchResults").removeClass("show");
    }
}

$(window).resize(function (){   // make everything responsive to window resizes
    if ( count%2 != 0 ) {
        setTimeout(function(){
            centerStuffWithFilter()
        }, 150);
    } else {
       setTimeout(function(){
            setGridWidth()
        }, 150); 
    }
});

// toggle show/hide filter-by submenus
$("li.filter-cat").click(function(){
    $(this).find("span#align-right:first").toggleClass("show");
    $(this).next().toggleClass("show");
});

// toggle show/hide per-page submenu
$(".results-per-page").click(function() {
    $(this).find("img:first").toggleClass('show');
    $(this).next().toggleClass('show');
});