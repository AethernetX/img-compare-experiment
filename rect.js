class Rect {
    //todo: implement rotation
    constructor(width, height, x, y, red, green, blue) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.red = red;
        this.green = green;
        this.blue = blue;
        this.score = 0;

        this.gene = [width, height, x, y, red, green, blue];
    }

    useGene(gene){
        if(gene == undefined){ throw new console.error("undefined gene"); }

        if(gene.length < 7) {
            throw new console.error("faulty gene: gene length is too short / long"); 
        }

        this.width  = gene[0]; 
        this.height = gene[1]; 
        this.x      = gene[2]; 
        this.y      = gene[3]; 
        this.red    = gene[4]; 
        this.green  = gene[5]; 
        this.blue   = gene[6]; 

        this.gene = gene;
    }

    draw(){
        fill(this.red, this.green, this.blue, 255);
        rect(this.x, this.y, this.width, this.height);
    }

    //the gene sharing rate is 50:50
    static crossover(rect1, rect2){
        let childGene = [];
        for(let i = 0; i < 7; i++){
            if(random() > 0.5){
                childGene.push(rect1.gene[i]);
            } else {
                childGene.push(rect2.gene[i]);
            }
        }

        return childGene;
    }

    mutate(chance){
        let mutGene = this.gene;

        for(let i = 0; i < mutGene.length; i++){
            if(random() < chance){
                mutGene[i] += random(-5, 5);
            }
        }

        this.width  = mutGene[0]; 
        this.height = mutGene[1]; 
        this.x      = mutGene[2]; 
        this.y      = mutGene[3]; 
        this.red    = mutGene[4]; 
        this.green  = mutGene[5]; 
        this.blue   = mutGene[6]; 

        this.x      = constrain(mutGene.x, 0, img.width);
        this.y      = constrain(mutGene.y, 0, img.height);
        this.width  = constrain(mutGene.width, mutGene.x, img.width);
        this.height = constrain(mutGene.height, mutGene.y, img.height);
        this.red    = constrain(mutGene.red, 0, 255);
        this.green  = constrain(mutGene.green, 0, 255);
        this.blue   = constrain(mutGene.blue, 0, 255);

        this.width  = floor(this.width);
        this.height = floor(this.height);
        this.x      = floor(this.x);
        this.y      = floor(this.y);
        this.red    = floor(this.red);
        this.green  = floor(this.green);
        this.blue   = floor(this.blue);
    }
}