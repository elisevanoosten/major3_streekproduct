var scaling;
var bounds;
var smaller;
var readyForNextLevel = false;

export default class Rijpen extends Phaser.State {
  
  create() {
    this.bg = this.game.add.sprite(100,70, '4_bg');
    this.kaasrek = this.game.add.sprite(100,450, '4_kaasrek');

    // nav
    this.nextButton = this.game.add.button(this.game.width -30, 600, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
    this.nextButton.alpha = 0;
    this.previousButton = this.game.add.button(30, 600, 'arrow', this.previousClick, this);
    this.previousButton.anchor.setTo(0.5, 0.5);
    this.previousButton.rotation = 3.1;

    // statusbar
    this.timeline = this.game.add.sprite(this.game.width/2, 600, '4_status');
    this.timeline.anchor.setTo(0.5, 0.5);

    // kaasrek drag
    this.kaasrek.inputEnabled = true;
    this.kaasrek.input.enableDrag(false, true);
    this.kaasrek.anchor.setTo(0.5, 0.5);

    // bounds
    scaling = 1;
    bounds = new Phaser.Rectangle(0, 240, this.game.width, 600 - 240);
    var graphics = this.game.add.graphics(bounds.x, bounds.y);
    graphics.drawRect(0,0,bounds.width,bounds.height);
    this.kaasrek.input.boundsRect = bounds;
  }

  update(){
    if (this.inFrontOfDoor()){
      if(this.biggerThanDoor()){
        this.scaleDown();
        readyForNextLevel = true;
      }else{
        this.driveKarrekeInside();
      }
    }

    if(readyForNextLevel){
      this.wiggleArrow();
    }
  }

  inFrontOfDoor(){
    return this.kaasrek.x > 490 && this.kaasrek.x < 520 && this.kaasrek.y < 440;
  }

  biggerThanDoor(){
    return scaling > 0.4;
  }

  scaleDown(){
    scaling -= 0.1;
    this.kaasrek.scale.set(scaling,scaling);
  }

  driveKarrekeInside(){
    this.kaasrek.x = 563;
    this.kaasrek.y = 396;
    this.kaasrek.input.draggable = false;
  }

  nextClick() {
    this.game.state.start('Etiketten');
  }
  previousClick() {
    this.game.state.start('Pers');
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
