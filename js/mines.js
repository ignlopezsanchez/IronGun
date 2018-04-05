function Mine(game, x, y, r){
  this.game = game;
  this.x = x;
  this.y = y;  
  this.r = r;
  this.strength = 40;
} 

Mine.prototype.draw = function() {

  this.game.ctx.beginPath();
  this.game.ctx.fillStyle="black";
  this.game.ctx.strokeStyle="black";
  this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  this.game.ctx.fill();
  this.game.ctx.stroke();
  this.game.ctx.closePath();
}