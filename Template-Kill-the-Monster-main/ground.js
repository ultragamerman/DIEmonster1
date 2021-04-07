class ground{
    constructor(x,y,width,height){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
    }
    display(){
        this.width = width;
        this.height = height;
        push();
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,width,height);
        pop();
    }
}