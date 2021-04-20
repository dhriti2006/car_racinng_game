class Game{


    constructor(){


    }

    readgs(){

    mydb.ref("gamestate").on("value",function(data){
        mygs=data.val()
    })
    }
  
    updategs(state){
        mydb.ref("/").update({
            gamestate:state
        })
    }

async start(){

    if(mygs===0){

        myplayer=new Player()
    
        var pcref=await mydb.ref("playercount").once("value")

        if(pcref.exists()){

            mypc=pcref

            myplayer.readpc()
 

        }
       

        myform=new Form()
        myform.display()
    }

    car1=createSprite(300,200);
    car1.addImage(car1Image);
    car2=createSprite(600,200);
    car2.addImage(car2Image);

    cars=[car1,car2];

}


play(){

    myform.allhide()
   // text("  GAME  START",300,200)
    
    Player.getallplayersinfo()

     if(allplayers !==undefined){
        // var textypos=200

        background("brown")
        image(trackImage,0,-displayHeight*4,displayWidth,displayHeight*5)
         var index=1;
         var x=175;
         var y;
         for(var plr in allplayers)
            {
                //textypos=textypos+20
                
            //    if(plr==="player"+myplayer.index){
            //       fill("red")
            //    }

            //     else{
                    
            //         fill("black")

            //     }
           index+=1;
            x=x+300;
            y=displayHeight-allplayers[plr].distance;
            cars[index-1].x=x
            cars[index-1].y=y

               // text(allplayers[plr].name+"--"+allplayers[plr].distance,200,textypos);

            if(index===myplayer.index){
                cars[index-1].shapeColor="red"
                camera.position.x=displayWidth/2;
                camera.position.y=cars[index-1].y;


            }

            }

        


     }

     drawSprites()
   if(keyIsDown(UP_ARROW)&& myplayer.index!==undefined){
       myplayer.distance+=50
       myplayer.updateplayerinfo()




   }


}



}