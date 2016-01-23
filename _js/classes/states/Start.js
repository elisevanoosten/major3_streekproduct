export default class Start extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background')

    this.bg = this.game.add.sprite(this.game.width/2, this.game.height/2, '0_bg')
    this.bg.anchor.setTo(0.5, 0.5);

    this.start = this.game.add.button(705, 470, '0_start', this.startClick, this);
    this.start.anchor.setTo(0.5, 0.5);
    this.start.inputEnabled = true;
    this.start.input.useHandCursor = true;

  }

  startClick() {
    console.log('klik start');
    this.game.state.start('Koe');
  }
}
