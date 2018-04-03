function Person(game){
  this.game = game;
  this.x = 400;
  this.y = 400;
  this.vx = 2;
  this.angle = 0;
  this.angleMovement = 4;
  this.bullets = [];
  this.health = 100;
  this.strength = 5;
  this.lastX = 0;
  this.lastY = 0;
  this.bullets = [];
  this.pressedKeys = [false, false, false, false, false];
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

// Person.prototype.moveForward = function() {  
//   if (this.game.background.checkCollision()){
//     this.x = this.lastX;
//     this.y = this.lastY;

//     return;
//   }
//   else {
//     this.lastX = this.x;
//     this.lastY = this.y;
//     var angleRadians = (Math.PI/180)*(360-this.angle);
//     this.x += Math.cos(angleRadians)*this.vx;
//     this.y -= Math.sin(angleRadians)*this.vx;
    
  
//   }
// }
Person.prototype.moveForward = function() {  
  if(this.pressedKeys[0] === true){
    this.lastX = this.x;
    this.lastY = this.y;
    var angleRadians = (Math.PI/180)*(360-this.angle);
    this.x += Math.cos(angleRadians)*this.vx;
    this.y -= Math.sin(angleRadians)*this.vx;
    
  }
  
}

// Person.prototype.moveBackward = function() {
//   if (this.game.background.checkCollision()){
//     this.x = this.lastX;
//     this.y = this.lastY;
//     return;
//   }
//   else {
//     this.lastX = this.x;
//     this.lastY = this.y;  
//     var angleRadians = (Math.PI/180)*(360-this.angle);
//     this.x -= Math.cos(angleRadians)*this.vx;
//     this.y += Math.sin(angleRadians)*this.vx;
//   }
// }


Person.prototype.moveBackward = function() {
  if(this.pressedKeys[1] === true){
    this.lastX = this.x;
    this.lastY = this.y;  
    var angleRadians = (Math.PI/180)*(360-this.angle);
    this.x -= Math.cos(angleRadians)*this.vx;
    this.y += Math.sin(angleRadians)*this.vx;
  }
}

// Person.prototype.rotateRight = function() {
//   this.angle += 45;
//   if (this.angle === 360) {
//     this.angle = 0;
//   }
// }


Person.prototype.rotateRight = function() {
  if(this.pressedKeys[2] === true){
    this.angle += this.angleMovement;
    if (this.angle === 360) {
      this.angle = 0;

    }
  }


}


// Person.prototype.rotateLeft = function() {
//   this.angle -= 45;
//   if (this.angle === -360) {
//     this.angle = 0;
//   }
// };

Person.prototype.rotateLeft = function() {

  if(this.pressedKeys[3] === true){
    this.angle -= this.angleMovement;
    if (this.angle === -360) {
      this.angle = 0;
    }
  }
};

Person.prototype.shoot = function() {
  if(this.pressedKeys[4] === true){
    var bullet = new Bullet(this.game, this); 
    this.bullets.push(bullet);
  }
};

// Person.prototype.shoot = function() {
//   var bullet = new Bullet(this.game, this); 
//   this.bullets.push(bullet);

// };


Person.prototype.trueUp = function(){
  this.pressedKeys[0] = true;
}
Person.prototype.trueDown = function(){
  this.pressedKeys[1] = true;
}
Person.prototype.trueLeft = function(){
  this.pressedKeys[3] = true;
}
Person.prototype.trueRight = function(){
  this.pressedKeys[2] = true;
}
Person.prototype.trueShoot = function(){
  this.pressedKeys[4] = true;
}
Person.prototype.falseUp = function(){
  this.pressedKeys[0] = false;
}
Person.prototype.falseDown = function(){
  this.pressedKeys[1] = false;
}
Person.prototype.falseLeft = function(){
  this.pressedKeys[3] = false;
}
Person.prototype.falseRight = function(){
  this.pressedKeys[2] = false;
}
Person.prototype.falseShoot = function(){
  this.pressedKeys[4] = false;
}


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