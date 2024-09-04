class Rect {
    constructor() {
        this.x = random(0, img.width - 20);
        this.y = random(0, img.height - 20);

        this.width = random(this.x, img.width);
        this.height = random(this.y, img.height);
       
        this.theta = random(0, PI);

        this.red = random(255);
        this.green = random(255);
        this.blue = random(255);
        this.alpha = random(255);
    }

    draw(context){
        context.push(); 
        context.fill(this.red, this.green, this.blue, this.alpha);
        context.translate(this.x, this.y);
        context.rotate(this.theta);
        context.rect(0, 0, this.width, this.height);
        context.pop();
    }

    mutate(){
        let r = random();
        let tweak = random(-0.1, 0.1);
         if(r > 0 && r <= 0.1){
            this.x += tweak;
        } else if(r > 0.1 && r <= 0.2){
            this.y += tweak;
        } else if(r > 0.2 && r <= 0.3){
            this.width += tweak;
        } else if(r > 0.3 && r <= 0.4){
            this.height += tweak;
        } else if(r > 0.4 && r <= 0.5){
            this.theta += tweak;
        } else if(r > 0.5 && r <= 0.6){
            this.red += tweak;
        } else if(r > 0.6 && r <= 0.7){
            this.green += tweak;
        } else if(r > 0.7 && r <= 0.8){
            this.blue += tweak;
        } else if(r > 0.8 && r <= 0.9){
            this.alpha += tweak;
        } else {
            //this.x = random(0, img.width - 20);
            //this.y = random(0, img.height - 20);

            //this.width = random(this.x, img.width);
            //this.height = random(this.y, img.height);
       
            //this.theta = random(0, PI);

            //this.red = random(255);
            //this.green = random(255);
            //this.blue = random(255);
            //this.alpha = random(255);
        }

        this.x      = constrain(this.x, 0, img.width);
        this.y      = constrain(this.y, 0, img.height);
        this.width  = constrain(this.width, this.x, img.width);
        this.height = constrain(this.height, this.y, img.height);
        this.red    = constrain(this.red, 0, 255);
        this.green  = constrain(this.green, 0, 255);
        this.blue   = constrain(this.blue, 0, 255);
        this.theta  %= PI;
    }
}