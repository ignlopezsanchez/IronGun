
function Player(game,x, y, urlPlayer){
  Person.call(this, game); 
  this.img = new Image();
  this.img.src = urlPlayer;
  this.x = x;
  this.y = y;  
} 

Player.prototype = Object.create(Person.prototype);
Player.prototype.constructor = Player;




