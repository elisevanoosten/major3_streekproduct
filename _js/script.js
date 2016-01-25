import Preload from './classes/states/Preload';
import Start from './classes/states/Start';
import Koe from './classes/states/Koe';
import Stremsel from './classes/states/Stremsel';
import Pers from './classes/states/Pers';
import Rijpen from './classes/states/Rijpen';
import Etiketten from './classes/states/Etiketten';
import End from './classes/states/End';

let game;

const init = () => {
	game = new Phaser.Game(900, 600, Phaser.AUTO, "phaser-game", null, true);
	game.state.add('Preload', Preload, false);
	game.state.add('Start', Start, false);
	game.state.add('Koe', Koe, false);
	game.state.add('Stremsel', Stremsel, false);
	game.state.add('Pers', Pers, false);
	game.state.add('Rijpen', Rijpen, false);
	game.state.add('Etiketten', Etiketten, false);
	game.state.add('End', End, false);
	game.state.start('Preload');
};

init();