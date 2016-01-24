export default class Etiketten extends Phaser.State {
  create() {
 	this.background = this.game.add.sprite(0, 0, 'background')

    this.bg = this.game.add.sprite(90, 150, '5_bg')
    
    this.kaasbol = this.game.add.sprite(500, 80, '5_kaasbol')
    this.etiketten = this.game.add.sprite(400, 370, '5_etiketten')
    this.etiketje = this.game.add.sprite(410, 380, '5_etiketje')
    this.etiketje.events.onInputDown.add(this.etiketPush, this);
    this.etiketje.alpha = 0;

    this.etiketje.inputEnabled = true;
    this.etiketje.input.enableDrag();
	
	this.nextButton = this.game.add.button(this.game.width -30, 30, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);

  }

  update(){
  	if(this.etiketje.x >= 557 && this.etiketje.x <= 607 && this.etiketje.y >= 136 && this.etiketje.y <= 186){
		this.etiketje.x = 582;
		this.etiketje.y = 161;
  	}
  }

  etiketPush(){
  	console.log('jes');
  	this.etiketje.alpha = 1;
  }

  nextClick() {
    console.log('klik Rijping');
    this.game.state.start('End');
  }
}
