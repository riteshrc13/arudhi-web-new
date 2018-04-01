////////////////////////////////////////////////////////////////////////
//Script to scroll the bulb on scroll event.
$(window).scroll(function(){
    var pos = $(window).scrollTop();
    var docH = $(document).height();
    var winH = $(window).height();
    var pct = (pos/docH);
    var actPos = (pct * winH) - 300;
    $('.light-bulb-off').animate({"top": actPos+"px"}, 1);
    if(isBottomIntoView('#second-last-page')){
        $('.light-bulb-off').hide(1000);
        $('.light-bulb-on').show(1000);
    }
    else {
        $('.light-bulb-off').show(1000);
        $('.light-bulb-on').hide(1000);
    }
});

$(document).ready(function() {
    var screenWidth = $(window).width();
    var leftPos = (screenWidth/2 - ($('.light-bulb-off').width()/2));
    $('.light-bulb-off').animate({"left": leftPos+"px"}, 1);
    $('.light-bulb-on').animate({"left": leftPos+"px"}, 1);
    $('.light-bulb-on').hide(1);
});

function isBottomIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    // return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    return (elemBottom <= docViewBottom);
}
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Script: Navigation Animation
$(document).ready(function(){
    $('#nav-btn-cross').hide(1);
    $('#nav-btn').click(function(){
        //bring the navigation in
        var el = $('#hiddenNav');
            var widt = $('#nav-btn').position().left - el.width() - $('#nav-btn').width(); 
            el.animate({"left":widt+"px"}, 1000);
            $('#nav-btn').hide(1000);
            $('#nav-btn-cross').show(1000);
    })

    $('#nav-btn-cross').click(function() {
        var ele = $('#hiddenNav');
        ele.animate({"left":"100%"}, 1000);
        $('#nav-btn').show(1000);
        $('#nav-btn-cross').hide(1000);
    });
})
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// Script To Give Div Height of Whole Page
$(document).ready(function(){
    var heigh = $(window).height();
    $('page-full').css('min-height', heigh+"px");
    $('page-full').css('height', heigh+"px");
    $(window).resize(function(){
        var heighIn = $(window).height();
        $('page-full').css('min-height', heighIn+"px");
        $('page-full').css('height', heighIn+"px");
    })
})
////////////////////////////////////////////////////////////////////////