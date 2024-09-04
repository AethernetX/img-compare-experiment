class Population {
    constructor() {
        this.population = [];
        this.generation = 0;
        this.genePool = [];

        for(let i = 0; i < popMax; i++){
            this.population.push(new DNA());
        }
    }

    calcFitness(){
        for(let i = 0; i < this.population.length; i++){
            this.population[i].calcFitness();
        }

        this.population.sort((a, b) => {
            if(a.fitness > b.fitness){
                    return -1;
                } else if (a.fitness == b.fitness) {
                    return 0;
                } else {
                    return 1;
            }
        })


        highest.html("highest: " + this.population[0].fitness)
        lowest.html("lowest : " + this.population[this.population.length - 1].fitness);
    }
    
    drawWinner(){
        this.population[0].draw(ctx);
    }

    naturalSelection(){
        this.genePool = [];

        for(let i = 0; i < this.population.length - cutoff; i++){
            let num = this.population[i].fitness * 100;
            num = floor(num);
            for(let j = 0; j < num; j++){
                this.genePool.push(this.population[i]);
            }
        }

        genePoolValue.html("genepool size: " + this.genePool.length);
    }

    generate(){
        for(let i = 0; i < this.population.length; i++){
            let a = this.genePool[floor(random(this.genePool.length))];
            let b = this.genePool[floor(random(this.genePool.length))];
            let child = a.crossover(b);
            child.mutate();
            this.population[i] = child;
        }
        this.generation++;
        gen.html("generation: " + this.generation);
    }

    evaluate(goal){
        if(this.population[0].fitness > goal){
            noLoop();
        }
    }
}