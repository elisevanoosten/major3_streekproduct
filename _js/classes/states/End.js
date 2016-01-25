export default class End extends Phaser.State {
  create() {    

    this.verkooppuntButton = this.game.add.button(this.game.world.centerX, this.game.world.centerY, 'arrow', function() {  
      window.location.href = "verkooppunten.html";  
    }, this);
    this.verkooppuntButton.anchor.setTo(0.5, 0.5);
  }

  verkooppuntClick() {
    console.log('the End');
  }
}
