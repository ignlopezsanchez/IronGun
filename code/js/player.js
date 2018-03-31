function Player(game){
  this.game = game;
  this.x = 50;
  this.y = 50;
  this.img = new Image();
  this.img.src = "img/player.png"
} 

Player.prototype.draw = function(){
  this.game.ctx.save();
  this.game.ctx.drawImage(this.img, this.x, this.y);
  this.game.ctx.translate(this.game.canvas.width/2, this.game.canvas.height/2);
  this.game.ctx.rotate((Math.PI/180)*45);
  this.game.ctx.drawImage(this.img, this.x + 200, this.y);
  this.game.ctx.restore();
  this.game.ctx.drawImage(this.img, this.x + 200, this.y);
;
}


