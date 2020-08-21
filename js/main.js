    /* Scroll smooth */
    $(document).ready(function () {
        // Add smooth scrolling to all links
        $("a").on('click', function (event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                var hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 800, function () {

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            } // End if
        });
    });

    /* Go to top */
    var mybutton = document.getElementById("go-to-top"); // get the button
    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

    function scrollFunction() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }

    /* animation */
    AOS.init({
        offset: 200,
        delay: 0,
        duration: 1000
    });

    /* Carousel */
    $(document).ready(function () {
        $('.qoute').slick({
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
        });
    });
    $(document).ready(function () {
        $('.reviews').slick({
            slidesToShow: 1,
            dots: true,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3500,
        });
    });

    /* BaguetteBox */
    baguetteBox.run('.gallery');