var scaling = 1;
var bounds;
var smaller

export default class Rijpen extends Phaser.State {
  create() {
    this.bg = this.game.add.sprite(100,70, '4_bg')
    this.kaasrek = this.game.add.sprite(100,450, '4_kaasrek')
  
    // kaasrek drag
    this.kaasrek.inputEnabled = true;
    this.kaasrek.input.enableDrag(false, true);
    this.kaasrek.anchor.setTo(0.5, 0.5);

    // bounds
    bounds = new Phaser.Rectangle(0, 240, this.game.width, 600 - 240);
    var graphics = this.game.add.graphics(bounds.x, bounds.y);
    graphics.drawRect(0,0,bounds.width,bounds.height);
    this.kaasrek.input.boundsRect = bounds;

    // nextpage
    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
  }

  update(){
      if (this.inFrontOfDoor()){
        if(this.biggerThanDoor()){
          this.scaleDown();
        }else{
          this.driveInside();
        }
      }

  }

  inFrontOfDoor(){
    return this.kaasrek.x > 490 && this.kaasrek.x < 520 && this.kaasrek.y < 440
  }

  biggerThanDoor(){
    return scaling > 0.4
  }

  scaleDown(){
    scaling -= 0.1;
    this.kaasrek.scale.set(scaling,scaling);
  }

  driveInside(){
    this.kaasrek.x = 563;
    this.kaasrek.y = 396;
    this.kaasrek.input.draggable = false;
  }

  nextClick() {
    this.game.state.start('Etiketten');
  }
}
