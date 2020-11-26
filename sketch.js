    var dog,dogImg,happydog;
    var database;
    var foodS,foodStock;

    function preload(){
    dogImg = loadImage("images/dogImg.png")
    happydog = loadImage("images/dogImg1.png")
    }

    function setup() {
      createCanvas(500,500);
      dog = createSprite(200,200,20,20);
      dog.addImage(dogImg);
      dog.scale = 0.5;
      
      database = firebase.database();
      
      foodStock=database.ref('food');
      foodStock.on("value",readStock);

    }



    function draw() {  
    background(46,139,87)

    if(keyWentDown(UP_ARROW)){
      writeStock(foodS);
      dog.addImage(happydog);
    }
    drawSprites();

    textSize(20)
    fill("white")
    text("milk left : " + foodS,300,50)
    fill("white")
    text("press up arrow to feed lexi",150,450)
    
    }

    function readStock(data){
      foodS = data.val();
      }
      function writeStock(x){
        if (x <= 0){
          x = 0;
        } else{
          x=x-1;
        }
      
      database.ref('/').update({
        food:x
      })
      };
      
      
      
      


