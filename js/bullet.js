
function Bullet(game, person) {
  this.game = game;
  this.x = person.x;
  this.y = person.y;  
  this.vx = 10;
  this.w = 10;
  this.h = 10;
  this.angle = person.angle;
  this.person = person;
}

Bullet.prototype.draw = function() {
  var angleRadians = (Math.PI/180)*(this.angle);
  this.game.ctx.save(); 
  this.game.ctx.translate(this.x + this.person.img.width/2, this.y + this.person.img.height/2);
  this.game.ctx.rotate(angleRadians);
  this.game.ctx.fillStyle = "red";
  this.game.ctx.fillRect(0, 0, -this.w/2, -this.h/2);
  this.game.ctx.restore();







  // this.game.ctx.beginPath();
  // this.game.ctx.fillStyle="green";
  // this.game.ctx.strokeStyle="black";
  // this.game.ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
  // this.game.ctx.fill();
  // this.game.ctx.stroke();
  // this.game.ctx.closePath();
}

Bullet.prototype.move = function() {
  var angleRadians = (Math.PI/180)*(360-this.angle);
    this.x += Math.cos(angleRadians)*this.vx;
    this.y -= Math.sin(angleRadians)*this.vx;
  
  // this.x += this.vx; 
  // this.y += this.vy;
};