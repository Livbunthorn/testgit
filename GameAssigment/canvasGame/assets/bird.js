const dragonSprie = new Image();
dragonSprie.src = "assets/dragon.png";
class Bird {
  constructor() {
    this.x = 150;
    this.y = 200;
    this.vy = 0;
    this.originalWidth = 941;
    this.originalHeight = 680;
    this.width = this.originalWidth / 20;
    this.height = this.originalHeight / 20;
    this.weight = 1;
    this.framex = 0;
  }
  update() {
    let curve = Math.sin(angle) * 3;
    if (this.y > canvas.height - this.height * 3 + curve) {
      this.y = canvas.height - this.height * 3 + curve;
      this.vy = 0;
    } else {
      this.vy += this.weight;
      this.y *= 0.9;
      this.y += this.vy;
    }
    if (this.y < 0 + this.height) {
      this.y = 0 + this.height;
      this.vy = 0;
    }
    if (spacePressed && this.y > this.height * 3) this.flap();
  }
  draw() {
    ctx.fillStyle = "red";
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.drawImage(
      dragonSprie,
      this.framex * this.originalWidth,
      0,
      this.originalWidth,
      this.originalHeight,
      this.x,
      this.y,

      this.width * 1.7,
      this.height * 1.7
    );
  }
  flap() {
    this.vy -= 2;
    if (this.framex >= 3) this.framex = 0;
    else if (frame % 2 === 0) this.framex++;
  }
}

const bird = new Bird();
