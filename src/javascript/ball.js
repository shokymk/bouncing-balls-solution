import helpers from './helpers';
export default class Ball {
    
    constructor(x, y, radius, canvasMaxHeight, canvasMaxWidth) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.canvasMaxHeight = canvasMaxHeight;
      this.maxWidth = canvasMaxWidth;
      this.dx = helpers.randomIntFromRange(4, 10);
      this.dy = helpers.randomIntFromRange(4, 40);
      this.strength = 52;
      this.calculateMaxHeight();
    }
    calculateMaxHeight() {
        console.log("y  "+ this.y + "calculated  " + this.strength * Math.abs(this.dy))
      if(this.strength * Math.abs(this.dy) < this.canvasMaxHeight) {
         this.maxHeight = this.strength * Math.abs(this.dy);
      }
      else {
          this.maxHeight = this.canvasMaxHeight;
      }
      console.log("starting maxheight" + this.maxHeight + "  dy: "+ this.dy + " strength" + this.strength);
    }
    calculatePosition(maxWidth, maxHeight) {
      if(this.y + this.radius >= this.canvasMaxHeight) {
          this.dy = -this.dy;
          this.strength-=4;
          if (this.strength == 0) {
              var removeBall = {
                  toBeRemoved: true
              }
              return removeBall;
          }
          this.calculateMaxHeight();
        }
      if(this.x + this.radius >= this.maxWidth) {
        this.dx = -this.dx;
      }
      if(this.x - this.radius <= 0) {
        this.dx = -this.dx;
        // console.log("maxheight" + this.maxHeight)
      }
      if(this.y - this.radius <= this.canvasMaxHeight-this.maxHeight) {
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