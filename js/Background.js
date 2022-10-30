class Background {

  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize,
      this.backgroundPos = { x: this.canvasSize.w, y: this.canvasSize.h },
      this.image = new Image(),
      this.image.src = "../images/background.jpg";


  }


  draw() {
    this.ctx.drawImage(this.image, this.backgroundPos.w, this.backgroundPos.y);
  }
}

