let gameSeq=[];
let userSeq=[];
let highScore=[];

let btns=["pink", "orange", "skyblue", "blue"]

let started=false;
let level=0;

let h2= document.querySelector("h2");
document.addEventListener("keypress", function(){
     if(started==false){
        console.log("game is started");
        started=true;
        levelUp();
    }
});

function gameFlash(btn){
    btn.classList.add("whiteFlash");
    setTimeout(function(){
        btn.classList.remove("whiteFlash")
    }, 250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerText=`Level ${level}`;
    let randIdx= Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn= document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function userFlash(btn){
    btn.classList.add("greenFlash");
    setTimeout(function(){
        btn.classList.remove("greenFlash")
    }, 250);
}

function btnPress(){
    console.log("Button was pressed");
    console.log(this);
    let btn= this;
    userFlash(btn);
    let userColor=btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}

function checkAns(idx){
    console.log(`Current level: ${level}`)
    //let idx=level-1;
    if(userSeq[idx]==gameSeq[idx]){
        console.log("Same Value")
        if(userSeq.length==gameSeq.length){
            setTimeout(levelUp, 1000);
        }
    }else{ 
        let max=0;  
        highScore.push(level);
        for(let i=0; i<highScore.length; i++){
            if(max<highScore[i]){
                max=highScore[i];
            }
        }  
        h2.innerHTML=`Game Over! Your Score was <b>${level}</b><br>press any key to start <br> High Score: ${max}`;
        document.querySelector("body").style.backgroundColor="red"
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white"
        }, 150)
        reset();
    }

}

let allBtns= document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}

function reset(){
    started=false;
    level=0;
    gameSeq=[];
    userSeq=[];
}
