var tween;

export default class End extends Phaser.State {

  create() {
    this.hoera = this.game.add.sprite(this.game.width/2, 130, 'hoera');
    this.floating_cheese = this.game.add.sprite(this.game.width/2-30, 300, 'floating_cheese');
    this.kom_ons = this.game.add.sprite(740, 470, 'kom_ons');
    this.niet_wachten = this.game.add.sprite(this.game.width/2, 500, 'niet_wachten');
    this.bezoeken = this.game.add.button(750, 510, 'bezoeken', function() {  
      window.location.href = 'verkooppunten.html';  
    }, this);

    // anchors
    this.floating_cheese.anchor.setTo(0.5, 0.5);
    this.hoera.anchor.setTo(0.5, 0.5);
    this.kom_ons.anchor.setTo(0.5, 0.5);
    this.niet_wachten.anchor.setTo(0.5, 0.5);
    this.bezoeken.anchor.setTo(0.5, 0.5);

    // floating cheese rotation
    tween = this.game.add.tween(this.floating_cheese).to( { x: this.game.width/2+30, y: 300 }, 2000, Phaser.Easing.Quadratic.InOut, true, 0, -1, true);
    tween.repeat = true;
    tween.yoyo(true, 0, 0);
  }

  verkooppuntClick() {
    console.log('the End');
  }
}
