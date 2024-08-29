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
}