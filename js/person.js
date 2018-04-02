function Person(game){
  this.game = game;
  this.x = 50;
  this.y = 50;
  this.vx = 5;
  this.angle = 0;
  this.bullets = [];
  this.health = 0;
  this.strength = 0;
} 

Person.prototype.draw = function(){  
  var angleRadians = (Math.PI/180)*(this.angle);
  this.game.ctx.save(); 
  this.game.ctx.translate(this.x + this.img.width/2, this.y + this.img.height/2);
  this.game.ctx.rotate(angleRadians);
  this.game.ctx.drawImage(this.img, -this.img.width/2, -this.img.height/2);
  this.game.ctx.restore();
}

Person.prototype.moveForward = function() {
  var angleRadians = (Math.PI/180)*(360-this.angle);
  if (this.angle != 0 && this.angle != 90 && this.angle != 180 && this.angle != 270 && this.angle != 360){
    this.x += Math.cos(angleRadians)*this.vx;
    this.y -= Math.sin(angleRadians)*this.vx;
  }  
  else if (this.angle == 90){
    this.y += this.vx;
  }
  else if (this.angle == 180){
    this.x -= this.vx;
  }
  else if (this.angle == 270) {
    this.y -= this.vx;
  }
  else {
  this.x += this.vx
  }

};
Person.prototype.moveBackward = function() {
  var angleRadians = (Math.PI/180)*(360-this.angle);
  if (this.angle != 0 && this.angle != 90 && this.angle != 180 && this.angle != 270 && this.angle != 360){
    this.x -= Math.cos(angleRadians)*this.vx;
    this.y += Math.sin(angleRadians)*this.vx;
  }  
  else if (this.angle == 90){
    this.y -= this.vx;
  }
  else if (this.angle == 180){
    this.x += this.vx;
  }
  else if (this.angle == 270) {
    this.y += this.vx;
  }
  else {
  this.x -= this.vx
  }

};
Person.prototype.rotateRight = function() {
  this.angle += 45;
  if (this.angle === 360) {
    this.angle = 0;
  }
};
Person.prototype.rotateLeft = function() {
  this.angle -= 45;
  if (this.angle === -360) {
    this.angle = 0;
  }
};
Person.prototype.shoot = function() {


};


// if (
//   cannonBall.x < boat.x + boat.width &&
//   cannonBall.x + cannonBall.radius > boat.x &&
//   cannonBall.y < boat.y + boat.height &&
//   cannonBall.y + cannonBall.radius > boat.y
// ) {
//   this.handleImpact(boat);
//     console.log(“IMPACTO!!“);