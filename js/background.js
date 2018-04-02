function Background(game){
  this.game = game;
  this.x = 0;
  this.y = 0;
  this.img = new Image();
  this.img.src = "img/background.png";

  this.listObstacles = [
    [100, 225, 150, 150],        //[x, y, width, height] de cada obstaculo
    [500, 225, 150, 150],
    [25, 75, 225, 25],
    [250, 50, 25, 75],
    [475, 25, 25, 50],
    [25, 150, 250, 25],
    [400, 150, 375, 25],
    [475, 125, 25, 25],
    [75, 425, 75, 25],
    [75, 450, 25, 175],
    [75, 625, 75, 25],
    [225, 425, 75, 25],
    [250, 450, 25, 175],
    [225, 625, 75, 25],
    [450, 425, 75, 25],
    [500, 450, 25, 175],
    [450, 625, 75, 25],
    [650, 425, 75, 25],
    [700, 450, 25, 175],
    [650, 625, 75, 25],
    [0, 0, 800, 25],
    [0, 25, 25, 750],
    [0, 775, 800, 25],
    [775, 25, 25, 750]
  ]
this.collision = false;
} 

Background.prototype.draw = function(){
  this.game.ctx.drawImage(this.img, this.x, this.y);
}
Background.prototype.checkCollision = function() {
  var player = this.game.player;
  for (i=0; i < this.listObstacles.length; i++){
    if (
      player.x < this.listObstacles[i][0] + this.listObstacles[i][2] && 
      player.x + player.img.width > this.listObstacles[i][0] && 
      player.y < this.listObstacles[i][1] + this.listObstacles[i][3] && 
      player.y + player.img.width > this.listObstacles[i][1]
      
    ) {
    return true;

    } 
  } 
}

// Background.prototype.checkCollision = function() {
//   var player = this.game.player;
//   for (i=0; i < this.listObstacles.length; i++){
//     var angleRadians = (Math.PI/180)*(360-this.game.player.angle);
//     var x = this.x + Math.cos(angleRadians)*this.vx;
//     var y = this.y - Math.sin(angleRadians)*this.vx;
//     if (
//       x < this.listObstacles[i][0] + this.listObstacles[i][2] && 
//       x + player.img.width > this.listObstacles[i][0] && 
//       y < this.listObstacles[i][1] + this.listObstacles[i][3] && 
//       y + player.img.width > this.listObstacles[i][1]
      

    
//     ) {
//     return true;

//     } 
//   } 
// }