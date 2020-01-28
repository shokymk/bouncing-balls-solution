import helpers from './helpers';
export default class Ball {
    
    constructor(x, y, radius, canvasMaxHeight, canvasMaxWidth) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.canvasMaxHeight = canvasMaxHeight;
      this.canvasMaxWidth = canvasMaxWidth;
      
      this.dy = helpers.randomIntWithMinMaxAbs(2, 20);
      this.dx = helpers.randomIntWithMinMaxAbs(1, this.dy/2);
      this.gravity = 0.5;
      this.bounce = 0.8;
    }
    calculatePosition() {
      if(this.y + this.radius + this.dy >= this.canvasMaxHeight) {
          this.dy = -this.dy * this.bounce;
          if(Math.abs(this.dy)<1){
            var removeBall = {
              toBeRemoved: true
          }
          return removeBall;
          }
        }
      else {
        this.dy+=this.gravity;
      }
      if(this.x + this.radius >= this.canvasMaxWidth) {
        this.dx = -this.dx;
      }
      if(this.x - this.radius <= 0) {
        this.dx = -this.dx;
      }
      if(this.y - this.radius <=0) {
        //to avoid going out of bounds
        this.y=this.radius;
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      
      var newPosition = {
          toBeRemoved: false,
          x: this.x,
          y: this.y
        }
      
      return newPosition;
    }
  }