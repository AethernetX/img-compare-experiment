class DNA {
    constructor() {
        this.fitness = 0;
        this.score = 0;
        this.gene = [];

        for(let i = 0; i < rectsUsed; i++){
            this.gene.push(new Rect());
        }
    }

    calcFitness(){
        
        this.score = 0;
        this.fitness = 0;

        hiddenCtx.clear();
        hiddenCtx.background(0);
        hiddenCtx.blendMode(BLEND);
        this.draw(hiddenCtx);
        hiddenCtx.blendMode(DIFFERENCE);
        hiddenCtx.image(img, 0, 0);
        hiddenCtx.loadPixels();
        for(let i = 0; i < hiddenCtx.pixels.length; i++){
            this.score += hiddenCtx.pixels[i];
        }

        this.fitness = 1 - (this.score / worstScore);
        //this.fitness = pow(this.fitness, 2);

    }

    crossover(other){
        //try the split half method, else try the coinflip method
        let child = new DNA();
        child.gene = this.gene;

        for(let i = floor(this.gene.length/2); i < this.gene.length; i++){
            child.gene[i] = other.gene[i];
        }

        return child;
    }

    mutate(){
        for (let i = 0; i < this.gene.length; i++) {
            if(random() < mutationRate){
                this.gene[i].mutate();
            } 
        }
    }

    draw(context){
        for(let i = 0; i < this.gene.length; i++){
            this.gene[i].draw(context);
        }
    }
}