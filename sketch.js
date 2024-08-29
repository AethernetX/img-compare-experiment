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

    background(0);
    
    blendMode(DIFFERENCE);
    noStroke();

    
    //image(img, 25, 25, 50, 50, 25, 25, 50, 50);

    image(img, 0, 0);

    let score = 0;

    loadPixels();
    for(let i = 0; i < width; i++){
        for(let j = 0; j < height; j++){
            let r = pixels[(i + j * width) * 4];
            let g = pixels[(i + j * width) * 4 + 1];
            let b = pixels[(i + j * width) * 4 + 2];

            score += r + g + b;
        }
    }
    
    updatePixels();

    console.log(score);
}



//function setup() {
    //createCanvas(img.width, img.height, WEBGL);

    //pixelDensity(1);

    //noStroke();

    //for(let m = 0; m < 100; m++){
    
    

    //let newRect = [];
    //for(let i = 0; i < 100; i++){
        //let x = random(0, width);
        //let y = random(0, height);
        //let w = random(x, width);
        //let h = random(y, height);

        //x = floor(x);
        //y = floor(y);
        //w = floor(w);
        //h = floor(h);

        ////get colour average said area
        //let avg = getColourAvg(x,y,w,h);

        //newRect.push(new Rect(w,h,x,y,avg[0],avg[1],avg[2]));
    //}

    //img.loadPixels();

    ////iterating same rect
    //for(let h = 0; h < 100; h++){
 
        //for(let i = 0; i < newRect.length; i++){
        
            //newRect[i].draw();

            //// Load the pixels array.
            //loadPixels();
    
            //imgScore = 0;

            //for(let i = 0; i < width; i++){
                //for(let j = 0; j < height; j++){

                    ////images
                    //let Ur = img.pixels[(i + j * img.width) * 4];
                    //let Ug = img.pixels[(i + j * img.width) * 4 + 1];
                    //let Ub = img.pixels[(i + j * img.width) * 4 + 2];

                    ////canvas
                    //let Vr = pixels[(i + j * width) * 4];
                    //let Vg = pixels[(i + j * width) * 4 + 1];
                    //let Vb = pixels[(i + j * width) * 4 + 2];

                    //let r = Vr - Ur;
                    //let g = Vg - Ug;
                    //let b = Vb - Ub;

                    //imgScore += r + g + b;

                    ////pixels[(i + j * width) * 4] = r;
                    ////pixels[(i + j * width) * 4 + 1] = g;
                    ////pixels[(i + j * width) * 4 + 2] = b;
                    ////pixels[(i + j * width) * 4 + 3] = 255;
                //}
            //}

            //newRect[i].score = imgScore;
            //clear();
        //}

        //newRect.sort((a,b) => {
            //if(a > b){
                //return 1;
            //} else if (a == b) {
                //return 0;
            //}
        
            //return -1;
        //});

        //newRect.splice(10, newRect.length - 10);

        //for(let i = 0; i < 10; i++){
            //for(let j = 0; j < 10; j++){
                //newRect.push(newRect[i].mutate());
            //}
        //}

    //}

        //finalArray.push(newRect[0]);

    //}

    //for(let i = 0; i < finalArray.length; i++){
        //console.log(finalArray[i].score);
    //}

    //// Update the canvas.
    //updatePixels();
    //img.updatePixels();
//}




function draw() {
    //sky blue background
    //background(135, 206, 235);


    //image(img, 0, 0);
}