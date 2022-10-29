class Enemy {
  constructor(context, gameSize, enemyPos, enemyVel, enemySize, enemyPhysics) {
    this.ctx = context
    this.gameSize = gameSize

    this.enemyVel = { x: 10, y: 2 }
    this.enemyPos = { x: 100, y: 100 }
    this.enemySize = { w: 100, h: 100 }
    this.enemyPhysics = { gravity: .4 }
    this.enemyImage = 'images/HTML.jpg'

    this.enemyInstance = undefined


  }

  createEnemy() {
    this.enemyInstance = new Image()
    this.enemyInstance.src = this.enemyImage
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

  moveEnemy() {


  }
}