////////////////////////////////////////////////////////////////////////
//Script to scroll the bulb on scroll event.
$(window).scroll(function(){
    var pos = $(window).scrollTop();
    var docH = $(document).height();
    var winH = $(window).height();
    var pct = (pos/docH);
    var actPos = (pct * winH) - 450;
    $('.light-bulb-off').animate({"top": actPos+"px"}, 1);
    $('#wct').text(pos);
    $('#dh').text(docH);
    $('#wh').text(winH);
});
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
// $(document).ready(function(){
//     $('.navbar-brand').click(function(){
//         //bring the navigation in
//         $('#hiddenNav').animate({"left":"100%"}, 1000);
//     })
// })

////////////////////////////////////////////////////////////////////////