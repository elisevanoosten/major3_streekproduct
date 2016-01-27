var persLeftReady = false;
var persRightReady = false;
var boundsRight;
var boundsLeft;

export default class Pers extends Phaser.State {
  
  create() {
    // nav
    this.nextButton = this.game.add.button(this.game.width -30, 600, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
    this.nextButton.alpha = 0;
    this.previousButton = this.game.add.button(30, 600, 'arrow', this.previousClick, this);
    this.previousButton.anchor.setTo(0.5, 0.5);
    this.previousButton.rotation = 3.1;

    // statusbar
    this.timeline = this.game.add.sprite(this.game.width/2, 600, '3_status');
    this.timeline.anchor.setTo(0.5, 0.5);

    this.plaat = this.game.add.sprite(322, 366, '3_plaat');
    this.potjesRight = this.game.add.sprite(494, 300, '3_potjes_rechts');
    this.potjesLeft = this.game.add.sprite(390, 310, '3_potjes_links');
    this.persRight = this.game.add.sprite(550, 100, '3_pers_rechts');
    this.persLeft = this.game.add.sprite(423, 150, '3_pers_links');
    this.bg = this.game.add.sprite(this.game.width/2, 250, '3_bg');
    this.bg.anchor.setTo(0.5, 0.5);
    
    // pers drags
    this.persRight.inputEnabled = true;
    this.persLeft.inputEnabled = true;

    this.persRight.input.enableDrag();
    this.persLeft.input.enableDrag();

    this.persRight.input.allowHorizontalDrag = false;
    this.persLeft.input.allowHorizontalDrag = false;

    // bounds
    boundsRight = new Phaser.Rectangle(500, 95, 200, 270);
    var graphics_right = this.game.add.graphics(boundsRight.x, boundsRight.y);
    graphics_right.drawRect(0,0,boundsRight.width,boundsRight.height);
    this.persRight.input.boundsRect = boundsRight;

    boundsLeft = new Phaser.Rectangle(400, 125, 200, 225);
    var graphics_left = this.game.add.graphics(boundsLeft.x, boundsLeft.y);
    graphics_left.drawRect(0,0,boundsLeft.width,boundsLeft.height);
    this.persLeft.input.boundsRect = boundsLeft;
  }

  update(){
    if(this.persLeft.position.y >= 208){
      persLeftReady = true;
    }
    if(this.persRight.position.y >= 174){
      persRightReady = true;
    }
    if(persLeftReady && persRightReady){
      this.wiggleArrow();
    }
  }

  nextClick() {
    this.game.state.start('Rijpen');
  }
  previousClick() {
    this.game.state.start('Stremsel');
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
