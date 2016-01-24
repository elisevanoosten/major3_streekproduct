export default class Pers extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background');

    this.plaat = this.game.add.sprite(322, 366, '3_plaat');
    this.potjes_rechts = this.game.add.sprite(494, 300, '3_potjes_rechts')
    this.potjes_links = this.game.add.sprite(390, 310, '3_potjes_links')
    this.pers_rechts = this.game.add.sprite(550, 100, '3_pers_rechts')
    this.pers_links = this.game.add.sprite(423, 150, '3_pers_links')
    this.bg = this.game.add.sprite(this.game.width/2, 250, '3_bg');
    this.bg.anchor.setTo(0.5, 0.5);
    

    // console.log(this.pers_rechts);

    this.pers_rechts.inputEnabled = true;
    this.pers_links.inputEnabled = true;

    this.pers_rechts.input.enableDrag();
    this.pers_links.input.enableDrag();

    this.pers_rechts.input.allowHorizontalDrag = false;
    this.pers_links.input.allowHorizontalDrag = false;

    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
  }

  nextClick() {
    console.log('klik Pers');
    this.game.state.start('Rijpen');
  }

  render() {

    // game.debug.inputInfo(32, 32);
    // game.debug.spriteInputInfo(sprite, 300, 32);
  }
}
