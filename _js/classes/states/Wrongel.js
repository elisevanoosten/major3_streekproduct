export default class Wrongel extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background')
    // this.background = this.game.add.tileSprite(0, 0, 736, 736, 'spritesheet', 'tile19.jpg');
    // this.wallTop = this.game.add.tileSprite(0, 0, 736, 32, 'spritesheet', 'tile20.jpg');
    // this.wallLeft = this.game.add.tileSprite(0, 0, 32, 736, 'spritesheet', 'tile20.jpg');
    // this.wallBottom = this.game.add.tileSprite(0, 736 - 32, 736, 32, 'spritesheet', 'tile20.jpg');
    // this.wallRight = this.game.add.tileSprite(736 - 32, 0, 32, 736, 'spritesheet', 'tile20.jpg');

    // this.logo = this.game.add.sprite(this.game.width / 2, this.game.height / 2, 'logo');
    // this.logo.anchor.setTo(0.5, 0.5);

    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
  }

  nextClick() {
    console.log('klik wrongel');
    this.game.state.start('Rijping');
  }
}
