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

var img;

//worst score
var worstScore = 0;

//GLOBAL VARIABLES
var rectsUsed = 20;
var popMax = 20;
var mutationRate = 0.3;
var cutoff = 10;

//canvas
var hiddenCtx;
var ctx;

let population;

let highest;
let lowest;
let gen;
let genePoolValue;

function preload() {
    img = loadImage('test1.png');
}

function setup() {

    noStroke();
    rectMode(CENTER);

    createCanvas(img.width, img.height);
    ctx = createGraphics(width, height);
    hiddenCtx = createGraphics(width, height);

    highest = createDiv("waiting...");
    lowest = createDiv("waiting...")
    gen = createDiv("waiting...");
    genePoolValue = createDiv("waiting...");

    ctx.noStroke();
    hiddenCtx.noStroke();

    hiddenCtx.loadPixels();
    worstScore = hiddenCtx.pixels.length * 255

    population = new Population();
    
}

function draw(){
    background(0);
    
    population.calcFitness();
    ctx.clear();
    population.drawWinner();
    image(ctx, 0, 0);
    population.evaluate(0.5);
    population.naturalSelection();
    population.generate();
    //noLoop();
    /*
    calcFitness
    naturalSelection
    generate

    evaluation is optional, it's expected it won't react 100% fitness
    maybe there's an external setting to enable it and have it reach an
    almost perfect percentage.
    */

}