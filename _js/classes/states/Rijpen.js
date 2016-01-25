var scaling = 1;
var bounds;
var small_bounds;

export default class Rijpen extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background')

    this.bg = this.game.add.sprite(100,70, '4_bg')
    this.kaasrek = this.game.add.sprite(100,450, '4_kaasrek')
  
    // kaasrek drag
    this.kaasrek.inputEnabled = true;
    this.kaasrek.input.enableDrag(false, true);
    // this.kaasrek.input.allowVerticalDrag = false;
    this.kaasrek.anchor.setTo(0.5, 0.5);

    // bounds
    bounds = new Phaser.Rectangle(0, 240, this.game.width, 600 - 240);
    var graphics = this.game.add.graphics(bounds.x, bounds.y);
    graphics.drawRect(0,0,bounds.width,bounds.height);
    this.kaasrek.input.boundsRect = bounds;

    // small_bounds = new Phaser.Rectangle(390, 270, 300, 320);
    // small_bounds = new Phaser.Rectangle(390, 290, 300, 280);
    // var small_graphics = this.game.add.graphics(small_bounds.x, small_bounds.y);
    // small_graphics.drawRect(0,0,small_bounds.width,small_bounds.height);

    // nextpage
    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
  }

  update(){
      if (this.kaasrek.x > 490 && this.kaasrek.x < 520 && this.kaasrek.y < 440){
        console.log('ye' + scaling);
        scaling -= 0.03;
        if(scaling > 0.4){
          this.kaasrek.scale.set(scaling,scaling);  
        }
        if(scaling < 0.4){
          // this.kaasrek.input.boundsRect = small_bounds;
          this.kaasrek.x = 563;
          this.kaasrek.y = 396;
          this.kaasrek.input.draggable = false;
        }
      }

  }

  nextClick() {
    this.game.state.start('Etiketten');
  }
}
