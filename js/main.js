
// This game will have only 1 state
var GameState = {
    // load the game assets before the game starts
    preload: function() {
        // load an image and give it a key (background)
        this.load.image('background', 'assets/images/background.jpg');
        this.load.image('astronaut', 'assets/images/astronaut.png');
        this.load.image('fred_flinstone', 'assets/images/Fred-Flintstone.png');

    },
    // executed after everything is loaded
    create: function() {
        // make a spirte from an image
        this.background = this.game.add.sprite(-1000, -700, 'background')

        // center of the world, place the sprite by its center, not the top-left corner
        this.astronaut = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'astronaut');
        this.astronaut.anchor.setTo(0.5, 0.5);

        // scale an image
        this.astronaut.scale.setTo(1.3);

        this.fred_flinstone = this.game.add.sprite(500, 515, 'fred_flinstone');
        this.fred_flinstone.anchor.setTo(0.5, 0.5);

        // Flip the image
        this.fred_flinstone.scale.setTo(-0.5, 0.5);


    },
    // this is executed multiple times per second
    update: function() {

    }
};

// initiate the Phaser framework
var game = new Phaser.Game(1800, 800, Phaser.AUTO);

game.state.add('GameState', GameState);
game.state.start('GameState');
