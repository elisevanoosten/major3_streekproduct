    // emitter.start(false, 5000, 100);
// var emitter;
var drups;
// var sprite;
var timer;
var emitter;

var fireRate = 1;
var nextFire = 0;

export default class Stremsel extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background')
    
    this.bg = this.game.add.sprite(this.game.width/2, 300, '2_bg')
    this.bg.anchor.setTo(0.5, 0.5);


    // flesjes aanmaken
    this.stremsel = this.game.add.sprite(520, 105, '2_stremsel')
    this.zuursel = this.game.add.sprite(455, 110, '2_zuursel')

    this.zuursel.anchor.set(0.5);
    this.zuursel.inputEnabled = true;
    this.zuursel.input.enableDrag(false, true);

    this.stremsel.anchor.set(0.5);
    this.stremsel.inputEnabled = true;
    this.stremsel.input.enableDrag(false, true);

    // particles
    emitter = this.game.add.emitter(395, 340, 200);
    emitter.makeParticles('1_drup');
    emitter.setRotation(0);
    emitter.setAlpha(0.3);
    emitter.gravity = 1100;
    emitter.start(false, 5000, 100);
 
    // next
    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);

  }

  update(){
    emitter.on = false;

    // zuursel
    if (495 < this.zuursel.x && this.zuursel.x < 813 && this.zuursel.y < 315){
      this.zuursel.rotation = (this.zuursel.x-495)/50;

      if(this.zuursel.rotation > 2.9 && this.zuursel.rotation < 3.5){
        emitter.on = true;
        emitter.x = this.zuursel.x;
        emitter.y = this.zuursel.y + 65;
        console.log(this.zuursel.rotation);  
      }
    }else{
      this.zuursel.rotation = 0;
    }

    // stremsel
    if (522 < this.stremsel.x && this.stremsel.x < 840 && this.stremsel.y < 315){
      this.stremsel.rotation = (this.stremsel.x-522)/50;
      if(this.stremsel.rotation > 2.9 && this.stremsel.rotation < 3.5){
        emitter.on = true;
        emitter.x = this.stremsel.x;
        emitter.y = this.stremsel.y + 65;
        console.log(this.stremsel.rotation);  
      }
    }else{
      this.stremsel.rotation = 0;
    }
  }

  nextClick() {
    this.game.state.start('Pers');
  }
}
