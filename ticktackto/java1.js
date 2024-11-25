let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector(".reset");
let messagecontainer=document.querySelector(".msg_container");
let newgamebtn=document.querySelector(".new_game");
let message=document.querySelector("#msg");
let message1=document.querySelector("#ok");

let turno =true; //player x,player 0
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]

];

 boxes.forEach((box) => {
    box.addEventListener("click",()=>{
         
        if(turno){
            box.innerText="0";
            turno=false;
        }
        else{
            box.innerText="X";
            turno=true;
        }
        box.disabled="true";
        checkwinner();
    });
 });

const reset=()=>{
    turno=true;
    boxenable();
    messagecontainer.classList.add("hide");
}

const showwinner=(winner) =>{
     msg.innerText=`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nCONGRATULATION WINNER IS ${winner} `; 
     ok.innerText=`\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n`; 
     
     messagecontainer.classList.remove("hide");
     boxdisable();
}
const boxdisable=()=>{
for(box of boxes){
    box.disabled=true;
}
}
const boxenable=()=>{
    for(box of boxes){
        box.innerText="";
        box.disabled=false;
    }
}
 
 const checkwinner = () => {
   for(let pattern of winpatterns){
     
    let position1= boxes[pattern[0]].innerText;
    let position2=boxes[pattern[1]].innerText;
    let position3=boxes[pattern[2]].innerText ;       
        
    if(position1!="" && position2!="" && position3!=""){
        if(position1==position2 && position2==position3){
            console.log("winner",position1);
            showwinner(position1);
        }
    }

   } 
 };
 
    newgamebtn.addEventListener("click",reset);
    resetbtn.addEventListener("click",reset);
 

