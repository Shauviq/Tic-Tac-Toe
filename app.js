let boxes = document.querySelectorAll(".box");
let resetb = document.querySelector("#reset");
let newb = document.querySelector("#new");
let msgc = document.querySelector(".msgc");
let msgp = document.querySelector("#msg");
let count = 0;

let turno = true;
let winningp = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [6,7,8]
];

const reset = () => {
    turno = true;
    count = 0;
    enableboxes();
    msgc.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turno===true){
            box.innerHTML = "O";
            box.style.color = "#69140E";
            turno = false;
            count++;
        }
        else {
            box.innerHTML = "X";
            turno = true;
            count++;
        }
        box.disabled = true;

        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML = "";
    }
}

const showwinner = (winner) => {
    msgp.innerHTML = `congratulation, winner is ${winner}`;
    msgc.classList.remove("hide");
    disableboxes();
};

const checkwinner = () => {
    for(let pattern of winningp){
        let pos1val = boxes[pattern[0]].innerHTML;
        let pos2val = boxes[pattern[1]].innerHTML;
        let pos3val = boxes[pattern[2]].innerHTML;

        if(pos1val!=""&&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val&&pos2val===pos3val){
                showwinner(pos1val);
            }
        }
    }
    if(count===9){
        msgp.innerHTML = `game is a draw`;
        msgc.classList.remove("hide");
        disableboxes();
    };
};


newb.addEventListener("click",reset);
resetb.addEventListener("click",reset);



