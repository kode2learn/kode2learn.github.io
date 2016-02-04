    
    function closeMenu(){
        $("#sidebar-wrapper").toggleClass("active", false);
    }

    // Opens the sidebar menu
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active", true);
    });

    $("#wrapper").bind('touchstart mousedown', function(e) {
        //e.preventDefault();
        $("#sidebar-wrapper").toggleClass("active", false);
    });

    // Scrolls to the selected menu item on the page
    $(function() {
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });


    $(document).ready(function () {
        if(window.location.href.indexOf("#thankyou") > -1) {
            $('#thankyou').show();
            $('#thankyouclick').click();
        }
    });