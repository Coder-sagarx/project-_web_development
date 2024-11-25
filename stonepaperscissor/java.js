let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const msgg=document.querySelector("#msg");
const user=document.querySelector("#user-score");
const comp=document.querySelector("#comp-score");
 

const gencomputerchoices =()=>{
    const option=["rock","paper","scissor"];
    const random=Math.floor(Math.random()*3);
    return option[random];
}
const draw=()=>{
    msgg.innerText="game is draw "; 
    msgg.style.background="yellow";
    msgg.style.color="black";
}

const showwin=(userwin,userchoice,computerchoice)=>{
if(userwin){
    userscore++
    user.innerText=userscore;
msgg.innerText=`your ${userchoice} beat ${computerchoice}`;
msgg.style.background="green";

}
else{
    computerscore ++
    comp.innerText=computerscore;
    msgg.innerText=`${computerchoice} beat your ${userchoice}`;
    msgg.style.background="red";
}
}

const playgame=(userchoice)=>{
 
const computerchoice=gencomputerchoices();
 
 if(userchoice==computerchoice){
    draw();
 }
 else{
    let userwin=true;
    if(userchoice=="rock"){
        userwin=computerchoice=="paper"?false:true;
    }
    else if(userchoice=="paper"){
        userwin=computerchoice=="rock"?true:false;
    }
    else if(userchoice=="scissor"){
        userwin=computerchoice=="rock"?false:true;
    }
    showwin(userwin,userchoice,computerchoice);
 }
 
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);

    });
});