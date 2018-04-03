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
  this.playerOne = new Player(this, 400, 400, "img/player.png");
  this.playerTwo = new Player(this, 400, 500, "img/player.png")
  this.background = new Background(this);
  this.setListeners();
 
  
};

Game.prototype.setListeners = function(){

  document.onkeydown = function(event) {
    
    switch (event.keyCode) {
      case D_KEY:            
        this.playerOne.trueRight();
        break;
      case A_KEY:
      this.playerOne.trueLeft();        
        break;
      case W_KEY:        
      this.playerOne.trueUp();         
        break;
      case S_KEY:               
      this.playerOne.trueDown();        
      break;        
        
      case Q_KEY:
      this.playerOne.trueShoot();        
        break;        
      case RIGHT_KEY:
      this.playerTwo.trueRight();
        break;
      case LEFT_KEY:
      this.playerTwo.trueLeft();        
        break;
      case UP_KEY:        
      this.playerTwo.trueUp();          
        break;
      case DOWN_KEY:               
      this.playerTwo.trueDown();        
      break;        
        break;
      case SHOOT_KEY:
      this.playerTwo.trueShoot();        
        break;    
      
    }
  }.bind(this)


  document.onkeyup = function(event) {
    
    switch (event.keyCode) {
      case D_KEY:
      this.playerOne.falseRight();
        break;
      case A_KEY:
      this.playerOne.falseLeft();        
        break;
      case W_KEY:        
      this.playerOne.falseUp();          
        break;
      case S_KEY:               
      this.playerOne.falseDown();        
      break;        
        break;
      case Q_KEY:
      this.playerOne.falseShoot();        
        break;        
      case RIGHT_KEY:
      this.playerTwo.falseRight();
        break;
      case LEFT_KEY:
      this.playerTwo.falseLeft();        
        break;
      case UP_KEY:        
      this.playerTwo.falseUp();          
        break;
      case DOWN_KEY:               
      this.playerTwo.falseDown();        
      break;        
        break;
      case SHOOT_KEY:
      this.playerTwo.falseShoot();        
        break;    
      
    }
  }.bind(this)




};
Game.prototype.start = function(){
  var intervalId = setInterval(function(){
    this.clear();
    this.checkCollisions();
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
  this.playerOne.moveForward();
  this.playerOne.moveBackward();
  this.playerOne.rotateRight();
  this.playerOne.rotateLeft();
  this.playerOne.shoot();

  this.playerTwo.moveForward();
  this.playerTwo.moveBackward();
  this.playerTwo.rotateRight();
  this.playerTwo.rotateLeft();
  this.playerTwo.shoot();

  this.playerOne.moveBullets();
  this.playerTwo.moveBullets();
};

Game.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

}
Game.prototype.checkCollisions = function(){
  this.checkCollisionOne();
  this.checkCollisionTwo();
  this.checkCollisionOneBullets();
  this.checkCollisionTwoBullets();

}

//this.x + this.img.width/2, this.y + this.img.height/2)

Game.prototype.checkCollisionOne = function() {
  var playerOne = this.playerOne;
  
  for (i=0; i < this.background.listObstacles.length; i++){
    if (
      playerOne.x < this.background.listObstacles[i][0] + this.background.listObstacles[i][2] && 
      playerOne.x + playerOne.img.width > this.background.listObstacles[i][0] && 
      playerOne.y < this.background.listObstacles[i][1] + this.background.listObstacles[i][3] && 
      playerOne.y + playerOne.img.width > this.background.listObstacles[i][1]) {
      this.playerOne.x = this.playerOne.lastX;
      this.playerOne.y = this.playerOne.lastY;
    
    return true;
    } 
  }  
}

Game.prototype.checkCollisionTwo = function() {

  var playerTwo = this.playerTwo;
  for (i=0; i < this.background.listObstacles.length; i++){
    if (
      playerTwo.x < this.background.listObstacles[i][0] + this.background.listObstacles[i][2] && 
      playerTwo.x + playerTwo.img.width > this.background.listObstacles[i][0] && 
      playerTwo.y < this.background.listObstacles[i][1] + this.background.listObstacles[i][3] && 
      playerTwo.y + playerTwo.img.width > this.background.listObstacles[i][1]) {
      this.playerTwo.x = this.playerTwo.lastX;
      this.playerTwo.y = this.playerTwo.lastY;
    return true;

    } 
  }
}


Game.prototype.checkCollisionOneBullets = function() {
  for (j = 0; j < this.playerOne.bullets.length; j++){

  
    for (i=0; i < this.background.listObstacles.length; i++){
      if (
        this.playerOne.bullets[j].x + this.playerOne.img.width/2< this.background.listObstacles[i][0] + this.background.listObstacles[i][2] && 
        this.playerOne.bullets[j].x + this.playerOne.img.width/2 + this.playerOne.bullets[j].r > this.background.listObstacles[i][0] && 
        this.playerOne.bullets[j].y < this.background.listObstacles[i][1] + this.background.listObstacles[i][3] && 
        this.playerOne.bullets[j].y + this.playerOne.bullets[j].r > this.background.listObstacles[i][1]) {
        this.playerOne.bullets.splice(j,1);
        return true;

      } 
    }
  }
  
}

Game.prototype.checkCollisionTwoBullets = function() {
  for (j = 0; j < this.playerTwo.bullets.length; j++){

  
    for (i=0; i < this.background.listObstacles.length; i++){
      if (
        this.playerTwo.bullets[j].x + this.playerOne.img.width/2 < this.background.listObstacles[i][0] + this.background.listObstacles[i][2] && 
        this.playerTwo.bullets[j].x + this.playerOne.img.width/2 + this.playerTwo.bullets[j].r > this.background.listObstacles[i][0] && 
        this.playerTwo.bullets[j].y < this.background.listObstacles[i][1] + this.background.listObstacles[i][3] && 
        this.playerTwo.bullets[j].y + this.playerTwo.bullets[j].r > this.background.listObstacles[i][1]) {
        this.playerTwo.bullets.splice(j,1);
        return true;

      } 
    }
  }
  
}

// if (
//   cannonBall.x < boat.x + boat.width &&
//   cannonBall.x + cannonBall.radius > boat.x &&
//   cannonBall.y < boat.y + boat.height &&
//   cannonBall.y + cannonBall.radius > boat.y
// ) {
//   this.handleImpact(boat);
//     console.log(“IMPACTO!!“);