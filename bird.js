class Bird{
    constructor(x, y) {
        var options = {
            'restitution':0.1,
            'friction':0.8,
            'density':1.2
        }
        this.body = Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){
        var angle=this.body.angle;
        var pos =this.body.position;
        pos.x=mouseX;
        pos.y=mouseY;
        push();
        angleMode(RADIANS);
        translate(pos.x,pos.y);
        rotate(angle);
        
        rectMode(CENTER);
        fill("yellow");
        rect(0, 0, this.width, this.height);
        pop();
      }
    }
