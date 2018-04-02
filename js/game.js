function Game(canvasId){
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.player = new Player(this);
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
  this.player.draw();
  

  
};

Game.prototype.move = function(){
  

};

Game.prototype.clear = function(){
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

}
