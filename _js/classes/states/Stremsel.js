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
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    this.emitter = this.game.add.emitter(0, 0, 100);

    this.emitter.makeParticles('1_drup');

    this.emitter.setRotation(0, 0);
    this.emitter.setAlpha(0, 0);
    this.emitter.setScale(0.5, 1);
    this.emitter.gravity = 200;

    // druppels vallen
    // this.game.physics.startSystem(Phaser.Physics.ARCADE);

    // drups = this.game.add.group();
    // drups.enableBody = true;
    // drups.physicsBodyType = Phaser.Physics.ARCADE;

    // drups.createMultiple(200, '1_drup');
    // drups.setAll('checkWorldBounds', true);
    // drups.setAll('outOfBoundsKill', true);
    
    // sprite = this.game.add.sprite(20, 20, '1_drup');
    // sprite.anchor.set(0.5);

    // this.game.physics.enable(sprite, Phaser.Physics.ARCADE);

    // sprite.body.allowRotation = false;

    // timer = this.game.time.create(false);
    // timer.loop(200, this.updateCounter, this);

    // next
    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);

  }

  update(){
    
    // emitter.start(false, 5000, 100);

    if (495 < this.zuursel.x && this.zuursel.x < 813 && this.zuursel.y < 315){
      this.zuursel.rotation = (this.zuursel.x-495)/50;
      // timer.start();
      this.particleBurst();
    }else{
      this.zuursel.rotation = 0;
      // timer.destroy();
    }

    if (522 < this.stremsel.x && this.stremsel.x < 840 && this.stremsel.y < 315){
      this.stremsel.rotation = (this.stremsel.x-522)/50;
    }else{
      this.stremsel.rotation = 0;
    }
  }

  particleBurst(){
    console.log(this.emitter);
    this.emitter.x = this.zuursel.x;
    this.emitter.y = this.zuursel.y;
    this.emitter.start(true, 2000, null, 10);
  }

  updateCounter(){
    // this.dripping()
  }

  // dripping(){
  //   nextFire = this.game.time.now + fireRate;
  //   // drup.x = this.zuursel.x;
  //   // drup.y = this.zuursel.y;
  //   var drup = drups.getFirstDead();

  //   drup.reset(sprite.x - 8, sprite.y - 8);

  //   this.game.physics.arcade.moveToXY(drup, this.game.input.x, this.game.height);
  // }

  nextClick() {
    this.game.state.start('Pers');
  }
}
