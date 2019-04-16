jQuery(document).ready(function () {
    $('.main-menu').meanmenu({
        meanScreenWidth: "992",
        meanRevealPosition: "left",
        meanMenuContainer: '.mobile-menu-active'
    });
    /*$( "#search-ber" ).click(function() {
        $("#search-hide-show").css("display", "block");
    });*/
    /*$( "#search-btn" ).click(function() {
        $("#search-field").css("display", "block");
    });
    $( "body" ).click(function() {
        $("#search-field").css("display", "none");
    });*/
   /* $("#search-ber").click(function(){
        $(".search-text-sec").hide();
    });

    $("#search-ber").click(function(){
        $(".search-text-sec").show();
    });
*/

    $("#search-btn").click(function(){
        $("#search-field").addClass("db");
    });
    $("body").click(function(){
        $("#search-field").removeClass("db");
    });

});
/*$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    autoplay: 5,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});*/
/*$(':radio').change(function() {
    console.log('New star rating: ' + this.value);
});*/
/*
jQuery(document).ready(function () {
    $('#search-btn').click(function() {
        $('#search-field').toggle();
    });
});
*/

