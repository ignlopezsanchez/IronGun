function Player(game){
  this.game = game;
  this.x = 50;
  this.y = 50;
  this.img = new Image();
  this.img.src = "img/player.png"
} 

Player.prototype.draw = function(){
  this.game.ctx.drawImage(this.img, this.x, this.y);

}


