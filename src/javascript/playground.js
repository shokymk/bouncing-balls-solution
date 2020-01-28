import Ball from './ball'

export default class CanvasPlayground {
    constructor(canvas, ballRadius) {   
        this.canvas = canvas;
        this.canvasContext = canvas.getContext('2d');
        this.ballRadius = ballRadius;
        this.reset(canvas.height, canvas.width);
    }
    reset(height, width) {
        this.balls = [];
        this.canvas.height = height
        this.canvas.width = width
    }
    drawBall(x,y) {
        this.canvasContext.beginPath()
        this.canvasContext.arc(x, y, this.ballRadius, 0, Math.PI * 2, false)
        this.canvasContext.fillStyle = 'black'
        this.canvasContext.fill()
        this.canvasContext.closePath()
      }
    
      animatePlayground() {
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        for (var i = this.balls.length -1; i>=0; i--) {
            var newBallPosition = this.balls[i].calculatePosition(this.canvas.width, this.canvas.height);
            // console.log("new position: " + newBallPosition.x);
            if(newBallPosition.toBeRemoved){
               this.balls.splice(i,1);
            }
            else {
                this.drawBall(newBallPosition.x, newBallPosition.y);
            }
        }
      }
      
     addABall(x,y) {
        this.balls.push(new Ball(x, y, this.ballRadius,this.canvas.height, this.canvas.width));
}
}