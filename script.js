const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar");

                hamburger.addEventListener("click", mobileMenu);

                function mobileMenu() {
                    hamburger.classList.toggle("active");
                    navMenu.classList.toggle("active");
                }
                const navLink = document.querySelectorAll(".navbar");

                navLink.forEach(n => n.addEventListener("click", closeMenu));

                function closeMenu() {
                    hamburger.classList.remove("active");
                    navMenu.classList.remove("active");
                };
                
var splide = new Splide( '#main-carousel', {
                pagination: false,
                type   : 'loop',
                autoplay: true,
                width: 900,
                heightRatio: .8,
                autoHeight: true,
                cover: true,
                } );


                var thumbnails = document.getElementsByClassName( 'thumbnail' );
                var current;


                for ( var i = 0; i < thumbnails.length; i++ ) {
                initThumbnail( thumbnails[ i ], i );
                }


                function initThumbnail( thumbnail, index ) {
                thumbnail.addEventListener( 'click', function () {
                    splide.go( index );
                } );
                }


                splide.on( 'mounted move', function () {
                var thumbnail = thumbnails[ splide.index ];


                if ( thumbnail ) {
                    if ( current ) {
                    current.classList.remove( 'is-active' );
                    }


                    thumbnail.classList.add( 'is-active' );
                    current = thumbnail;
                }
                } );


            splide.mount();