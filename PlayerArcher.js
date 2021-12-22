class PlayerArcher
{

constructor(a,b,c,d)
{

this.x=a
this.y=b 
this.width=c 
this.height=d 

var options={
    isStatic:true,
    density:0
}

this.body=Bodies.rectangle(a,b,c,d,options)
this.image=loadImage("assets/playerArcher.png")
World.add(world,this.body)
}

display()
{

    var pos=this.body.position
push()
translate(pos.x,pos.y)
image(this.image,0,0,this.width,this.height)
pop()
}

}