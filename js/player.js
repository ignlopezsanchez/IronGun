var Q_KEY = 81;
var A_KEY = 65;
var W_KEY = 87;
var D_KEY = 68;
var S_KEY = 83;
var UP_KEY = 38;
var DOWN_KEY = 40;
var RIGHT_KEY = 39;
var LEFT_KEY = 37;
var SHOOT_KEY = 191;
function Player(game,x, y){
  Person.call(this, game); 
  this.img = new Image();
  this.img.src = "img/player.png";
  this.x = x;
  this.y = y;
  this.setListeners();
  
} 

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;
Player.prototype.setListeners = function(){

  document.onkeydown = function(event) {
    
    switch (event.keyCode) {
      case D_KEY:
        this.game.playerOne.rotateRight();
        break;
      case A_KEY:
      this.game.playerOne.rotateLeft();        
        break;
      case W_KEY:        
      this.game.playerOne.moveForward();          
        break;
      case S_KEY:               
      this.game.playerOne.moveBackward();        
      break;        
        break;
      case Q_KEY:
        this.game.playerOne.shoot();        
        break; 
        
        


        case RIGHT_KEY:
        this.game.playerTwo.rotateRight();
        break;
      case LEFT_KEY:
      this.game.playerTwo.rotateLeft();        
        break;
      case UP_KEY:        
      this.game.playerTwo.moveForward();          
        break;
      case DOWN_KEY:               
      this.game.playerTwo.moveBackward();        
      break;        
        break;
      case SHOOT_KEY:
        this.game.playerTwo.shoot();        
        break;    
      
    }
  }.bind(this)


};



