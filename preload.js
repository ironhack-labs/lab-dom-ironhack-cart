function preload() {
  console.log("preload")
}

function setup() {
  console.log("setup")
  createCanvas(1000, 600)
}

let x = 200
let y = 200
let direction = 2

function draw() {
  // console.log("draw")

  // Draw a rectangle
  // Arguments: x, y, width, height
  // fill("blue")
  // stroke(color(0,0,255))
  // rect(x, y, 100, 100)

  // // Draw a line
  // // Arguments: startX, startY, endx, endY
  // line(0, 300, 1000, 300)

  // // Clear the canvas
  // clear()

  // // Draw a circle
  // // Arguments: x, y, size
  // circle(x, y, 100)

  // x += direction
  // if (x > 1000 - 50 || x < 50) {
  //   console.log("circle hits the wall")
  //   direction = -direction
  // }

  // clear()

  // // p5 provides you with different values like mouse coordinates or the frame count
  // // console.log(mouseX)
  // // console.log(mouseY)
  // console.log(frameCount)
  
  // fill("red")
  // stroke("red")
  // circle(mouseX, mouseY, 100)

  clear()

  if (frameCount % 20 === 0) {
    fill(random(255),random(255),random(255))
    stroke(random(255),random(255),random(255))
    circle(random(width), random(height), random(height))
  }
}