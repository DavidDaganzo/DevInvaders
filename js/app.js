const app = {
  appName: 'Languajes Invaders',
  version: '1.0.0',
  license: undefined,
  author: 'David Daganzo y Gonzalo García',
  description: 'First Ironhack project',
  ctx: undefined,
  imageInstance: undefined,
  FPS: 60,
  canvasSize: {
    w: undefined, h: undefined
  },
  developerData: {
    pos: {
      x: 300,
      y: 300,
    },
    size: { w: 100, h: 100 },
    image: ':/images/Developer.png'
  },



  init() {
    this.setDimensions()
    this.setContext()
    this.createDeveloper()
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

  createDeveloper() {
    this.imageInstance = new Image()
    this.imageInstance.src = this.developerData.image
  },

  start() {
    setInterval(() => {
      this.clearAll()
      this.drawAll()
    }, 30)
  },

  clearAll() {
    this.ctx.clearRect(0, 0, this.canvasSize.w, this.canvasSize.h)
  },
  drawAll() {
    this.ctx.drawImage(
      this.imageInstance,
      this.developerData.pos.x,
      this.developerData.pos.y,
      this.developerData.size.w,
      this.developerData.size.h
    )
  },

}