var SPACEBAR_KEY = 32;
var LEFT_KEY = 65;
var UP_KEY = 87;
var RIGHT_KEY = 68;
var DOWN_KEY = 83;
function Player(game){
  Person.call(this, game); 
  this.img = new Image();
  this.img.src = "img/player.png";
  this.setListeners();
  
} 

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;
Player.prototype.setListeners = function(){

  document.onkeydown = function(event) {
    var background = this.game.background;
    switch (event.keyCode) {
      case RIGHT_KEY:
        this.rotateRight();
        break;
      case LEFT_KEY:
      this.rotateLeft();        
        break;
      case UP_KEY:
          
          this.moveForward();
          
        break;

      case DOWN_KEY:        
       
          this.moveBackward();
        
      break;
        
        break;
      case SPACEBAR_KEY:
        this.shoot();
        
        break;    
      
    }
  }.bind(this)

};



