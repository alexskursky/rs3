// scroll to top button
jQuery( document ).ready( function ( $ ) {
    // Menu fixes
    $( function () {
        if ( $( window ).width() > 767 ) {
            $( ".dropdown" ).hover(
                function () {
                    $( this ).addClass( 'open' )
                },
                function () {
                    $( this ).removeClass( 'open' )
                }
            );
        }
    } );
    $( '.navbar .dropdown-toggle' ).hover( function () {
        $( this ).addClass( 'disabled' );
    } );
    $( window ).scroll( function () {
        var topmenu = $( '#top-navigation' ).outerHeight();
        var mainmenu = $( '.site-header' ).outerHeight();
        if ( $( document ).scrollTop() > ( topmenu + mainmenu + 50 ) ) {
            $( 'nav#site-navigation' ).addClass( 'shrink' );
        } else {
            $( 'nav#site-navigation' ).removeClass( 'shrink' );
        }
    } );
    
    $('.open-panel').each(function(){
        var menu = $( this ).data( 'panel' );
        $( "#" +menu ).click( function () {
            $( "#blog" ).toggleClass( "openNav" );
            $( "#" +menu+ ".open-panel" ).toggleClass( "open" );
        } );
    });
    
    $( '.top-search-icon' ).click(function() {
        $( ".top-search-box" ).toggle( 'slow' );
        $( ".top-search-icon .fa" ).toggleClass( "fa-times fa-search" );
    });
    
    $( ".split-slider.news-item-3" ).hover(function() {
        $( ".news-item-2" ).toggleClass( "split-slider-left" );
      });
} );

jQuery( window ).on( 'load resize', function () {   
    // Mobile menu height fix
    if ( jQuery( window ).width() < 768 ) {
        var vindowHeight = jQuery( window ).height();
        var navHeight = jQuery( '#site-navigation' ).height();
        jQuery( '.menu-container' ).css( 'max-height', vindowHeight - navHeight + 'px' );
        jQuery( '.menu-container' ).css( 'padding-bottom', '60px' );
    }
} );