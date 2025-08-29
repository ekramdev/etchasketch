
// creating 16 X 16 of square divs
const container = document.getElementById("container");
container.style.cssText= "width:700px ; height:700px ; border:2px solid white; background-color: #000000; margin :100px auto; display: flex ; flex-wrap :wrap;";



//  for loops to deplicute the raw and cloum of the divs 
 let cols = 16 ;
 let rows = 16 ;
for ( let i =0 ; i < cols * rows ; i ++){
         const cell = document.createElement("div");
          cell.classList.add("cell");
          cell.style.cssText = "width: 50px ; height :50px ; border: 2px solid white; background-color: #000000 ;";
         container.appendChild(cell);
}
  




