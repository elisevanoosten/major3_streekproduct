var emitter;
export default class Koe extends Phaser.State {

  create() {
    this.background = this.game.add.sprite(0, 0, 'background')

    this.bg = this.game.add.sprite(this.game.width/2, this.game.height/2, '1_bg')
    this.bg.anchor.setTo(0.5, 0.5);

    this.uier = this.game.add.button(395, 320, '1_uier', this.uierClick, this);
    this.uier.anchor.setTo(0.5, 0.5);
    this.uier.input.pixelPerfectOver = true;
    this.uier.input.useHandCursor = true;
    this.uier.alpha = 0.1;
    this.uier.inputEnabled = true;
    this.uier.input.enableDrag();

    emitter = this.game.add.emitter(395, 360, 200);
    emitter.makeParticles('1_drup');
    emitter.setRotation(0, 0);
    emitter.gravity = 1400;
    emitter.bounce = 0;
    console.log(emitter.bounce);

    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
  }

  update(){
    emitter.on = false;
    if(this.uier.input.isDragged){
      console.log('drag');
      this.uier.x = 395;
      this.uier.y = 320;
      emitter.on = true;
    }
    // console.log(this.uier.x, this.uier.y);
  }
  

  nextClick() {
    console.log('klik koe');
    this.game.state.start('Stremsel');
  }

  uierClick() {
  	console.log('uier');
  	// var xpos = this.game.input.x
  	// if (this.game.input.x !== xpos) {
  	// 	console.log('swipe');
  	// };

    
  }
}