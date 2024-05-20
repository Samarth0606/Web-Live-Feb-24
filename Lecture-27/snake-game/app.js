// part-1
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0] , [100,0]] ;

// function draw(){}

// function update(){}

// setInterval(function(){
//     update()
//     draw()
// } , 200)


// -------------------------------------
// part-2&3
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;

// function draw(){
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX = headX + cellSize;
//     let newHeadY = headY;
//     snakeCells.push([newHeadX , newHeadY]);
//     snakeCells.shift()
// }

// setInterval(function(){
//     update()
//     draw()
// } , 200)

// -------------------------------------
// part-4&5
// let canvas = document.querySelector('canvas');
// let ctx = canvas.getContext('2d');

// let cellSize = 50;
// let boardWidth = 1200;
// let boardHeight = 800;
// let snakeCells = [[0,0] , [50,0]] ;
// let direction = 'right';

// document.addEventListener('keydown' , (event)=>{
//     if(event.key === 'ArrowUp'){direction = "up"}
//     else if(event.key === 'ArrowDown'){direction = "down"}
//     else if(event.key === 'ArrowLeft'){direction = "left"}
//     else if(event.key === 'ArrowRight'){direction = "right"}
// })

// function draw(){
//     // eraser
//     ctx.clearRect(0,0,1200,800)
//     // draw
//     for(let cell of snakeCells){
//         ctx.fillStyle = "brown"
//         ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
//     }
// }

// function update(){ 
//     let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
//     let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
//     let newHeadX;
//     let newHeadY;
//     if(direction ==='up'){
//         newHeadX = headX;
//         newHeadY = headY - cellSize;
//     }
//     else if(direction ==='down'){
//         newHeadX = headX;
//         newHeadY = headY + cellSize;
//     }
//     else if(direction ==='left'){
//         newHeadX = headX - cellSize;
//         newHeadY = headY;
//     }
//     else if(direction ==='right'){
//         newHeadX = headX + cellSize;
//         newHeadY = headY;
//     }
//     snakeCells.push([newHeadX , newHeadY]);
//     snakeCells.shift()
// }

// setInterval(function(){
//     update()
//     draw()
// } , 200)


// -------------------------------------
// part-6

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

let cellSize = 50;
let boardWidth = 1200;
let boardHeight = 800;
let snakeCells = [[0,0] , [50,0]] ;
let direction = 'right';
let gameOver = false;

document.addEventListener('keydown' , (event)=>{
    if(event.key === 'ArrowUp'){direction = "up"}
    else if(event.key === 'ArrowDown'){direction = "down"}
    else if(event.key === 'ArrowLeft'){direction = "left"}
    else if(event.key === 'ArrowRight'){direction = "right"}
})

function draw(){
    if(gameOver === true){
        clearInterval(id);
        return;
    }
    // eraser
    ctx.clearRect(0,0,1200,800)
    // draw
    for(let cell of snakeCells){
        ctx.fillStyle = "brown"
        ctx.fillRect(cell[0],cell[1],cellSize,cellSize )
    }
}

function update(){ 
    let headX = snakeCells[snakeCells.length-1][0]; // snakeCells[2][0]
    let headY = snakeCells[snakeCells.length-1][1]; // snakeCells[2][1]
    let newHeadX;
    let newHeadY;
    if(direction ==='up'){
        newHeadX = headX;
        newHeadY = headY - cellSize;
        if(newHeadY < 0){gameOver = true}
    }
    else if(direction ==='down'){
        newHeadX = headX;
        newHeadY = headY + cellSize;
        if(newHeadY === boardHeight){gameOver=true}
    }
    else if(direction ==='left'){
        newHeadX = headX - cellSize;
        newHeadY = headY;
        if(newHeadX <0){gameOver = true}
    }
    else if(direction ==='right'){
        newHeadX = headX + cellSize;
        newHeadY = headY;
        if(newHeadX === boardWidth){gameOver=true}
    }
    snakeCells.push([newHeadX , newHeadY]);
    snakeCells.shift()
}

let id = setInterval(function(){
    update()
    draw()
} , 100)