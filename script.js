
// creating 16 X 16 of square divs
const container = document.getElementById("container");
container.style.cssText= "width:700px ; height:700px ; border:2px solid white; background-color: black; margin :100px auto; display: flex ; flex-wrap :wrap;";
const btn = document.getElementById("newGridBtn")
btn.style.cssText = "width :100px ; height :100 px ; border :1px solid red; color:red; font-size: 30px; padding : 20px ; background-color:black;";
btn.textContent = "click"; 

  

// the function to build the grid 
function buildGrid(n){
    // to remove the old divs cells
     container.innerHTML = ""; 
     let size = 960/ n;
     for (let i=0;i<n*n ;i++){
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.width = size + "px";
        cell.style.height = size + "px";
      // adding hovering effect on divs

        cell.addEventListener("mouseover", ()=>{
        cell.style.backgroundColor = "red";
    })
        container.appendChild(cell);
     }

}
      
// when button clicked 
btn.addEventListener("click", () =>{
    let num = prompt ("Enter number of squares per side (max 100) :");
    num = parseInt(num);
    if(isNaN (num)|| num <= 0 || num>100){
        alert("please enter a number between 1 and 100");
        return;
    }
    buildGrid(num);
});

// buid default grid 16 X16
buildGrid(16);


