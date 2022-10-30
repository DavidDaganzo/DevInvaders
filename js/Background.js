class Background {

  constructor(ctx, canvasSize) {
    this.ctx = ctx;
    this.canvasSize = canvasSize,
      this.backgroundPosX = 0
    this.backgroundPosY = 0
    this.backgroundSize = { w: this.canvasSize.w, h: this.canvasSize.h },
      this.image = new Image(),
      this.image.src = "../images/background.jpg";


  }


  draw() {
    this.ctx.drawImage(this.image, this.backgroundPosX, this.backgroundPosY, this.backgroundSize.w, this.backgroundSize.h);
  }
}

