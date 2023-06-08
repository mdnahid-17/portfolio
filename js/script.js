$(function () {

    $(function () {


        //partical-js
        particlesJS('particles-js',

            {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": {
                            "enable": true,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": ["#EE1A0B", "#EB2B0E", "#DCF8F7"],
                    },
                    "shape": {
                        "type": "circle",
                        "stroke": {
                            "width": 0,
                            "color": "#000000"
                        },
                        "polygon": {
                            "nb_sides": 5
                        },
                        "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                        }
                    },
                    "opacity": {
                        "value": 0.5,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": true,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                        }
                    },
                    "line_linked": {
                        "enable": false,
                        "distance": 150,
                        "color": "#ffffff",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        },
                        "onclick": {
                            "enable": true,
                            "mode": "push"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "retina_detect": true,
                "config_demo": {
                    "hide_card": false,
                    "background_color": "#b61924",
                    "background_image": "",
                    "background_position": "50% 50%",
                    "background_repeat": "no-repeat",
                    "background_size": "cover"
                }
            }

        );



    })


    //TYPE JS 
    $(function () {
        $(".typed").typed({
            strings: ["Web Developer.", "Web Designers.", "Frontend Developer."],
            // Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
            stringsElement: null,
            // typing speed
            typeSpeed: 30,
            // time before typing starts
            startDelay: 1200,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 500,
            // loop
            loop: true,
            // false = infinite
            loopCount: 5,
            // show cursor
            showCursor: false,
            // character for cursor
            cursorChar: "|",
            // attribute to type (null == text)
            attr: null,
            // either html or text
            contentType: 'html',
            // call when done callback function
            callback: function () { },
            // starting callback function before each string
            preStringTyped: function () { },
            //callback for every typed string
            onStringTyped: function () { },
            // callback for reset
            resetCallback: function () { }
        });
    });

    //CONTACT FORM JS
    function sendEmail() {


        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;
        let message = document.getElementById("message").value;



        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "mdnahid998811@gmail.com",
            Password: "23FBC5CCECC332C40D0EE8D687BEE3339561",
            To: 'mn938128@gmail.com',
            From: "mdnahid998811@gmail.com",
            Subject: "New Contact From Enquiry",
            Body: "Name: " + name + "<br/> Contact Number " + phone + "<br/> User Email " + email + "<br/> User PassWord " + password + "<br/> User Message " + message
        }).then(
            message => alert(message)
        );


    }


    //top scrollbar js

    $('.top-button').on('click', function () {
        $('html,body').animate({ scrollTop: 0 })
    })

    $(window).on('scroll', function () {
        var scroll = $(this).scrollTop();
        if (scroll > 1000) {
            $('.top-button').fadeIn(500)
        } else {
            $('.top-button').fadeOut(500)

        }

    })




    //responsive

    //sidbar 
    $('.toggle-bars').on('click', function () {
        $('.sidebar').css("left", "0")
    })
    $('.cros').on('click', function () {
        $('.sidebar').css("left", "-100%")
    })




})


