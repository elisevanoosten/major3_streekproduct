var scaling = 0;
var teller = 0;
export default class Rijpen extends Phaser.State {
  create() {
    this.background = this.game.add.sprite(0, 0, 'background')

    this.bg = this.game.add.sprite(100,70, '4_bg')
    this.kaasrek = this.game.add.sprite(100,450, '4_kaasrek')
  
    this.kaasrek.inputEnabled = true;
    this.kaasrek.input.enableDrag();
    this.kaasrek.input.allowVerticalDrag = false;
    this.kaasrek.anchor.setTo(0.5, 0.5);

    this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
  }

  update(){
      if (390 < this.kaasrek.x && this.kaasrek.x < 570){
        teller += .05;
        scaling = 1-teller;
        this.kaasrek.scale.set(scaling,scaling);
        if(scaling >= 0){
          teller = 0;
        }
      }
    console.log(scaling);

  }

  nextClick() {
    this.game.state.start('Etiketten');
  }
}
