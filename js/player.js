
function Player(game,x, y, urlPlayer){
  Person.call(this, game); 
  this.img = new Image();
  this.img.src = urlPlayer;
  this.x = x;
  this.y = y;  
  this.lastX = this.x;
  this.lastY = this.y;
} 

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;




