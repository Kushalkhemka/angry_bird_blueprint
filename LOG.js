/*class LOG
{
    constructor(x,y,width,height,angle)
    {
       var option=
       {
           'restitution':0.8,
           'friction':1.0,
            'density':1.0
       }
       this.logobject=Bodies.rectangle(x,y,width,height,option);
       Matter.Body.setAngle(this.logobject,angle);
       World.add(world,this.logobject);
       this.width=width;
       this.height=height;
       
       

       
   }
display()
{
   var angle=this.logobject.angle;
   push();
   
   translate(this.logobject.position.x,this.logobject.position.y);
   
   rotate(angle);
   
   rect(0,0,this.width,this.height);

   pop();
}
}*/

class Log { constructor(x,y,height,angle) 
    { var options={ 'restitution':0.8, 'friction':1.0, 'density':1.0 } 
    this.logObject=Bodies.rectangle(x,y,20,height,options); 
    this.width=20; 
    this.height=height; 
    Matter.Body.setAngle( this.logObject,angle); 
    World.add(world,this.logObject); } 
    display() 
    { push(); 
        translate(this.logObject.position.x,this.logObject.position.y) 
        rotate(this.logObject.angle);
         fill("white"); 
        stroke("orange"); 
        strokeWeight(4); 
        rectMode(CENTER);
         rect(0,0,this.width,this.height); 
         pop(); } }

    

