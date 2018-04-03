function Background(game){
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.img = new Image();
  this.img.src = "img/background.png";
  this.r = 

  this.listObstacles = [
    [100, 225, 150, 150],        //[x, y, width, height] de cada obstaculo
    [500, 225, 150, 150],
    [25, 75, 225, 25],
    [250, 60, 25, 55],
    [475, 25, 25, 50],
    [25, 160, 250, 25],
    [400, 150, 375, 25],
    [475, 125, 25, 25],
    [75, 425, 75, 25],
    [75, 450, 25, 175],
    [75, 625, 75, 25],
    [225, 425, 75, 25],
    [250, 450, 25, 175],
    [225, 625, 75, 25],
    [450, 425, 75, 25],
    [500, 450, 25, 175],
    [450, 625, 75, 25],
    [650, 425, 75, 25],
    [700, 450, 25, 175],
    [650, 625, 75, 25],
    [0, 0, 800, 25],
    [0, 25, 25, 750],
    [0, 775, 800, 25],
    [775, 25, 25, 750]
  ]
this.collision = false;
} 

Background.prototype.draw = function(){
  this.game.ctx.drawImage(this.img, this.x, this.y);
}
Background.prototype.checkCollisionOne = function() {
  var playerOne = this.game.playerOne;
  
  for (i=0; i < this.listObstacles.length; i++){
    if (
      playerOne.x < this.listObstacles[i][0] + this.listObstacles[i][2] && 
      playerOne.x + playerOne.img.width > this.listObstacles[i][0] && 
      playerOne.y < this.listObstacles[i][1] + this.listObstacles[i][3] && 
      playerOne.y + playerOne.img.width > this.listObstacles[i][1]) {
      this.game.playerOne.x = this.game.playerOne.lastX;
      this.game.playerOne.y = this.game.playerOne.lastY;
    
    return true;
    } 
  }  
}

Background.prototype.checkCollisionTwo = function() {

var playerTwo = this.game.playerTwo;
for (i=0; i < this.listObstacles.length; i++){
  if (
    playerTwo.x < this.listObstacles[i][0] + this.listObstacles[i][2] && 
    playerTwo.x + playerTwo.img.width > this.listObstacles[i][0] && 
    playerTwo.y < this.listObstacles[i][1] + this.listObstacles[i][3] && 
    playerTwo.y + playerTwo.img.width > this.listObstacles[i][1]) {
    this.game.playerTwo.x = this.game.playerTwo.lastX;
    this.game.playerTwo.y = this.game.playerTwo.lastY;
  return true;

  } 
}
}


