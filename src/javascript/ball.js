export default class Ball {
    
    constructor(canvas, x, y) {
      this.x = x
      this.y = y
      this.radius = 3
      this.canvasContext = canvas.getContext('2d');
      this.playgroundHeight = canvas.height;
      this.playgroundWidth = canvas.width
      this.dx = 2
      this.dy = 3
    }
  
    draw() {
      this.canvasContext.beginPath()
      this.canvasContext.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
      this.canvasContext.fillStyle = 'black'
      this.canvasContext.fill()
      this.canvasContext.closePath()
    }
  
    animate() {
      if(this.y + this.radius > this.playgroundHeight) {
          this.dy = -this.dy;
      }
      if(this.x + this.radius > this.playgroundWidth) {
        this.dx = -this.dx;
      }
      if(this.x + this.radius < 0) {
        this.dx = -this.dx;
      }
      if(this.y + this.radius < 0) {
        this.dy = -this.dy;
      }
      this.x += this.dx;
      this.y += this.dy;
      this.draw()
    }
  }