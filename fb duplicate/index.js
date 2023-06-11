
//like button
let lkdone=document.getElementById("like1");
lkdone.addEventListener('click',love);

function love(){
   if(lkdone.src="images/like.png")
   {
   lkdone.src="images/like-blue.png";
   
   }
   
   else{
      lkdone.src="images/like.png";
      
   }
}

//posting post
let posbut=document.getElementsByClassName("postimg3");
let content=document.getElementById("toptext").innerHTML;
posbut.addEventListener('click',rect);

function rect(){
   if(content!==null){
   console.log(content);
   }
   else{
      console.log("umif");
   }
}