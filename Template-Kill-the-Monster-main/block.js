class block{
    constructor(x,y,width,height){
        var options = {
            restitution:0.9,
            density:0.7,
            friction:0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
            this.width = width;
            this.height =  height;
            push();
            translate(this.body.position.x,this.body.position.y);
            rotate(this.body.angle);
            strokeWeight(4);
            stroke("black");
            fill("red");
            rectMode(CENTER);
            rect(this.body.position.x,this.body.position.y,width,height);
            pop();
    }
}