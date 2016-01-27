var readyForNextLevel = false;

export default class Etiketten extends Phaser.State {
  
  create() {
    this.bg = this.game.add.sprite(90, 150, '5_bg');
    
    // nav
    this.nextButton = this.game.add.button(this.game.width -30, 600, 'arrow', this.nextClick, this);
    this.nextButton.anchor.setTo(0.5, 0.5);
    this.nextButton.alpha = 0;
    this.previousButton = this.game.add.button(30, 600, 'arrow', this.previousClick, this);
    this.previousButton.anchor.setTo(0.5, 0.5);
    this.previousButton.rotation = 3.1;
    
    // statusbar
    this.timeline = this.game.add.sprite(this.game.width/2, 600, '5_status');
    this.timeline.anchor.setTo(0.5, 0.5);

    // etiket
    this.kaasbol = this.game.add.sprite(500, 80, '5_kaasbol');
    this.etiketten = this.game.add.sprite(400, 370, '5_etiketten');
    this.etiketje = this.game.add.sprite(430, 360, '5_etiketje');
    this.etiketje.events.onInputDown.add(this.etiketPush, this);
    this.etiketje.alpha = 0;

    this.etiketje.inputEnabled = true;
    this.etiketje.input.enableDrag();
  }

  update(){
    if(this.etiketNeedsReposition()){
      this.setEtiketPostition();
    }

    if(readyForNextLevel){
      this.wiggleArrow();
    }
  }

  setEtiketPostition(){
    this.etiketje.x = 582;
    this.etiketje.y = 161; 
    readyForNextLevel = true;   
  }

  etiketNeedsReposition(){
    return this.etiketje.x >= 557 && this.etiketje.x <= 607 && this.etiketje.y >= 136 && this.etiketje.y <= 186;
  }
  
  etiketPush(){
    this.etiketje.alpha = 1;
  }

  nextClick() {
    this.game.state.start('End');
  }
  previousClick() {
    this.game.state.start('Rijpen');
  }

  wiggleArrow(){
    this.nextButton.alpha = 1;

    if(this.nextButton.x <= 880){
      this.nextButton.x += 0.4;
    }else if(this.nextButton.x >= 840){
      this.nextButton.x -= 20;
    }
  }
}
