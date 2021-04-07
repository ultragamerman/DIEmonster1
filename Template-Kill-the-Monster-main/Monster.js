class Monster{
    constructor(x,y,width,height){
        var options = {
            restitution:0.9,
            density:1,
            friction:0.7
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.image = loadImage("monster.jpg");
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y);
        pop();
    }
}