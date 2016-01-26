'use strict';

const scrollSmoothly = () => {
    if ( 'querySelector' in document && 'addEventListener' in window && Array.prototype.forEach ) {

        var smoothScroll = function (anchor, duration) {

            var startLocation = window.pageYOffset;
            var endLocation = anchor.offsetTop;
            var distance = endLocation - startLocation;
            var increments = distance/(duration/22);

            var stopAnimation;

            var animateScroll = function () {
                window.scrollBy(0, increments);
                stopAnimation();
            };

            stopAnimation = function () {
                var travelled = window.pageYOffset;
                if ( (travelled >= (endLocation - increments)) || ((window.innerHeight + travelled) >= document.body.offsetHeight) ) {
                    clearInterval(runAnimation);
                }
            };

            var runAnimation = setInterval(animateScroll, 16);

        };

        var scrollToggle = document.querySelectorAll('.scroll');

        [].forEach.call(scrollToggle, function (toggle) {

            toggle.addEventListener('click', function(e) {

                e.preventDefault();

                var dataID = toggle.getAttribute('href');
                var dataTarget = document.querySelector(dataID);
                var dataSpeed = toggle.getAttribute('data-speed');
                
                if (dataTarget) {
                    smoothScroll(dataTarget, dataSpeed || 500);
                }
                
            }, false);
        });
    }
}

const init = data => {
    scrollSmoothly();
};

init(); 
