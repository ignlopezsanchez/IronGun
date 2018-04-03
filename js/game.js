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

function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.playerOne = new Player(this, 400, 400);
  this.playerTwo = new Player(this, 400,500)
  this.background = new Background(this);
  this.setListeners();
 
  
};

Game.prototype.setListeners = function(){

  document.onkeydown = function(event) {
    
    switch (event.keyCode) {
      case D_KEY:
        this.playerOne.rotateRight();
        break;
      case A_KEY:
      this.playerOne.rotateLeft();        
        break;
      case W_KEY:        
      this.playerOne.moveForward();          
        break;
      case S_KEY:               
      this.playerOne.moveBackward();        
      break;        
        break;
      case Q_KEY:
        this.playerOne.shoot();        
        break; 
        
        


        case RIGHT_KEY:
        this.playerTwo.rotateRight();
        break;
      case LEFT_KEY:
      this.playerTwo.rotateLeft();        
        break;
      case UP_KEY:        
      this.playerTwo.moveForward();          
        break;
      case DOWN_KEY:               
      this.playerTwo.moveBackward();        
      break;        
        break;
      case SHOOT_KEY:
        this.playerTwo.shoot();        
        break;    
      
    }
  }.bind(this)


};
Game.prototype.start = function(){
  var intervalId = setInterval(function(){
    this.clear();
    this.move();
    this.draw();
  }.bind(this), 1000/60);
}
Game.prototype.draw = function(){
  this.background.draw();
  this.playerOne.draw();
  this.playerTwo.draw();
  
};

Game.prototype.move = function(){
  this.playerOne.moveBullets();
  this.playerTwo.moveBullets();
};

Game.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

}
