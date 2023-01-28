
let x=document.getElementById('main');
var htmlElement = document.querySelector("html");
function randomColor(){


  let code='0123456789ABCDEF';
  let first ='#';
  for (i=0;i<6;i++){
    first=first+code[Math.floor(Math.random()*16)];

  }
  return first;
}

console.log(randomColor());

  
function divison(){
 x.style.backgroundColor=randomColor();
}


function cord(e){
  let x_axis=e.clientX - 34;
  let y_axis=e.clientY -34;
  x.style.top=y_axis + "px" ;
  x.style.left=x_axis + "px";

  divison()
}

htmlElement.addEventListener('click',cord);