let img;

function preload() {
    img = loadImage('image.jpg');
}

function setup() {
    createCanvas(img.width, img.height);

    pixelDensity(1);

    noStroke();

    fill(255, 255, 255);
    rect(0, 0, img.width, img.height);

    fill(254, 205, 255);
    rect(0, img.height/2, img.width, img.height/2);
    
    // Load the pixels array.
    loadPixels();
    img.loadPixels();

    // Set the pixel(s) at the center of the canvas black.
    
    imgScore = 0;

    for(let i = 0; i < width; i++){
        for(let j = 0; j < height; j++){

            //images
            let Ur = img.pixels[(i + j * img.width) * 4];
            let Ug = img.pixels[(i + j * img.width) * 4 + 1];
            let Ub = img.pixels[(i + j * img.width) * 4 + 2];

            //canvas
            let Vr = pixels[(i + j * width) * 4];
            let Vg = pixels[(i + j * width) * 4 + 1];
            let Vb = pixels[(i + j * width) * 4 + 2];

            let r = Vr - Ur;
            let g = Vg - Ug;
            let b = Vb - Ub;

            imgScore += r + g + b;

            pixels[(i + j * width) * 4] = r;
            pixels[(i + j * width) * 4 + 1] = g;
            pixels[(i + j * width) * 4 + 2] = b;
            pixels[(i + j * width) * 4 + 3] = 255;
        }
    }

    console.log(imgScore);

    // Update the canvas.
    updatePixels();
    img.updatePixels();

}
function draw() {
    //sky blue background
    //background(135, 206, 235);



    //image(img, 0, 0);
}