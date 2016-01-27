import Preload from './classes/states/Preload';
import Start from './classes/states/Start';
import Koe from './classes/states/Koe';
import Stremsel from './classes/states/Stremsel';
import Pers from './classes/states/Pers';
import Rijpen from './classes/states/Rijpen';
import Etiketten from './classes/states/Etiketten';
import End from './classes/states/End';

let game;
let recept;

const init = () => {
	if(document.getElementById('phaser-game')){
		gameStart();
	}

	if(document.querySelector('.scroll')){
		scrollSmoothly();
	}

  if(document.querySelector('.recept-detail')){
    receptHide();
  }

};

const gameStart = () => {
	game = new Phaser.Game(900, 650, Phaser.AUTO, "phaser-game", null, true);
	game.state.add('Preload', Preload, false);
	game.state.add('Start', Start, false);
	game.state.add('Koe', Koe, false);
	game.state.add('Stremsel', Stremsel, false);
	game.state.add('Pers', Pers, false);
	game.state.add('Rijpen', Rijpen, false);
	game.state.add('Etiketten', Etiketten, false);
	game.state.add('End', End, false);
	game.state.start('Preload');
}

const receptHide = () => {
  [].forEach.call(document.querySelectorAll(".toggle_recept"), function(link){
    link.addEventListener('click', toggleRecept);
  })
}

const toggleRecept = (event) => {
  event.preventDefault();
  let receptDetail = event.currentTarget.parentNode.parentNode.parentNode.querySelector(".recept-detail")
  receptDetail.classList.toggle("hide");
  receptDetail.classList.toggle("show");
}

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


init();