class Bob {
  constructor(x,y,radius) {
    var options = {
        isStatic: false,
        restitution:1,
         
        friction:0,
        density:0.8

    }
    this.x=x;
    this.y=y;
    this.radius=radius;
    
    this.body = Bodies.circle(this.x,this.y,this.radius,options);
    

    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle=this.body.angle
   push();
   translate(pos.x,pos.y);
   rotate(angle)
    fill("pink");
    ellipseMode(RADIUS);
ellipse(0,0,20,20);
pop();
  }
};