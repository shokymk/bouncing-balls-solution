const canvas = document.querySelector('canvas')
const game = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

addEventListener('click', (event) => {
    drawABall(event.clientX,event.clientY);
})


function drawABall(x,y) {
  game.beginPath();
  game.arc(x, y, 50, 0, 2 * Math.PI);
  game.stroke();
}