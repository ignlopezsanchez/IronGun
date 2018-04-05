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
  this.playerTwo = new Player(this, 400, 700, "img/player.png")
  this.background = new Background(this);
  this.img = new Image();
  this.img.src = "img/GAME_OVER.png";
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
      this.playerOne.shoot();        
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
      this.playerTwo.shoot();       
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
    }
  }.bind(this)
};

Game.prototype.start = function(){
    this.intervalId = setInterval(function(){
    this.clear();
    this.checkCollisions();
    this.move();
    this.draw();
  }.bind(this), 1000/60);
}

Game.prototype.stop = function(){
  clearInterval(this.intervalId);
  this.clear();
  this.ctx.drawImage(this.img, 0, 0);

  // this.ctx.fillStyle = "black"
  // this.ctx.font = "30px Arial";
  // this.ctx.fillText("GAME OVER",this.canvas.width/2 -50 ,this.canvas.width/2 - 50);
  this.ctx.draw();
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

  this.playerTwo.moveForward();
  this.playerTwo.moveBackward();
  this.playerTwo.rotateRight();
  this.playerTwo.rotateLeft();
 

  this.playerOne.moveBullets();
  this.playerTwo.moveBullets();
};

Game.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

}
Game.prototype.checkCollisions = function(){
  this.playerOne.checkCollisionPlayerWithObstacles(this.playerOne);
  this.playerTwo.checkCollisionPlayerWithObstacles(this.playerTwo);
  this.checkCollisionBulletsWithObstacles(this.playerOne);
  this.checkCollisionBulletsWithObstacles(this.playerTwo);
  this.checkCollisionBulletsPlayers(this.playerOne, this.playerTwo);
  this.checkCollisionBulletsPlayers(this.playerTwo, this.playerOne);
  this.checkCollisionPlayerOnePlayerTwo();

  

}




Game.prototype.checkCollisionBulletsWithObstacles = function(player) {                         //entre balas de player y obstaculos
  for (j = 0; j < player.bullets.length; j++){ 
    for (i=0; i < this.background.listObstacles.length; i++){
      if (
        player.bullets[j].x + player.img.width/2 < this.background.listObstacles[i][0] + this.background.listObstacles[i][2] && 
        player.bullets[j].x + player.img.width/2 + player.bullets[j].r > this.background.listObstacles[i][0] && 
        player.bullets[j].y < this.background.listObstacles[i][1] + this.background.listObstacles[i][3] && 
        player.bullets[j].y + player.bullets[j].r > this.background.listObstacles[i][1]
      ) {
        player.bullets.splice(j,1);
        return true;
      } 
    }
  }  
}


Game.prototype.checkCollisionBulletsPlayers = function(player, target) {                           //entre balas de player y el otro player
  
  for (j = 0; j < player.bullets.length; j++){  
    for (i=0; i < this.background.listObstacles.length; i++){
      if (
        Math.abs(player.bullets[j].centerBulletX - target.centerX) < player.bullets[j].r + target.r &&
        Math.abs(player.bullets[j].centerBulletY - target.centerY) < player.bullets[j].r + target.r
      ) {
        player.bullets.splice(j,1);
        target.health -= player.strength;
        if (target.health == 0){
          this.stop();
        }
        return true;
      } 
    }
  }  
}


Game.prototype.checkCollisionPlayerOnePlayerTwo = function() {                           //entre players
  var playerOne = this.playerOne;
  var playerTwo = this.playerTwo;
  if (
    Math.abs(playerOne.centerX - playerTwo.centerX) < playerOne.r + playerTwo.r &&
    Math.abs(playerOne.centerY - playerTwo.centerY) < playerOne.r + playerTwo.r
  ) {
      this.playerOne.x = this.playerOne.lastX;
      this.playerOne.y = this.playerOne.lastY; 
      this.playerTwo.x = this.playerTwo.lastX;
      this.playerTwo.y = this.playerTwo.lastY;    
    return true;
    }   
}




























