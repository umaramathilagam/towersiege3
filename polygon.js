class Polygon {
    constructor(x,y,r){
var option={
   //isStatic:false,
    friction:0.1,
    restitution:0,
    density:1.2
}

this.body=Bodies.circle(50,200,20);
this.x=x;
this.y=y;
this.r=r/2
this.image=loadImage("hexagon.png");


World.add(world,this.body);
    }
    display(){
var polygonpos=this.body.position;
push();
translate(polygonpos.x,polygonpos.y);
imageMode(CENTER);
image(this.image,0,0,this.r,this.r);
pop();
    }
}