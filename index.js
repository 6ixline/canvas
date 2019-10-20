const canvas= document.querySelector("canvas");
const text= document.getElementsByClassName("canvas-title");



canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


canvas.style.opacity="";

const c = canvas.getContext("2d");


function color(){
    let color="#";
    let range =["1",'2','3','4','5','6','7','8','9','0','a','b','c','d','e'];
    for(let i=0; i<6;i++){
        color += range[Math.floor(Math.random() * range.length)];
    }
    return color;
}
text[0].style.color=color();

let position = {
    x: undefined,
    y: undefined
}

window.addEventListener("mousemove", function (event) {
    position.x = event.x;
    position.y = event.y;
   });

   window.addEventListener("resize",function () {

       canvas.width = window.innerWidth;
       canvas.height = window.innerHeight;
       init();
   })

   



class Circle{
    x;
    y;
    dy;
    dx;
    radius;
    color;
    minradius;
    constructor(){
        this.radius = Math.abs(Math.random()*20);
        this.minradius=Math.abs(this.radius);
        this.x = Math.random() * (window.innerWidth - this.radius*2)+ this.radius;
        this.y = Math.random() * (window.innerHeight -this.radius * 2) + this.radius;
        this.dy = (Math.random() - 0.5) * 3;
        this.dx = (Math.random() - 0.5) * 3;
        this.color=color();
    }
    draw = ()=>{
        c.beginPath();
        c.strokeStyle = this.color;
        c.fillStyle = this.color;
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fill();
        c.stroke();
    }
    update = () => {
        if (this.x + 30 > innerWidth || this.x - 30 < 0) {
            this.dx = -this.dx;
        }
        if (this.y + 30 > innerHeight || this.y - 30 < 0) {
            this.dy = -this.dy;
        }
        this.x += this.dx;
        this.y += this.dy;

        if (position.x - this.x <50 && position.y - this.y < 50 
            && position.x-this.x >-50 && position.y -this.y >-50
            
            ){
                if(this.radius < 70){
                    this.radius += 2;
                }
           
        }else if(this.radius > this.minradius ){
            this.radius= Math.abs(this.radius-1);
        }

        this.draw();
    }
 }






// for(let i=0; i<4;i++){
//     let x = Math.random() * window.innerWidth;
//     let y=  Math.random() * window.innerHeight;
//     c.fillStyle = color();
//     c.fillRect(x,y,100,100);

// }

// c.beginPath();
// c.moveTo(50, 300);
// c.strokeStyle=color();
// c.lineTo(300,100);
// c.stroke();





 let circles = [];

function init() {
    circles = [];
    for (let i = 0; i < 150; i++) {
        circles.push(new Circle());
    }
}
for (let i = 0; i < 200; i++) {
    circles.push(new Circle());
}


    function animate(){
     requestAnimationFrame(animate); 
     c.clearRect(0,0, innerWidth,innerHeight);  
      for(let i=0;i<circles.length;i++){
          circles[i].draw();
          circles[i].update();
      }
       
    }

    
    animate();


