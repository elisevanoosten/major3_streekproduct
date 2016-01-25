var emitter;
var teller;
export default class Koe extends Phaser.State {

  create() {
    this.bg = this.game.add.sprite(this.game.width/2, this.game.height/2, '1_bg')
    this.bg.anchor.setTo(0.5, 0.5);

    //uier
    this.uier = this.game.add.button(395, 320, '1_uier', this.uierClick, this);
    this.uier.anchor.setTo(0.5, 0.5);
    this.uier.input.pixelPerfectOver = true;
    this.uier.input.useHandCursor = true;
    this.uier.alpha = 0;
    this.uier.inputEnabled = true;
    this.uier.input.enableDrag();

    //melk valt
    emitter = this.game.add.emitter(395, 360, 200);
    emitter.makeParticles('1_drup');
    emitter.setRotation(0);
    emitter.gravity = 1400;
    emitter.lifespan = 365;

    //emmerke
    this.melk = this.game.add.sprite(353, 413, '1_melk');
    this.melk.animations.add('walk');

    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);

    this.previousY = 0;
  }

  update(){
    emitter.on = false;
    console.log(this.melk.frame);
    let distanceY = this.game.input.activePointer.clientY - this.previousY;

    if(this.uierDragged()){
      this.putUierBack();
      
      if(distanceY != 0){
        emitter.on = true;
        teller++;
        if(teller = 30){
          teller = 0
          this.melk.animations.play('walk', 10, false, false);
        }
      }
    }

    this.previousY = this.game.input.activePointer.clientY;
  }



  uierDragged(){
    return this.uier.input.isDragged;
  }
  
  putUierBack(){
    this.uier.x = 395;
    this.uier.y = 320;
  }

  nextClick() {
    console.log('klik koe');
    this.game.state.start('Stremsel');
  }
}