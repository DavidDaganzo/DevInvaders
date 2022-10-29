class Enemy {
  constructor(ctx, canvasSize) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    // this.enemyVel = { x: 5, y: 1 }
    this.enemyPos = { x: this.canvasSize.w / 2, y: this.canvasSize.h / 2 }
    this.enemySize = { w: 100, h: 100 }
    this.enemyInstance = new Image();
    this.enemyInstance.src = '../images/Logos/HTML.jpg';
    // this.enemyInstance.src = `images/Logos/${imageName}.jpg`;
  }

  draw() {
    this.ctx.drawImage(
      this.enemyInstance,
      this.enemyPos.x,
      this.enemyPos.y,
      this.enemySize.w,
      this.enemySize.h
    )
  }



}