
let gui;
let colorPicker;
let settings = {
  grid: 150,
  thickness: 1,
  transparency: 255,
 
  lineColor: 0,

  
 
}



//array of patters and their corresponding functions

let choices = [ //arrays of arrays: mixing data types!! cool stuff of JS
  [horizontalLine, 1], //slash
  [verticalLine, 1], //back slash

  [slash, 1],
  [backSlash, 1],

  [halfSlash, 1],
  [halfBackSlash, 1],

  [emptySquare, 1],
  [randomColorSquare,1],
  [blackSquare, 1],

  [emptyCircle, 1],
  [randomColorCircle, 1],
  [blackCircle, 1],

  [emptyIsoTriangle, 1],
  [randomColorIsoTriangle, 1], 
  [blackIsoTriangle, 1],

  [emptyRectTriangleLeft, 1], 
  [randomColorRectTriangleLeft, 1], 
  [blackRectTriangleLeft, 1],

  [emptyRectTriangleRight, 1], 
  [randomColorRectTriangleRight, 1], 
  [blackRectTriangleRight, 1],

  [emptyIsoTriangleUpsideDown, 1], 
  [randomColorIsoTriangleUpsideDown, 1], 
  [blackIsoTriangleUpsideDown, 1]

];


function setup() {
  createCanvas(windowWidth, windowHeight);

  colorPicker = createColorPicker('white');
  colorPicker.position(20, 20 );   
  background(colorPicker.color());
  gui = new dat.GUI();
 
  gui.add(settings, 'grid', 4, 500);
  gui.add(settings, 'thickness', 1, 40);
//  gui.add(settings, 'backgroundColor', 0, 255);
  gui.add(settings, 'lineColor', 0, 255);
  gui.add(settings, 'transparency', 0, 255); 
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}


function draw() {
     // Set the background-color as
     background(colorPicker.color());
   

  // background(settings.backgroundColor);
  stroke(settings.lineColor, settings.transparency);

  strokeWeight(settings.thickness);

  for (var x = 0; x < width; x += settings.grid) {
    for (var y = 0; y < height; y += settings.grid) {
      push();
      translate(x, y)
      drawRandomPattern()
      pop();
    }
  }
  
  // frameRate(settings.speed);
  noLoop();
}



function drawRandomPattern() {
  //bag with repeated elements
  let raffle = [];
  for (item of choices) {
    let numberOfChoices = item[1];
    for (let j = 0; j < numberOfChoices; j++) {
      raffle.push(item[0]);
    }
  }
  let chosenPattern = random(raffle); //select from the array of patterns
  chosenPattern()
}


//Functions for Shapes from simple to complex

function horizontalLine() {
 
  line(0, settings.grid, settings.grid, settings.grid);;
}

function verticalLine() {
  line(settings.grid, 0, settings.grid, settings.grid);;
}


function slash() {
  line(0, settings.grid, settings.grid, 0);
}

function backSlash() {
  line(0, 0, settings.grid, settings.grid);
}

function halfSlash() {
  line(0, 0, settings.grid / 2, settings.grid / 2);
}

function halfBackSlash() {
  line(0, settings.grid, settings.grid / 2, settings.grid / 2);
 
}

function emptySquare() {
  fill(255, settings.transparency)
  rect(0, 0, settings.grid, settings.grid);
}

function randomColorSquare() {
  fill(random(255), random(255), random(255), settings.transparency);
  rect(0, 0, settings.grid, settings.grid);
}

function blackSquare() {
  fill(0, settings.transparency);
  rect(0, 0, settings.grid, settings.grid);
}

function emptyCircle() {
  fill(255, settings.transparency)
  ellipse(settings.grid / 2, settings.grid / 2, settings.grid, settings.grid);
}

function randomColorCircle() {
  fill(random(255), random(255), random(255), settings.transparency);
  ellipse(settings.grid / 2, settings.grid / 2, settings.grid, settings.grid);
}

function blackCircle() {
  fill(0, settings.transparency)
  ellipse(settings.grid / 2, settings.grid / 2, settings.grid, settings.grid);
}


function emptyIsoTriangle() {
  fill(255, settings.transparency)
  triangle(settings.grid / 2, 0, settings.grid, settings.grid, 0, settings.grid);
}

function randomColorIsoTriangle() {
  fill(random(255), random(255), random(255), settings.transparency);
  triangle(settings.grid / 2, 0, settings.grid, settings.grid, 0, settings.grid);
}

function blackIsoTriangle() {
  fill(0, settings.transparency)
  triangle(settings.grid / 2, 0, settings.grid, settings.grid, 0, settings.grid);
  
}

function emptyRectTriangleLeft() {
  fill(255, settings.transparency)
  triangle(0, 0, 0, settings.grid, settings.grid, settings.grid);
}

function randomColorRectTriangleLeft()  {
  fill(random(255), random(255), random(255), settings.transparency);
  triangle(0, 0, 0, settings.grid, settings.grid, settings.grid);
}

function blackRectTriangleLeft()  {
  fill(0, settings.transparency)
  triangle(0, 0, 0, settings.grid, settings.grid, settings.grid);
}

function emptyRectTriangleRight() {
  fill(255, settings.transparency)
  triangle(settings.grid, 0, settings.grid, settings.grid, 0, settings.grid);
}

function randomColorRectTriangleRight() {
  fill(random(255), random(255), random(255), settings.transparency);
  triangle(settings.grid, 0, settings.grid, settings.grid, 0, settings.grid);
}

function blackRectTriangleRight() {
  fill(0, settings.transparency);
  triangle(settings.grid, 0, settings.grid, settings.grid, 0, settings.grid);
}

function emptyIsoTriangleUpsideDown() {
  fill(255, settings.transparency)
  triangle(settings.grid, 0, settings.grid, settings.grid, 0, settings.grid);
}

function randomColorIsoTriangleUpsideDown()  {
  fill(random(255), random(255), random(255), settings.transparency);
  triangle(0, 0, settings.grid, 0, settings.grid/2, settings.grid);
}

function blackIsoTriangleUpsideDown() {
  fill(0, settings.transparency);
  triangle(0, 0, settings.grid, 0, settings.grid/2, settings.grid);
}



function mouseReleased() {
  draw();
  }

  function keyPressed() {
    // Save frame if letter 'p' is pressed
    if (keyCode === 80) {
      save(`sketch + .png`);
    }
  }

