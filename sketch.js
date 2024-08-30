/*

Steps to do genetic algorithm

1) Create a population of rectangles

2) Calculate the fitness of the rectangles

3) Reproduce / Selection

    a. pick 2 parents
    b. make a new rectangle
        i - crossover, in which theres a chance the rectangle inherits features from one parent
        ii - mutation, in which there's a chance one value is slightly modified

4) replace the old population with the new population and repeat step 2

5) optionally, start a new population, which works ontop of the previous champion rectangle


*/

const mutation = 0.1;

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

    //iterating all rectangles
    for(let g = 0; g < 100; g++){

        //step 1
        let population = [];

        //generate population
        for(let i = 0; i < 50; i++){
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

            population.push(new Rect(w,h,x,y,avg[0],avg[1],avg[2]));
        }

        //iterating 1 rectangle
        for(let h = 0; h < 100; h++) {

            //step 2
            for(let i = 0; i < population.length; i++){

                let score = 0;

                image(img, 0, 0);

                for(let j = 0; j < finalArray.length; j++){
                    finalArray[j].draw();
                }

                population[i].draw();

                loadPixels();

                for(let x = 0; x < width; x++){
                    for(let y = 0; y < height; y++){
                        let r = pixels[(x + y * width) * 4];
                        let g = pixels[(x + y * width) * 4 + 1];
                        let b = pixels[(x + y * width) * 4 + 2];

                        score += r + g + b;
                    }
                }

                updatePixels();
        
                population[i].score = score;
    
                clear();
            }

            // lower the score the better!
            population.sort((a,b) => {
                if(a.score > b.score){
                    return 1;
                } else if (a.score == b.score) {
                    return 0;
                } else {
                    return -1;
                }
            });

            //step 3

            //since I cba to properly choose parents, I'll just randomly pick pairs
            //this might end up causing some pitfalls along the way 
            //if so, we can come back to this and improve the selection
    
            population.splice(5,population.length - 5);

            for(let i = 0; i < 45; i++){
                let newRect = new Rect(0,0,0,0,0,0,0);

                let x = floor(random(0,5));
                let y = floor(random(0,5));

                if(x == y) {
                    y++;
                    y %= 4;
                }

                newRect.useGene(Rect.crossover(population[x], population[y]));
                newRect.mutate(mutation);
                population.push(newRect);
            }

            console.log("rect: " + g + " gen: " +  h);

        } 

        finalArray.push(population[0]);
    }

    blendMode(BLEND);

    for(let i = 0; i < finalArray.length; i++){
        finalArray[i].draw();
    }

    //for(let i = 0; i < finalArray.length; i++){
        //finalArray[i].draw();
    //}
    
}