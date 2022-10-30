const app = {
  appName: 'Languajes Invaders',
  version: '1.0.0',
  license: undefined,
  author: 'David Daganzo y Gonzalo García',
  description: 'First Ironhack project',
  ctx: undefined,
  enemyArray: [],
  enemyArray2: [],
  enemyImg: ['Angular', 'Bootstrap', 'CSS', 'GIT', 'Github', 'HTML', 'Ironhack', 'Javascript', 'MongoDB', 'NodeJS', 'React'],
  randomEnemy: undefined,
  imageInstance: undefined,
  FPS: 60,
  canvasSize: {
    w: undefined, h: undefined
  },
  developerData: {
    pos: {
      x: window.innerWidth / 2 - 50,
      y: window.innerHeight - 130,
    },
    size: { w: 100, h: 100 },
    image: '../images/Developer.png'
  },



  init() {
    this.setDimensions()
    this.setContext()
    this.createRandomEnemy()
    this.createDeveloper()
    this.createEnemy()
    this.setEventHandlers()
    this.start()
  },

  setDimensions() {
    this.canvasSize = {
      w: window.innerWidth,
      h: window.innerHeight
    }
    document.querySelector('#canvas').setAttribute('height', this.canvasSize.h)
    document.querySelector('#canvas').setAttribute('width', this.canvasSize.w)
  },

  setContext() {
    this.ctx = document.querySelector('#canvas').getContext('2d')

  },

  createDeveloper() {
    this.imageInstance = new Image()
    this.imageInstance.src = this.developerData.image
  },

  setEventHandlers() {
    document.onkeydown = event => {
      switch (event.key) {
        case 'ArrowLeft':
          this.developerData.pos.x -= 10
          break;
        case 'ArrowRight':
          this.developerData.pos.x += 10
          break;
        case 'ArrowUp':
          this.developerData.pos.y -= 10
          break;
        case 'ArrowDown':
          this.developerData.pos.y += 10
          break;
      }
    }
  },

  createRandomEnemy() {
    let randomEnemyIndex = Math.floor(Math.random() * this.enemyImg.length)
    this.randomEnemy = randomEnemyIndex
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.moveAll()
      this.drawAll()
    }, 1000 / this.FPS)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
    // this.enemyArray = this.enemyArray.filter(elm => elm.enemyPos.y >= this.window.innerHeight)
  },

  createEnemy() {
    let EnemyAngular = new Enemy(this.ctx, this.canvasSize, this.enemyImg[0])
    this.enemyArray.push(EnemyAngular);
    let EnemyBootstrap = new Enemy(this.ctx, this.canvasSize, this.enemyImg[1])
    this.enemyArray.push(EnemyBootstrap);
    let EnemyCSS = new Enemy(this.ctx, this.canvasSize, this.enemyImg[2])
    this.enemyArray.push(EnemyCSS);


    let EnemyGIT = new Enemy(this.ctx, this.canvasSize, this.enemyImg[3])
    this.enemyArray2.push(EnemyGIT);
    let EnemyGithub = new Enemy(this.ctx, this.canvasSize, this.enemyImg[4])
    this.enemyArray2.push(EnemyGithub);
    let EnemyHTML = new Enemy(this.ctx, this.canvasSize, this.enemyImg[5])
    this.enemyArray2.push(EnemyHTML);
  },






  drawAll() {

    this.ctx.drawImage(
      this.imageInstance,
      this.developerData.pos.x,
      this.developerData.pos.y,
      this.developerData.size.w,
      this.developerData.size.h
    )


    this.enemyArray[0].draw()
    this.enemyArray[1].draw()
    this.enemyArray[2].draw()

    // if (this.enemyArray[0].enemyPos.y || this.enemyArray[1].enemyPos.y || this.enemyArray[2].enemyPos.y > 200) {
    //   this.enemyArray[3].draw()
    //   this.enemyArray[4].draw()
    //   this.enemyArray[5].draw()
    // }

  },

  moveAll() {
    this.enemyArray.forEach(elm => elm.move())
  },


}
