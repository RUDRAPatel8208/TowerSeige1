class OrangeBox{

    constructor(x,y,width,height)
    {
        
        var options={
            'restitution':0.5,
            'friction':0.5,
            'density' :1.0,
            'isStatic':false
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
  
        this.width=width;
        this.height=height
        World.add(world,this.body);
  
  
    }
  
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
  
        
        push();
        translate(pos.x,pos.y);
        rotate (angle);
        stroke(0)
        strokeWeight(1)
        fill(252,110,81);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
  
  
  
  
  };
  