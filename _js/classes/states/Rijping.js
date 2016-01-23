export default class Rijping extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background')

    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
  }

  nextClick() {
    console.log('klik Rijping');
    this.game.state.start('End');
  }
}
