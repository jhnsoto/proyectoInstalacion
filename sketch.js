function setup() {
  createCanvas(windowWidth, windowHeight);
  pixelDensity(1);
}

function draw() {
  loadPixels();
  background(220);
  for(var y = 0; y<height;y++){
    for(var x = 0; x<width;x++){
      var index = (x+ y*width)*4;
      pixels[index] = 100;
      pixels[index+1] = 200 +random(55);
      pixels[index+2] = 100;
      pixels[index+3] = 255;
    }
  }
  updatePixels();
}
