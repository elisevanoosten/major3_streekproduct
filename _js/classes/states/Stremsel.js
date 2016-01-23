// var emitter;
var drups;
var sprite;
var timer;
var total;

var fireRate = 1;
var nextFire = 0;

export default class Stremsel extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background')
    
    this.bg = this.game.add.sprite(this.game.width/2, this.game.height/2, '2_bg')
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

    // druppels vallen
    this.game.physics.startSystem(Phaser.Physics.ARCADE);

    drups = this.game.add.group();
    drups.enableBody = true;
    drups.physicsBodyType = Phaser.Physics.ARCADE;

    drups.createMultiple(200, '1_drup');
    drups.setAll('checkWorldBounds', true);
    drups.setAll('outOfBoundsKill', true);
    
    sprite = this.game.add.sprite(0, 0, '1_drup');
    sprite.anchor.set(0.5);

    this.game.physics.enable(sprite, Phaser.Physics.ARCADE);

    sprite.body.allowRotation = false;

    timer = this.game.time.create(false);
    timer.loop(200, this.updateCounter, this);

    // next
    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);

  }

  update(){
    if (495 < this.zuursel.x && this.zuursel.x < 813 && this.zuursel.y < 315){
      this.zuursel.rotation = (this.zuursel.x-495)/50;
      timer.start();
    }else{
      this.zuursel.rotation = 0;
      // timer.destroy();
    }

    if (522 < this.stremsel.x && this.stremsel.x < 840 && this.stremsel.y < 315){
      this.stremsel.rotation = (this.stremsel.x-522)/50;
    }else{
      this.stremsel.rotation = 0;
    }
    console.log(drups.x);
  }


  updateCounter(){
    total++;
    this.dripping()
  }

  dripping(){
    nextFire = this.game.time.now + fireRate;
    drups.x = this.zuursel.x;
    drups.y = this.zuursel.y;
    var drup = drups.getFirstDead();

    drup.reset(sprite.x - 8, sprite.y - 8);

    this.game.physics.arcade.moveToXY(drup, this.game.input.x, this.game.height);
  }

  nextClick() {
    this.game.state.start('Wrongel');
  }
}
