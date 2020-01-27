import Ball from './ball'

const canvas = document.querySelector('canvas');
const canvasContext = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var framesPerSecond = 60;

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  }
  
addEventListener('click', (event) => {
    addABall(event.clientX,event.clientY);
})
addEventListener('resize', () => {
  canvas.width = innerWidth
  canvas.height = innerHeight
})
// Animation Loop
let balls;
function animate() {
    setTimeout(animate, 1000/framesPerSecond)
    canvasContext.clearRect(0, 0, canvas.width, canvas.height)
    balls.forEach(ball => {
        ball.animate();
    });
  }
function init() {
    balls = [];
}
  
function addABall(x,y, width, height) {
    balls.push(new Ball(canvas, x,y));
}
  init();
  animate(); 