class FoodS{
    constructor(){
        this.foodStock = null;
        this.lastFed = null;
        this.image = loadImage("Milk.png");
    }

   

    getFoodStock(){
        this.foodStock = database.ref('Food');
        this.foodStock.on("value",function (data){
            foodStock = data.val();
        })
    }
    

    updateFoodStock(food){
        database.ref('/').update({
            foodStock : food,
            
        })

        

    }

    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image,720,220,70,70);

        if(this.foodStock !== 0){
            for(var i=0; i < this.foodStock; i++){
                if(i%10 === 0){
                    x = 80;
                    y = y + 50;
                }
                    image(this.image,x,y,50,50);
                    x = x + 30;
                
            }
        }
    }

    bedroom(){
        background(bedroomImg,550,500);
    }

    garden(){
        background(gardenImg,550,500);
    }

    washroom(){
        background(washroomImg,550,500);
    }

    vaccination(){
        background(vacc,550,500);
    }

    runningDog(){
        background(dogRunning,550,500);
    }

    livingRoom(){
        background(livingRoomImg,550,500);
    }

   



    

}

