import Ball from './ball'

export default class CanvasPlayground {
    constructor(canvas, ballRadius) {   
        this.canvas = canvas;
        this.canvasContext = canvas.getContext('2d');
        this.ballRadius = ballRadius;
        this.reset(canvas.height, canvas.width);
    }
    // reset game on window load or change
    reset(height, width) {
        this.balls = [];
        this.canvas.height = height
        this.canvas.width = width
    }
    // draw ball
    drawBall(x,y) {
        this.canvasContext.beginPath()
        this.canvasContext.arc(x, y, this.ballRadius, 0, Math.PI * 2, false)
        this.canvasContext.fillStyle = 'black'
        this.canvasContext.fill()
        this.canvasContext.closePath()
      }
      // draw balls 
      animatePlayground() {
        //clear canvas
        this.canvasContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // iterate balls backwards to remove balls that stopped bouncing 
        for (var i = this.balls.length -1; i>=0; i--) {
            var newBallPosition = this.balls[i].calculatePosition();
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