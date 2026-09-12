let boxes=document.querySelectorAll('.cell');
let resetBtn=document.querySelector('.reset-btn');
let newGameBtn=document.querySelector('.newgame-btn');
let winner=document.querySelector('#winner');
let winnerContainer=document.querySelector('.winner-container');
let turn='X';// current player is X
let winningPatterns=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,4,8],
[2,4,6],
[0,3,6],
[1,4,7],
[2,5,8]
];
const checkWinner=()=>{
    for(let pattern of winningPatterns) {
        // console.log(pattern[0], pattern[1], pattern[2]);
        // console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!=="" && p1===p2 && p2===p3) {
            // alert(`Player ${p1} won the game!`);
            winner.innerText=`Player ${p1} won the game!`;
            winnerContainer.classList.add('show');
            boxes.forEach((cell)=>{
                cell.disabled=true;
            });
    }
}
};
boxes.forEach((cell)=>{
    cell.addEventListener("click",
        ()=> {
            console.log("btn clicked!");
            if(turn==='X') {
                cell.innerText="X";
                turn='O';
            }
            else
            {
                cell.innerText="O";
                turn='X';
            }
            cell.disabled=true;
            checkWinner();
        }
    )
});
const resetGame=()=>{
    turn='X';
    winnerContainer.classList.remove('show');
    boxes.forEach((cell)=>{
        cell.disabled=false;
        cell.innerText="";
    })
}
const newGame = () => {
    resetGame();
};
resetBtn.addEventListener("click",resetGame);
newGameBtn.addEventListener("click",newGame);