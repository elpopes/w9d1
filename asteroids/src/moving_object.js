console.log("moving_objects is working");
function MovingObject() {

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.radius = options.radius;
    this.color = options.color;
  }
}

const mo = new MovingObject({
  pos: [30, 30],
  vel: [10, 10],
  radius: 5,
  color: "#00FF00",
});
  
}

MovingObject.prototype.draw = function(ctx){
  
  ctx.fillStyle = red; 

}

module.exports = MovingObject;

