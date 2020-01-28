import helpers from './helpers';
export default class Ball {
    
    constructor(x, y, radius, canvasMaxHeight, canvasMaxWidth) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.canvasMaxHeight = canvasMaxHeight;
      this.canvasMaxWidth = canvasMaxWidth;
      // speed of moving vertically
      this.dy = helpers.randomIntWithMinMaxAbs(2, 20);
      // speed of moving horizontally always smaller than vertically to avoid too much horizontal movement
      this.dx = helpers.randomIntWithMinMaxAbs(1, this.dy/2);
      this.gravity = 0.5;
      this.bounce = 0.8;
    }
    // calculate next position of ball
    calculatePosition() {
      // gravity implementation 
      if(this.y + this.radius + this.dy >= this.canvasMaxHeight) {
          this.dy = -this.dy * this.bounce;
          //remove ball if bouncing speed too small
          if(Math.abs(this.dy)<1){
            var removeBall = {
              toBeRemoved: true
          }
          return removeBall;
          }
        }
        // increase speed because of gravity
      else {
        this.dy+=this.gravity;
      }
      // bouncing off the halls
      if(this.x + this.radius >= this.canvasMaxWidth) {
        this.dx = -this.dx;
      }
      if(this.x - this.radius <= 0) {
        this.dx = -this.dx;
      }
      //bouncing off top
      if(this.y - this.radius <=0) {
        //to avoid going out of bounds
        this.y=this.radius;
        this.dy = -this.dy;
      }
      //move
      this.x += this.dx;
      this.y += this.dy;
      //return new position
      var newPosition = {
          toBeRemoved: false,
          x: this.x,
          y: this.y
        }
      
      return newPosition;
    }
  }