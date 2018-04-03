function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.playerOne = new Player(this, 400, 400);
  this.playerTwo = new Player(this, 400,500)
  this.background = new Background(this);
 
  
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
