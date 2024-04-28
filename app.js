


let img=document.querySelectorAll("img")
let num=Math.ceil(Math.random() * 3);
console.log(num)

function but(){
       if(num===3){
        img[2].src="king card.jpg1.png"
    }
    else if(num!==3){
        img[2].src="images.png" 
        }
  }

 function butt(){
     if(num===1){
        
    img[1].src="king card.jpg1.png"
  }
else if(num!==1){
    img[1].src="img/images.jpg"
  
}
}

function button(){
   if(num===2){
    img[0].src="king card.jpg1.png"
    }
else if(num!==2){
    img[0].src="img/images2.png"
  
}
}

