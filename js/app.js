//1) Define the required variables used to track the state of the game.
//2) Store cached element references.
//3) Upon loading, the game state should be initialized, and a function should 

//   be called to render this game state.

//4) The state of the game should be rendered to the user.

//5) Define the required constants.

//6) Handle a player clicking a square with a `handleClick` function.

//7) Create Reset functionality.


//set board to nine empty strings, set turn to x, 
//set winner to false, set tie to false
let board = ["", "", "", "", "", "", "",""];
let turn = "x";
let winner = false;
let tie = false;


const squareEls = document.querySelector(`#board`)
console.log(squareEls)
const messageEl = document.querySelector(`#message`)
console.log(messageEl)
console.log(render)



//create functions 
const render = (){};
console.log(render);



//function for updateBoard 
function updateBoard () {

}




//call a function named render() at the end of the init() unfction


const init = () => {
    console.log()
    render()
}
