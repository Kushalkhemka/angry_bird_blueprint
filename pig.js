class pig 
{
    constructor(x,y)
    {
        var option=
        {
            'restitution':0.1,
            'friction':1.0,
            'density':1.0
        }
        this.pigObject=Bodies.rectangle(x,y,50,50,option);
        World.add(world,this.pigObject);
        this.width=50;
        this.height=50;

        

        
    }
display()
 {
    push();
    fill("green");
    var angle=this.pigObject.angle;
    translate(this.pigObject.position.x,this.pigObject.position.y);
    
    rotate(angle);
    
    rect(0,0,this.width,this.height);

    pop();
 }
}
