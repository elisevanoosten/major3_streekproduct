export default class Start extends Phaser.State {
  create() {
    this.bg = this.game.add.sprite(this.game.width/2, 300, '0_bg')
    this.bg.anchor.setTo(0.5, 0.5);

    this.start = this.game.add.button(705, 470, '0_start', this.startClick, this);
    this.start.anchor.setTo(0.5, 0.5);
    this.start.inputEnabled = true;
    this.start.input.useHandCursor = true;
  }

  startClick() {
    this.game.state.start('Koe');
  }
}
