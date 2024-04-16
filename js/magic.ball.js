function MagicBall(){
    var randomBall = Math.floor(Math.random()*5)+1;

    var ball = "images/" + "ball" + randomBall + ".png";
    console.log(ball);
    var img1 =document.querySelectorAll("img")[0];
    img1.setAttribute("src",ball);

   
} 

