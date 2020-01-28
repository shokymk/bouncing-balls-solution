import CanvasPlayground from './playground';

const canvas = document.querySelector('canvas');
const ballRadius = 3;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const playground = new CanvasPlayground(canvas, ballRadius);

var framesPerSecond = 60;

addEventListener('click', (event) => {
    playground.addABall(event.clientX,event.clientY);
})
addEventListener('resize', () => {
    playground.reset(window.innerHeight, window.innerWidth);
})
// Animation loop
function animate() {
    setTimeout(animate, 1000/framesPerSecond)
    playground.animatePlayground();
  }
animate(); 