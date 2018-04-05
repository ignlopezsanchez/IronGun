function Mine(game, x, y){
  this.game = game;
  this.x = x;
  this.y = y;  
  this.strength = 100;
  this.r = 5;
} 

Mine.prototype.draw = function() {

  this.game.ctx.beginPath();
  this.game.ctx.fillStyle="red";
  this.game.ctx.strokeStyle="red";
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.stroke();
  this.game.ctx.closePath();

}