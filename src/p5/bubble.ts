import p5Type from "p5";

class Bubble {
  x: number;
  y: number;
  r: number;
  xSpeed: number;
  ySpeed: number;
  width: number;
  height: number;
  randomColor: number;
  constructor(p5: p5Type, width, height) {
    this.width = width;
    this.height = height;
    this.x = p5.random(0, p5.width);
    this.y = p5.random(0, p5.height);
    this.r = p5.random(20, 60);
    this.xSpeed = p5.random(-2, 2);
    this.ySpeed = p5.random(-1, 1.5);
    this.randomColor = p5.random(0, 255);
  }
  display(p5: p5Type): void {
    p5.fill(this.randomColor, 0, this.randomColor);
    p5.noStroke();
    p5.ellipse(this.x, this.y, this.r, this.r);
  }
  move(p5: p5Type): void {
    if (this.x < 0 || this.x > this.width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > this.height) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }
}

export default Bubble;
