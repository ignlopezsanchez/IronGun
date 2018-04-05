function Person(game){
  this.game = game;
  this.x;
  this.y;
  this.vx = 2;
  this.angle;
  this.angleMovement = 3;
  this.bullets = [];
  this.health = 100;
  this.strength = 5;
  this.bullets = [];
  this.pressedKeys = [false, false, false, false];
  this.r = 12;
  this.audioMina = new Audio("sounds/mina.mp3");
  this.audioDisparo = new Audio("sounds/disparo.mp3");  
} 

Person.prototype.draw = function(){ 
  this.drawHealth(); 
  this.centerX = this.x + this.img.width/2;
  this.centerY = this.y + this.img.height/2;
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

Person.prototype.drawHealth = function() {
  this.game.ctx.strokeStyle = "black";
  this.game.ctx.strokeRect(this.x - this.img.width/2, this.y - this.img.height, 50, 10);
  this.game.ctx.fillStyle = "red";
  this.game.ctx.fillRect(this.x - this.img.width/2, this.y - this.img.height, this.health/2, 10);
}
Person.prototype.moveForward = function() {  
  if(this.pressedKeys[0] === true){
    this.lastX = this.x;
    this.lastY = this.y;
    var angleRadians = (Math.PI/180)*(360-this.angle);
    this.x += Math.cos(angleRadians)*this.vx;
    this.y -= Math.sin(angleRadians)*this.vx;    
  }  
}

Person.prototype.moveBackward = function() {
  if(this.pressedKeys[1] === true){
    this.lastX = this.x;
    this.lastY = this.y;  
    var angleRadians = (Math.PI/180)*(360-this.angle);
    this.x -= Math.cos(angleRadians)*this.vx;
    this.y += Math.sin(angleRadians)*this.vx;
  }
}

Person.prototype.rotateRight = function() {
  if(this.pressedKeys[2] === true){
    this.angle += this.angleMovement;
    if (this.angle >= 360) {
      this.angle = 0;
    }
  }
}

Person.prototype.rotateLeft = function() {

  if(this.pressedKeys[3] === true){
    this.angle -= this.angleMovement;
    if (this.angle <= -360) {
      this.angle = 0;
    }
  }
};

Person.prototype.shoot = function() { 
    this.audioDisparo.pause();
    this.bullet = new Bullet(this.game, this); 
    this.bullets.push(this.bullet); 
    this.audioDisparo.play(); 
};

Person.prototype.trueUp = function(){
  this.pressedKeys[0] = true;
}
Person.prototype.trueDown = function(){
  this.pressedKeys[1] = true;
}
Person.prototype.trueRight = function(){
  this.pressedKeys[2] = true;
}
Person.prototype.trueLeft = function(){
  this.pressedKeys[3] = true;
}
Person.prototype.falseUp = function(){
  this.pressedKeys[0] = false;
}
Person.prototype.falseDown = function(){
  this.pressedKeys[1] = false;
}
Person.prototype.falseRight = function(){
  this.pressedKeys[2] = false;
}
Person.prototype.falseLeft = function(){
  this.pressedKeys[3] = false;
}

Person.prototype.moveBullets = function() {
  this.bullets = this.bullets.filter(function(bullet) {
    return bullet.x < this.game.canvas.width && bullet.x > 0 && bullet.y < this.game.canvas.height && bullet.y > 0;
  }.bind(this))
  
  this.bullets.forEach(function(bullet) {
    bullet.move();
  });
}

Person.prototype.checkCollisionPlayerWithObstacles = function(person) {                    //entre player y obstaculo
  for (i=0; i < this.game.background.listObstacles.length; i++){
    if (
      person.x < this.game.background.listObstacles[i][0] + this.game.background.listObstacles[i][2] && 
      person.x + person.img.width/2 + person.r > this.game.background.listObstacles[i][0] && 
      person.y < this.game.background.listObstacles[i][1] + this.game.background.listObstacles[i][3] && 
      person.y + person.img.width/2 + person.r  > this.game.background.listObstacles[i][1]
    ) {
      person.x = person.lastX;
      person.y = person.lastY;   
    return true;
    } 
  }  
}


Person.prototype.checkCollisionPlayersMines = function(player) {                           //entre players y minas
    for (i=0; i < this.game.background.listMines.length; i++){
      if (
        Math.abs(this.game.background.listMines[i].x - player.centerX) < this.game.background.listMines[i].r + player.r &&
        Math.abs(this.game.background.listMines[i].y - player.centerY) < this.game.background.listMines[i].r + player.r
      ) {
        
        this.audioMina.play();
        this.game.background.listMines.splice(i,1);
        player.health -= this.game.background.listMines[i].strength;
        if (player.health <= 0){
          this.game.stop();
        }
        return true;
      } 
    }   
}


