class Enemy {
  constructor(context, gameSize) {
    this.ctx = context
    this.canvasSize = gameSize
    this.enemyVel = { x: 5, y: 1 }
    this.enemyPos = { x: 100, y: 100 }
    this.enemySize = { w: 100, h: 100 }
    this.enemyInstance = new Image();
    this.enemyInstance.src = '../images/Logos/HTML.jpg';
    // this.enemyInstance.src = `images/Logos/${imageName}.jpg`;
  }

  drawEnemy() {
    this.ctx.drawImage(
      this.enemyInstance,
      this.enemyPos.x,
      this.enemyPos.y,
      this.enemySize.w,
      this.enemySize.h
    )
  }



}