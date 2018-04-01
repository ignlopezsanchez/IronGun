var SPACEBAR_KEY = 32;
var LEFT_KEY = 65;
var UP_KEY = 87;
var RIGHT_KEY = 68;
var DOWN_KEY = 83;

function Player(game){
  this.game = game;
  this.x = 50;
  this.y = 50;
  this.img = new Image();
  this.img.src = "img/player.png";
  this.vx = 5;
  this.rotatedRight = false;
  this.angle = 0;
  this.setListerners();
  

  this.bullets
} 

Player.prototype.draw = function(){
  //this.game.ctx.save();
  var angleRadians = (Math.PI/180)*this.angle;
  this.game.ctx.save(); 
  this.game.ctx.translate(this.x + this.img.width/2, this.y + this.img.height/2);
  this.game.ctx.rotate(this.angle);
  this.game.ctx.drawImage(this.img, -this.img.width/2, -this.img.height/2);
  this.game.ctx.restore();
 
  // this.game.ctx.translate(this.game.canvas.width/2, this.game.canvas.height/2);
  // this.game.ctx.rotate((Math.PI/180)*45);
  // this.game.ctx.drawImage(this.img, this.x + 200, this.y);
  //this.game.ctx.restore();
  //this.game.ctx.drawImage(this.img, this.x + 200, this.y);

}

Player.prototype.setListerners = function(){
  document.onkeydown = function(event) {
    switch (event.keyCode) {
      case RIGHT_KEY:
        this.rotateRight();
        break;
      case LEFT_KEY:
      this.rotateLeft();        
        break;
      case UP_KEY:
        this.moveForward();
        break;    
      case DOWN_KEY:
        this.moveBackward();
        
        break;
      case SPACEBAR_KEY:
        this.shoot();
        
        break;    
      
    }
  }.bind(this)

};

Player.prototype.moveForward = function() {
  this.x += this.vx

};
Player.prototype.moveBackward = function() {
  this.x -= this.vx

};
Player.prototype.rotateRight = function() {
  this.angle += 20;
};
Player.prototype.rotateLeft = function() {
  this.angle -= 20;
};
Player.prototype.shoot = function() {


};

