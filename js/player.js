

function Player(game,x, y){
  Person.call(this, game); 
  this.img = new Image();
  this.img.src = "img/player.png";
  this.x = x;
  this.y = y;
 
  
} 

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;




