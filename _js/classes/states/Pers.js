var bounds_right;
var bounds_left;

export default class Pers extends Phaser.State {
  create() {
    // nav
    this.nextButton = this.game.add.button(this.game.width -30, 600, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
    this.previousButton = this.game.add.button(30, 600, 'arrow', this.previousClick, this);
    this.previousButton.anchor.setTo(0.5, 0.5);
    this.previousButton.rotation = 3.1;
    // statusbar
    this.timeline = this.game.add.sprite(this.game.width/2, 600, '3_status')
    this.timeline.anchor.setTo(0.5, 0.5);

    this.plaat = this.game.add.sprite(322, 366, '3_plaat');
    this.potjes_rechts = this.game.add.sprite(494, 300, '3_potjes_rechts')
    this.potjes_links = this.game.add.sprite(390, 310, '3_potjes_links')
    this.pers_rechts = this.game.add.sprite(550, 100, '3_pers_rechts')
    this.pers_links = this.game.add.sprite(423, 150, '3_pers_links')
    this.bg = this.game.add.sprite(this.game.width/2, 250, '3_bg');
    this.bg.anchor.setTo(0.5, 0.5);
    
    // pers drags
    this.pers_rechts.inputEnabled = true;
    this.pers_links.inputEnabled = true;

    this.pers_rechts.input.enableDrag();
    this.pers_links.input.enableDrag();

    this.pers_rechts.input.allowHorizontalDrag = false;
    this.pers_links.input.allowHorizontalDrag = false;

    // bounds
    bounds_right = new Phaser.Rectangle(500, 95, 200, 270);
    var graphics_right = this.game.add.graphics(bounds_right.x, bounds_right.y);
    graphics_right.drawRect(0,0,bounds_right.width,bounds_right.height);
    this.pers_rechts.input.boundsRect = bounds_right;

    bounds_left = new Phaser.Rectangle(400, 125, 200, 225);
    var graphics_left = this.game.add.graphics(bounds_left.x, bounds_left.y);
    graphics_left.drawRect(0,0,bounds_left.width,bounds_left.height);
    this.pers_links.input.boundsRect = bounds_left;
  }

  nextClick() {
    this.game.state.start('Rijpen');
  }
  previousClick() {
    this.game.state.start('Stremsel');
  }
}
