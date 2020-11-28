class Block extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    
    this.Visibility=225;
  }
display(){
 var pos=this.body.position;
  if(this.body.speed<3){
    //push()
    //translate(pos.x,pos.y);
    super.display();
    //pop();
  }
   else {
     World.remove(world,this.body);
     push()
     
     this.Visibility=this.Visibility-5;
     tint(255,this.Visibility);
    // rect(this.body.position.x,this.body.position.y,50,50);
     pop()
   }
}
score(){
  if(this.Visibility<0 && this.Visibility>=-105){
    score++
  }
}
};