function Person(game){
  this.game = game;
  this.x = 400;
  this.y = 400;
  this.vx = 5;
  this.angle = 0;
  this.bullets = [];
  this.health = 0;
  this.strength = 0;
  this.lastX = 0;
  this.lastY = 0;
  this.bullets = [];
} 

Person.prototype.draw = function(){  
  var angleRadians = (Math.PI/180)*(this.angle);
  this.game.ctx.save(); 
  this.game.ctx.translate(this.x + this.img.width/2, this.y + this.img.height/2);
  this.game.ctx.rotate(angleRadians);
  this.game.ctx.drawImage(this.img, -this.img.width/2, -this.img.height/2);


  





  this.game.ctx.restore();

  this.bullets.forEach(function(bullet) {
    bullet.draw();
  })
}

Person.prototype.moveForward = function() {  
  if (this.game.background.checkCollision()){
    this.x = this.lastX;
    this.y = this.lastY;

    return;
  }
  else {
    this.lastX = this.x;
    this.lastY = this.y;
    var angleRadians = (Math.PI/180)*(360-this.angle);
    this.x += Math.cos(angleRadians)*this.vx;
    this.y -= Math.sin(angleRadians)*this.vx;
    
  
  }
}

Person.prototype.moveBackward = function() {
  if (this.game.background.checkCollision()){
    this.x = this.lastX;
    this.y = this.lastY;
    return;
  }
  else {
    this.lastX = this.x;
    this.lastY = this.y;  
    var angleRadians = (Math.PI/180)*(360-this.angle);
    this.x -= Math.cos(angleRadians)*this.vx;
    this.y += Math.sin(angleRadians)*this.vx;
  }
}

Person.prototype.rotateRight = function() {
  this.angle += 45;
  if (this.angle === 360) {
    this.angle = 0;
  }
}

Person.prototype.rotateLeft = function() {
  this.angle -= 45;
  if (this.angle === -360) {
    this.angle = 0;
  }
};

Person.prototype.shoot = function() {
  var bullet = new Bullet(this.game, this); 
  this.bullets.push(bullet);

};

Person.prototype.moveBullets = function() {
  this.bullets = this.bullets.filter(function(bullet) {
    return bullet.x < this.game.canvas.width && bullet.x > 0 && bullet.y < this.game.canvas.height && bullet.y > 0;
  }.bind(this))
  
  this.bullets.forEach(function(bullet) {
    bullet.move();
  });
}






// if (
//   cannonBall.x < boat.x + boat.width &&
//   cannonBall.x + cannonBall.radius > boat.x &&
//   cannonBall.y < boat.y + boat.height &&
//   cannonBall.y + cannonBall.radius > boat.y
// ) {
//   this.handleImpact(boat);
//     console.log(“IMPACTO!!“);