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
    }

    draw(){
        fill(this.red, this.green, this.blue, 255);
        rect(this.x, this.y, this.width, this.height);
    }

    //only return a new rect
    mutate(){
        let mutatedRect = new Rect(this.width,this.height,this.x,this.y,this.red,this.green,this.blue);

        mutatedRect.width  += random(-10, 10);
        mutatedRect.height += random(-10, 10);
        mutatedRect.x      += random(-10, 10);
        mutatedRect.y      += random(-10, 10);
        mutatedRect.red    += random(-10, 10);
        mutatedRect.green  += random(-10, 10);
        mutatedRect.blue   += random(-10, 10);
 
        mutatedRect.x      = constrain(mutatedRect.x, 0, img.width);
        mutatedRect.y      = constrain(mutatedRect.y, 0, img.height);
        mutatedRect.width  = constrain(mutatedRect.width, mutatedRect.x, img.width);
        mutatedRect.height = constrain(mutatedRect.height, mutatedRect.y, img.height);
        mutatedRect.red    = constrain(mutatedRect.red, 0, 255);
        mutatedRect.green  = constrain(mutatedRect.green, 0, 255);
        mutatedRect.blue   = constrain(mutatedRect.blue, 0, 255);

        mutatedRect.width  = floor(this.width);
        mutatedRect.height = floor(this.height);
        mutatedRect.x      = floor(this.x);
        mutatedRect.y      = floor(this.y);
        mutatedRect.red    = floor(this.red);
        mutatedRect.green  = floor(this.green);
        mutatedRect.blue   = floor(this.blue);

        return mutatedRect;
    }
}