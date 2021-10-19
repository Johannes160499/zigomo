(function (a) {
    function g() {
        if (a(".loader-wrap").length) {
            a(".loader-wrap").delay(1000).fadeOut(500)
        }
        TweenMax.to(a(".loader-wrap .overlay"), 1.2, {
            force3D: true,
            left: "100%",
            ease: Expo.easeInOut,
        })
    }
    var m = document.getElementsByClassName("js-anim-menu-btn");
    if (m.length > 0) {
        for (var k = 0; k < m.length; k++) {
            (function (w) {
                l(m[w])
            })(k)
        }

        function l(i) {
            i.addEventListener("click", function (w) {
                w.preventDefault();
                var x = !Util.hasClass(i, "anim-menu-btn--state-b");
                Util.toggleClass(i, "anim-menu-btn--state-b", x);
                var w = new CustomEvent("anim-menu-btn-clicked", {
                    detail: x
                });
                i.dispatchEvent(w)
            })
        }
    }

    function h() {
        if (a(".main-header").length) {
            var x = a(window).scrollTop();
            var i = a(".main-header");
            var w = a(".fixed-header .sticky-header, .header-style-two");
            if (x > 250) {
                i.addClass("fixed-header");
                w.addClass("animated slideInDown")
            } else {
                i.removeClass("fixed-header");
                w.removeClass("animated slideInDown")
            }
        }
    }
    h();
    if (a(".main-header li.dropdown ul").length) {
        a(".main-header .navigation li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>')
    }
    if (a(".anim-menu-btn").length) {
        var b = a(".anim-menu-btn"),
            p = a(".nav-inner");

        function q() {
            TweenMax.to(p, 0.6, {
                force3D: false,
                opacity: "1",
                ease: Expo.easeInOut
            });
            p.removeClass("close-menu")
        }

        function j() {
            TweenMax.to(p, 0.6, {
                force3D: false,
                opacity: "0",
                ease: Expo.easeInOut
            });
            p.addClass("close-menu")
        }
        b.on("click", function () {
            if (p.hasClass("close-menu")) {
                q()
            } else {
                j()
            }
        })
    }
    if (a(".search-box .search-icon").length) {
        a(".search-box .search-icon").on("click", function () {
            a(".main-header .main-search-form").fadeToggle(300)
        })
    }
    if (a(".mobile-menu").length) {
        var n = a(".main-header .nav-outer .main-menu .navigation").html();
        a(".mobile-menu .navigation").append(n);
        a(".sticky-header .navigation").append(n);
        a(".mobile-menu li.dropdown .dropdown-btn").on("click", function () {
            a(this).prev("ul").slideToggle(500)
        });
        var b = a(".anim-menu-btn"),
            o = a(".mobile-menu");

        function q() {
            TweenMax.to(o, 0.6, {
                force3D: false,
                left: "0",
                ease: Expo.easeInOut
            });
            o.removeClass("close-menu")
        }

        function j() {
            TweenMax.to(o, 0.6, {
                force3D: false,
                left: "-500px",
                ease: Expo.easeInOut
            });
            o.addClass("close-menu")
        }
        b.on("click", function () {
            if (o.hasClass("close-menu")) {
                q()
            } else {
                j()
            }
        })
    }

    function d() {
        a(".full-height").css("height", a(window).height())
    }
    d();
    if (a(".single-item-carousel").length) {
        a(".single-item-carousel").owlCarousel({
            loop: true,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        })
    }
    if (a(".sponsors-carousel").length) {
        a(".sponsors-carousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            smartSpeed: 500,
            autoplay: true,
            navText: ['<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>'],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                767: {
                    items: 3
                },
                1024: {
                    items: 4
                }
            }
        })
    }
    if (a(".banner-background-slide").length) {
        a(".banner-background-slide").owlCarousel({
            loop: true,
            items: 1,
            margin: 0,
            nav: true,
            smartSpeed: 500,
            autoplay: true
        })
    }
    if (a(".banner-section-four").length) {
        a(".banner-section-four").vegas({
            overlay: false,
            transition: "fade",
            transitionDuration: 4000,
            delay: 10000,
            animation: "random",
            animationDuration: 20000,
            slides: [{
                src: "images/background/3.jpg"
            }, {
                src: "images/background/2.jpg"
            }, {
                src: "images/background/4.jpg"
            }]
        })
    }

    function r() {
        if (a(".sortable-masonry").length) {
            var y = a(window);
            var i = a(".sortable-masonry .items-container");
            var w = a(".filter-btns");
            i.isotope({
                filter: "*",
                packery: {
                    gutter: 100
                },
                animationOptions: {
                    duration: 500,
                    easing: "linear"
                }
            });
            w.find("li").on("click", function () {
                var A = a(this).attr("data-filter");
                try {
                    i.isotope({
                        filter: A,
                        animationOptions: {
                            duration: 500,
                            easing: "linear",
                            queue: false
                        }
                    })
                } catch (z) {}
                return false
            });
            y.on("resize", function () {
                var z = w.find("li.active").attr("data-filter");
                i.isotope({
                    filter: z,
                    animationOptions: {
                        duration: 500,
                        easing: "linear",
                        queue: false
                    }
                });
                i.isotope()
            });
            var x = a(".filter-btns li");
            x.on("click", function () {
                var z = a(this);
                if (!z.hasClass("active")) {
                    x.removeClass("active");
                    z.addClass("active")
                }
            })
        }
    }
    r();
    if (a(".tabs-box").length) {
        a(".tabs-box .tab-buttons .tab-btn").on("click", function (i) {
            i.preventDefault();
            var w = a(a(this).attr("data-tab"));
            if (a(w).is(":visible")) {
                return false
            } else {
                w.parents(".tabs-box").find(".tab-buttons").find(".tab-btn").removeClass("active-btn");
                a(this).addClass("active-btn");
                w.parents(".tabs-box").find(".tabs-content").find(".tab").fadeOut(0);
                w.parents(".tabs-box").find(".tabs-content").find(".tab").removeClass("active-tab");
                a(w).fadeIn(300);
                a(w).addClass("active-tab")
            }
        })
    }
    if (a(".count-box").length) {
        a(".count-box").appear(function () {
            var i = a(this),
                w = i.find(".count-text").attr("data-stop"),
                x = parseInt(i.find(".count-text").attr("data-speed"), 10);
            if (!i.hasClass("counted")) {
                i.addClass("counted");
                a({
                    countNum: i.find(".count-text").text()
                }).animate({
                    countNum: w
                }, {
                    duration: x,
                    easing: "linear",
                    step: function () {
                        i.find(".count-text").text(Math.floor(this.countNum))
                    },
                    complete: function () {
                        i.find(".count-text").text(this.countNum)
                    }
                })
            }
        }, {
            accY: 0
        })
    }
    if (a(".lightbox-image").length) {
        a(".lightbox-image").fancybox({
            openEffect: "fade",
            closeEffect: "fade",
            helpers: {
                media: {}
            }
        })
    }
    if (a("#contact-form").length) {
        a("#contact-form").validate({
            rules: {
                username: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                },
                subject: {
                    required: true
                },
                message: {
                    required: true
                }
            }
        })
    }
    if (a(".scroll-to-target").length) {
        a(".scroll-to-target").on("click", function () {
            var i = a(this).attr("data-target");
            a("html, body").animate({
                scrollTop: a(i).offset().top
            }, 1500)
        })
    }

    function c() {
        if (a(".banner-slider").length > 0) {
            var i = new Swiper(".banner-slider", {
                spaceBetween: 0,
                slidesPerView: 1,
                mousewheel: true,
                height: 500,
                grabCursor: true,
                loop: true,
                speed: 1400,
                autoplay: {
                    delay: 5000,
                },
                pagination: {
                    el: ".banner-slider-pagination",
                    clickable: true,
                },
                navigation: {
                    nextEl: ".banner-slider-button-next",
                    prevEl: ".banner-slider-button-prev",
                },
            });
            i.on("slideChange", function () {
                var z = i.realIndex + 1,
                    A = a("#current");
                TweenMax.to(A, 0.2, {
                    force3D: true,
                    y: -10,
                    opacity: 0,
                    ease: Power2.easeOut,
                    onComplete: function () {
                        TweenMax.to(A, 0.1, {
                            force3D: true,
                            y: 10
                        });
                        A.html("0" + z)
                    }
                });
                TweenMax.to(A, 0.2, {
                    force3D: true,
                    y: 0,
                    delay: 0.3,
                    opacity: 1,
                    ease: Power2.easeOut
                })
            });
            var x = i.slides.length - 2;
            a("#total").html("0" + x)
        }
        if (a(".three-item-carousel ").length > 0) {
            var y = a(".three-item-carousel .swiper-slide").length;
            var w = new Swiper(".three-item-carousel", {
                preloadImages: false,
                loop: true,
                freeMode: false,
                slidesPerView: 3,
                spaceBetween: 0,
                grabCursor: true,
                mousewheel: true,
                speed: 1400,
                effect: "slide",
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false
                },
                pagination: {
                    el: ".banner-slider-pagination",
                    clickable: true,
                },
                breakpoints: {
                    991: {
                        slidesPerView: 2,
                    },
                    640: {
                        slidesPerView: 1,
                    },
                }
            });
            w.on("slideChange", function () {
                var z = w.realIndex + 1,
                    A = a("#current");
                TweenMax.to(A, 0.2, {
                    force3D: true,
                    y: -10,
                    opacity: 0,
                    ease: Power2.easeOut,
                    onComplete: function () {
                        TweenMax.to(A, 0.1, {
                            force3D: true,
                            y: 10
                        });
                        A.html("0" + z)
                    }
                });
                TweenMax.to(A, 0.2, {
                    force3D: true,
                    y: 0,
                    delay: 0.3,
                    opacity: 1,
                    ease: Power2.easeOut
                })
            });
            var x = w.slides.length - 6;
            a("#total").html("0" + x)
        }
    }
    if (a(".my-background-video").length) {
        a(".my-background-video").bgVideo({
            showPausePlay: false,
            pauseAfter: 1200
        })
    }
    if (a(".testimonial-carousel").length) {
        var e = new Swiper(".testimonial-thumbs", {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 3,
            initialSlide: 1,
            freeMode: true,
            speed: 1400,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
            centeredSlides: true,
            autoplay: {
                delay: 5000,
            },
        });
        var t = a(".swiper-container").length;
        var f = new Swiper(".testimonial-content", {
            spaceBetween: 10,
            slidesPerView: 1,
            mousewheel: true,
            autoplay: {
                delay: 5000,
            },
            loop: true,
            speed: 1400,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            thumbs: {
                swiper: e
            }
        })
    }
    if (a(".wow").length) {
        var v = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: false,
            live: true
        });
        v.init()
    }
    if (a(".js-tilt").length) {
        a(".js-tilt img").tilt({
            max: 35,
            perspective: 1500,
            mobile: false,
        })
    }

    function u() {
        r();
        d();
        c();
        setTimeout(function () {
            a(".animInBottom").each(function (i) {
                var w = a(this);
                setTimeout(function () {
                    TweenMax.to(w, 1.2, {
                        force3D: true,
                        bottom: "0",
                        ease: Expo.easeInOut
                    })
                }, 230 * i)
            })
        }, 400);
        setTimeout(function () {
            a(".animInTop").each(function (i) {
                var w = a(this);
                setTimeout(function () {
                    TweenMax.to(w, 1.2, {
                        force3D: true,
                        top: "0",
                        ease: Expo.easeInOut
                    })
                }, 230 * i)
            })
        }, 800)
    }
    var s = new Titanic({
        hover: false,
        click: true
    });
    a(window).on("resize", function () {
        d();
        r()
    });
    a(window).on("scroll", function () {
        h()
    });
    a(window).on("load", function () {
        g();
        u()
    })
})(window.jQuery);