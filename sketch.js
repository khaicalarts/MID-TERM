let colors = ["#FF6B6B", "#4ECDC4", "#FFE66D", "#1A535C", "#FF9F1C"];
let numCircles = 100;

function setup() {
  createCanvas(400, 400);
  noStroke();
  noLoop(); 
}

function draw() {
  background(30);
  for (let i = 0; i < numCircles; i++) {
    drawCircle(); 
  }
}

// Function to draw a single circle
function drawCircle() {
  // Random position
  let x = random(width);
  let y = random(height);
  
  // Random size and color
  let size = random(20, 80);
  let colorIndex = floor(random(colors.length));
  let color = colors[colorIndex];
  
  
  if (size > 50) {
    fill(color + "55"); 
  } else {
    fill(color);
  }

  ellipse(x, y, size);
}