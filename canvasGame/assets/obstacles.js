const obstacleArray = [];

class Obstacle {
  constructor() {
    this.top = Math.random() * (canvas.height / 3) + 20;
    this.bottom = Math.random() * (canvas.height / 3) + 20;
    this.x = canvas.width;
    this.width = 20;
    this.color = "hsl(" + hue + ",100%,50%,1";
    this.count = false;
  }

  draw() {
    ctx.fillstyle = this.color;
    ctx.fillRect(this.x, 0, this.width, this.top);
    ctx.fillRect(this.x, canvas.height - this.bottom, this.width, this.bottom);
  }

  update() {
    this.x -= gamespeed;
    if (!this.count && this.x < bird.x) {
      score++;
      this.count = true;
    }
    this.draw();
  }
}
function handleObstacles() {
  if (frame % 150 === 0) {
    obstacleArray.unshift(new Obstacle());
  }
  for (let i = 0; i < obstacleArray.length; i++) {
    obstacleArray[i].update();
  }
  if (obstacleArray.length > 20) {
    obstacleArray.pop(obstacleArray[0]);
  }
}
