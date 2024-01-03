// חמשה

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
ctx.lineWidth=2.5;

ctx.beginPath();
ctx.moveTo(0,350);
ctx.lineTo(2000,350);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,300);
ctx.lineTo(2000,300);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,150);
ctx.lineTo(2000,150);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,200);
ctx.lineTo(2000,200);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,250);
ctx.lineTo(2000,250);
ctx.stroke();
ctx.lineWidth=2.5;

function cha(){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0,350);
ctx.lineTo(2000,350);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,300);
ctx.lineTo(2000,300);
ctx.stroke();
ctx.beginPath();
ctx.moveTo(0,150);
ctx.lineTo(2000,150);
ctx.lineWidth=2.5;

ctx.stroke();




ctx.beginPath();

// Define a start point
ctx.moveTo(0,200);

// Define an end point
ctx.lineTo(2000,200);


// Draw it
ctx.stroke();

ctx.beginPath();

// Define a start point
ctx.moveTo(0,250);

// Define an end point
ctx.lineTo(2000,250);


// Draw it
ctx.stroke();
}


function line(a,b,c,d,x,y,z,m,r,t,k,u,p){
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d"); 
ctx.clearRect(0,0,2000,600);
    
      cha();
 
    ctx.beginPath();  
// Define a start point
    ctx.moveTo(x,y);
    
    // Define an end point
    ctx.lineTo(z,m);
    // Draw it
ctx.stroke();
    ctx.beginPath();

    // Define a start point
     ctx.moveTo(a,b);

// Define an end point
ctx.lineTo(c,d);



    // Draw it
    ctx.stroke();
    ctx.lineWidth=2.5;

     circal(r,t,k,u,p);
     audio(x)


}
function circal(r,t,k,u,p){
  const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d"); 
    ctx.beginPath();
    ctx.arc(r,t,k,u,p); 
    ctx.stroke();
    ctx.lineWidth=2.5;
    
}
function audio(x){
    document.getElementById("דו").pause()
    document.getElementById("רה").pause()
    document.getElementById("מי").pause()
    document.getElementById("פה").pause()
    document.getElementById("סול").pause()
    document.getElementById("לה").pause()
    document.getElementById("סי").pause()

    if(x==300)
    document.getElementById("דו").play()
    else
    if(x==500)
    document.getElementById("רה").play()
    else
    if(x==700)
    document.getElementById("מי").play()
    else
    if(x==900)
    
    document.getElementById("פה").play()
    if(x==1100)
    document.getElementById("סול").play()
    if(x==1300)
    document.getElementById("לה").play()
    if(x==1500)
    document.getElementById("סי").play()
  
}



