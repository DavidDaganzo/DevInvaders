class Enemy {
  constructor(ctx, canvasSize, PositionX, PositionY, imageNumber) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.position = {
      x: PositionX,
      y: PositionY
    },
      this.size = { w: 50, h: 50 },

      this.image = new Image();
    this.image.src = `../images/Logos/${imageNumber}.jpg`;
  }

  draw() {
    this.ctx.drawImage(
      this.image,
      this.position.x,
      this.position.y,
      this.size.w,
      this.size.h
    )
  }
}



