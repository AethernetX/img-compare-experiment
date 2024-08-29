let img;
let finalArray = [];

function preload() {
    img = loadImage('image.jpg');
}

function getColourAvg(x, y, w, h){

    img.loadPixels();
    
    let r = 0;
    let g = 0;
    let b = 0;

    let count = 0;

    for(let i = x; i < w; i++){
        for(let j = y; j < h; j++){
            r += img.pixels[(i + j * img.width) * 4];
            g += img.pixels[(i + j * img.width) * 4 + 1];
            b += img.pixels[(i + j * img.width) * 4 + 2];
 
            count++;
        }
    }

    return [r/count, g/count, b/count];
}

function setup() {
    createCanvas(img.width, img.height);

    pixelDensity(1);

    noStroke();

    let newRect = [];

    for(let i = 0; i < 20; i++){
        let x = random(0, width);
        let y = random(0, height);
        let w = random(x, width);
        let h = random(y, height);

        x = floor(x);
        y = floor(y);
        w = floor(w);
        h = floor(h);

        //get colour average said area
        let avg = getColourAvg(x,y,w,h);

        newRect.push(new Rect(w,h,x,y,avg[0],avg[1],avg[2]));
    }

    for(let i = 0; i < newRect.length; i++){
        newRect[i].draw();
    }

    //add new rectangles
    //create generations of the rectangle
    //sort the generations
    //delete all the losers
    //mutate the winners
    //redo like 10 times
    
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

            //pixels[(i + j * width) * 4] = r;
            //pixels[(i + j * width) * 4 + 1] = g;
            //pixels[(i + j * width) * 4 + 2] = b;
            //pixels[(i + j * width) * 4 + 3] = 255;
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