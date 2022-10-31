class EnemyController {
  enemyMap = [
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
    [2, 2, 2, 3, 3, 3, 3, 2, 2, 2],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  ];
  enemyRows = [];

  constructor(ctx, canvasSize) {
    this.ctx = ctx
    this.canvasSize = canvasSize
    this.createEnemies()
  }

  createEnemies() {
    this.enemyMap.forEach((row, rowIndex) => {
      this.enemyRows[rowIndex] = [];
      row.forEach((enemyNubmer, enemyIndex) => {
        if (enemyNubmer > 0) {
          this.enemyRows[rowIndex].push(
            new Enemy(this.ctx, this.canvasSize, enemyIndex * 55, rowIndex * 55, enemyNubmer)
          );
        }
      });
    });
  }

  draw() {
    this.drawEnemies
  }

  drawEnemies() {
    this.enemyRows.flat().forEach((enemy) => {
      Enemy.draw(this.ctx);
    });
  }
}
