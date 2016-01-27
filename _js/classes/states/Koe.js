var emitter;
var teller;
var readyForNextLevel = false;
var scaling = 0;
var timer;

export default class Koe extends Phaser.State {

  create() {
    this.bg = this.game.add.sprite(this.game.width/2, 300, '1_bg');
    this.bg.anchor.setTo(0.5, 0.5);
    
    // nav
    this.nextButton = this.game.add.button(this.game.width -30, 600, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
    this.nextButton.alpha = 0;
    this.previousButton = this.game.add.button(30, 600, 'arrow', this.previousClick, this);
    this.previousButton.anchor.setTo(0.5, 0.5);
    this.previousButton.rotation = 3.1;
    
    // statusbar
    this.timeline = this.game.add.sprite(this.game.width/2, 600, '1_status');
    this.timeline.anchor.setTo(0.5, 0.5);

    //uier
    this.uier = this.game.add.button(395, 320, '1_uier', this.uierClick, this);
    this.uier.anchor.setTo(0.5, 0.5);
    this.uier.input.pixelPerfectOver = true;
    this.uier.input.useHandCursor = true;
    this.uier.alpha = 0;
    this.uier.inputEnabled = true;
    this.uier.input.enableDrag();

    //melk valt
    emitter = this.game.add.emitter(400, 360, 200);
    emitter.makeParticles('1_drup');
    emitter.setRotation(0);
    emitter.gravity = 1400;
    emitter.lifespan = 365;

    //emmerke
    this.melk = this.game.add.sprite(339, 388, '1_melk');
    this.melk.animations.frame = 0;
    this.previousY = 0;
    teller = 0;

    //duim
    this.duim = this.game.add.sprite(580, 380, '1_duim');
    this.duim.anchor.setTo(0.5, 0.5);
    this.duim.scale.set(0,0);
    this.duim.alpha = 0;

    //timer
    timer = this.game.time.create(false);
  }

  update(){
    this.emitterOff();
    let distanceY = this.game.input.activePointer.clientY - this.previousY;

    if(this.uierDragged()){
      this.putUierBack();
      
      if(distanceY != 0){
        this.milking();
      }
    }

    this.previousY = this.game.input.activePointer.clientY;

    if(readyForNextLevel){
      this.wiggleArrow()
    }
  }
  

  uierDragged(){
    return this.uier.input.isDragged;
  }
  
  putUierBack(){
    this.uier.x = 395;
    this.uier.y = 320;
  }

  emitterOff(){
    emitter.on = false;
  }

  emitterOn(){
    emitter.on = true;
  }

  nextClick(){
    this.game.state.start('Stremsel');
  }
  previousClick(){
    this.game.state.start('Start');
  }

  milking(){
    teller ++;
    this.emitterOn();

    if(teller > 15 && (this.melk.animations.frame !== 12)){
      teller = 0;
      this.melk.animations.frame ++;
    }
    if(this.melk.animations.frame == 12){
      readyForNextLevel = true;
    }
  }

  wiggleArrow(){
    this.nextButton.alpha = 1;

    if(this.nextButton.x <= 880){
      this.nextButton.x += 0.4;
    }else if(this.nextButton.x >= 840){
      this.nextButton.x -= 20;
    }
  }
}