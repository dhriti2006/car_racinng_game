class Player{


    constructor(){
        this.name=null
        this.distance=0
        this.index=null


    }

    readpc(){

        mydb.ref("playercount").on("value",function(data){
        mypc=data.val();

        })

        
    }

    updateplayerinfo(){
        var plindex="players/player"+this.index
        mydb.ref(plindex).set({
            name:this.name,distance:this.distance
        })
    }
    
     updateplayercount(playerscount){
         mydb.ref('/').update({
             playercount:playerscount
         })
    
    }
    
    static getallplayersinfo(){
        mydb.ref("players").on("value",function(data){
            allplayers=data.val()
        })
    

    }

    
    




}