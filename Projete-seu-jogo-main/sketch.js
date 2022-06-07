var bg,bgImg,deyv,havertz
var r,z
var zombieGroup;
var t
var bola
var b
var gol
var go
var plm,chs,bor
function preload(){
  
  z = loadSound("../assets/goll.mp3")
  bgImg = loadImage("../assets/coca2L.jpg")
  deyv  = loadImage("../assets/R.png")
  havertz  = loadImage("../assets/inimigo.png")
  bola= loadImage("../assets/b.png")
}


function setup() {
 createCanvas(windowWidth,windowHeight);
plm=0
chs=0
bor=createEdgeSprites()






r= createSprite(110,350)
gol=createSprite(30,325,10,180)
gol.visible=false
 r.addImage(deyv) 
 b=createSprite(680,350)
 b.addImage(bola) 
 t=createSprite(1260,350)
 go=createSprite(1335,325,10,180)
 go.visible=false
 t.addImage(havertz) 
 b.scale=0.2
 t.scale=0.1
 r.scale=0.1
b.debug=true
b.setCollider("circle",0,0,40)
}

function draw() {
  background(bgImg); 
if(keyDown("W")){
t.y-=5


}
if(keyDown("S")){
  t.y+=5
  
  
  }
  if(keyDown("A")){
    t.x-=5
    
    
    }
    if(keyDown("D")){
      t.x+=5
      
      
      }
      if(keyDown("up_arrow")){
        r.y-=5
        
        
        }
        if(keyDown("left_arrow")){
          r.x-=5
          
          
          }
          if(keyDown("right_arrow")){
            r.x+=5
            
            
            }
            if(keyDown("down_arrow")){
              r.y+=5
              
              
              }
              if(b.isTouching(go)){
z.play()
b.x=680
b.y=350
r.x=110
r.y=350
t.x=1260
t.y=350
plm+=1
              }
              if(b.isTouching(gol)){
                z.play()
                b.x=680
                b.y=350
                r.x=110
r.y=350
t.x=1260
t.y=350
chs+=1
                              }
      
              
              
              
              
              
              
              t.displace(b)
      stroke("lightgreen")
      fill("darkblue")
              rect(30,10,200,50)
textSize(20)
              text("CHS  "+chs,35,40)
              textSize(20)
              text(plm+"  PLM",160,40)

      t.displace(r)
      r.displace(b)
      b.collide(bor)
drawSprites();
}

