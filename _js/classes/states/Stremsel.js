var emitter;

export default class Stremsel extends Phaser.State {
  create() {    
    this.bg = this.game.add.sprite(this.game.width/2, 300, '2_bg')
    this.bg.anchor.setTo(0.5, 0.5);
   // nav
    this.nextButton = this.game.add.button(this.game.width -30, 600, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
    this.previousButton = this.game.add.button(30, 600, 'arrow', this.previousClick, this);
    this.previousButton.anchor.setTo(0.5, 0.5);
    this.previousButton.rotation = 3.1;
    // statusbar
    this.timeline = this.game.add.sprite(this.game.width/2, 600, '2_status')
    this.timeline.anchor.setTo(0.5, 0.5);

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
    emitter.lifespan = 420;
  }

  update(){
    emitter.on = false;

    // zuursel
    if (this.zuurselPositionForRotate()){
      this.rotateZuursel();
      if(this.zuurselRotationIsSmall()){
        this.emitterZuursel();
      }
    }else{
      this.zuursel.rotation = 0;
    }

    // stremsel
    if (this.stremselPositionForRotate()){
      this.rotateStremsel();
      if(this.stremselRotationIsSmall()){
        this.emitterStremsel();
      }
    }else{
      this.stremsel.rotation = 0;
    }
  }

  

// zuursel
  zuurselPositionForRotate(){
    return 495 < this.zuursel.x && this.zuursel.x < 813 && this.zuursel.y < 315
  }

  rotateZuursel(){
    this.zuursel.rotation = (this.zuursel.x-495)/50;
  }

  zuurselRotationIsSmall(){
    return this.zuursel.rotation > 2.9 && this.zuursel.rotation < 3.5
  }

  emitterZuursel(){
    emitter.on = true;
    emitter.x = this.zuursel.x;
    emitter.y = this.zuursel.y + 65;
  }


  // stremsel
  stremselPositionForRotate(){
    return 522 < this.stremsel.x && this.stremsel.x < 840 && this.stremsel.y < 315
  }

  rotateStremsel(){
    this.stremsel.rotation = (this.stremsel.x-522)/50;
  }

  stremselRotationIsSmall(){
    return this.stremsel.rotation > 2.9 && this.stremsel.rotation < 3.5
  }

  emitterStremsel(){
    emitter.on = true;
    emitter.x = this.stremsel.x;
    emitter.y = this.stremsel.y + 65;
  }


  nextClick() {
    this.game.state.start('Pers');
  }
  previousClick() {
    this.game.state.start('Koe');
  }
}

