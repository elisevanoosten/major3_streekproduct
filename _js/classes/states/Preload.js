export default class Preload extends Phaser.State {
  preload() {
    this.load.onLoadComplete.addOnce(this.onLoadComplete, this);

    // this.load.atlasJSONHash('spritesheet', 'assets/img/spritesheet.png', 'assets/data/spritesheet.json');
    this.load.image('background', 'assets/img/bg.jpg');
    this.load.image('arrow', 'assets/img/arrow.png');

    this.load.image('0_start', 'assets/img/0_start.png');
    this.load.image('0_bg', 'assets/img/0_bg.png');
    
    this.load.image('1_bg', 'assets/img/1_bg.png');
    this.load.image('1_bucket', 'assets/img/1_bucket.png');
    this.load.image('1_drup', 'assets/img/1_drup.png');
    this.load.image('1_milk', 'assets/img/1_milk.png');
    this.load.image('1_uier', 'assets/img/1_uier.png');

    this.load.image('2_bg', 'assets/img/2_bg.png');
    this.load.image('2_stremsel', 'assets/img/2_stremsel.png');
    this.load.image('2_zuursel', 'assets/img/2_zuursel.png');

    this.load.image('3_bg', 'assets/img/3_bg.png');
    this.load.image('3_plaat', 'assets/img/3_plaat.png');
    this.load.image('3_pers_links', 'assets/img/3_pers_links.png');
    this.load.image('3_pers_rechts', 'assets/img/3_pers_rechts.png');
    this.load.image('3_potjes_links', 'assets/img/3_potjes_links.png');
    this.load.image('3_potjes_rechts', 'assets/img/3_potjes_rechts.png');
    
    this.load.image('4_bg', 'assets/img/4_bg.png');
    this.load.image('4_kaasrek', 'assets/img/4_kaasrek.png');

    
    this.load.image('5_bg', 'assets/img/5_bg.png');
    this.load.image('5_etiketten', 'assets/img/5_etiketten.png');
    this.load.image('5_etiketje', 'assets/img/5_etiketje.png');
    this.load.image('5_kaasbol', 'assets/img/5_kaasbol.png');
    // this.load.image('wide', 'assets/img/wide.png');
  }

  onLoadComplete() {
    this.game.state.start('Start');
  }
}
