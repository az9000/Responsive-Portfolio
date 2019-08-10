/**
 * jQuery horizontal scroller
 *
 * Copyright 2015, Mitch Rompelman
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * If you found a bug, please contact me via email <mitchrompelman@gmail.com>
 *
 * @author Mitch Rompelman
 * @version 0.1.0
 * @url https://github.com/MitchRompelman/Jquery-horizontal-scroller
 *
 */
$(function() {

    var scroll = {
        $body : $( 'html, body' ),
        $scrollbar : $( ".scrollbar" ),
        $bar : $( ".bar" ),
        documentheight : document.body.scrollHeight,
        scrollbarwidth : $( ".scrollbar" ).width(),
        toscroll : 0,
        oldscrolbarwidth : 0,
    }
    
    scroll.documentheight = document.body.scrollHeight;
    scroll.toscroll = ( scroll.documentheight - window.innerHeight ) / scroll.scrollbarwidth;
    $( scroll.$bar ).css( "width", $(window).scrollTop() / scroll.toscroll );
     
    window.addEventListener( 'scroll', function() {
        scroll.toscroll = ( scroll.documentheight - window.innerHeight ) / scroll.scrollbarwidth;
        $(  scroll.$bar ).stop().animate( { width: $(window).scrollTop() / scroll.toscroll }, 1000, 'swing', function() { }); 
    });
    
    $( scroll.$scrollbar ).click( function(e) {
        scroll.oldscrolbarwidth = $( ".scrollbar" ).width();
        scroll.toscroll = ( scroll.documentheight - window.innerHeight ) / scroll.scrollbarwidth;
        scroll.$body.stop().animate( { scrollTop: e.pageX * scroll.toscroll }, 1000, 'swing', function() { }); 
    });
    
    $( window ).resize( function() {
        scroll.scrollbarwidth = $( ".scrollbar" ).width();
        scroll.documentheight = document.body.scrollHeight;
        scroll.toscroll = ( scroll.documentheight - window.innerHeight ) / scroll.scrollbarwidth;
        $( scroll.$bar ).css( "width",  $(window).scrollTop() / scroll.toscroll );
    });

});