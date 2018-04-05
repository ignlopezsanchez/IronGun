function Background(game){
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.img = new Image();
  this.img.src = "img/background.png";
  this.mineX = 0;
  this.mineY = 0;
  this.mineRadius = 3;
  this.listMines = [];
  this.minesNumber = 30;

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
    [450, 425, 95, 25],
    [500, 450, 25, 175],
    [450, 625, 95, 25],
    [650, 425, 75, 25],
    [700, 450, 25, 175],
    [650, 625, 75, 25],
    [0, 0, 800, 25],
    [0, 25, 25, 750],
    [0, 775, 800, 25],
    [775, 25, 25, 750]
  ]
this.collision = false;
this.canPlace = false;

this.generateMines();
} 

Background.prototype.draw = function(){
  this.game.ctx.drawImage(this.img, this.x, this.y);

  this.listMines.forEach(function(mine) {
    mine.draw();
  });
  
}


Background.prototype.generateMines = function () {
  for (var i = 0; i < this.minesNumber; i++) {
    this.mineX = this.random(this.game.canvas.width);
    this.mineY = this.random(this.game.canvas.height);
    
    if (this.cannotPlace()) {
      i--;
    }
    else{
     this.listMines.push(new Mine(this.game, this.mineX, this.mineY, this.mineRadius));
    }    
  }
}

Background.prototype.random = function(limit) {
  return Math.floor(Math.random()*limit);
}

Background.prototype.cannotPlace = function(){
  for (var i=0; i < this.listObstacles.length; i++){
  if (
    this.mineX + this.mineRadius  < this.listObstacles[i][0] + this.listObstacles[i][2] && 
    this.mineX  + 2*this.mineRadius > this.listObstacles[i][0] && 
    this.mineY + this.mineRadius< this.listObstacles[i][1] + this.listObstacles[i][3] && 
    this.mineY + 2*this.mineRadius > this.listObstacles[i][1] 
  ) {
    return true;
  }
  return false;
  }

}