class hero{
    constructor(x,y,width,height){
        var options = {
            restitution:0.8,
            density:0.8
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        push();
        this.width = width;
        this.height = height;
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,width,height);
        pop();
    }
}