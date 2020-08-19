console.log("hello world!")

let finalGoal= 300;
let onePercent= finalGoal / 100;
let currentFollows = 50
let currentProgress= currentFollows/ onePercent ;

document.getElementById("progress-bar-complete").style.width = currentProgress+"%";

console.log(document.getElementById("goal-number").value)


// document.getElementsByClassName('currentProg').addEventListener("onchange", currentChanged());



function currentChanged() {
console.log('values changed')

     let vals= parseInt(document.getElementById('currentProg').value);
    
    let barProgress = (vals / onePercent);

// if(barLength < predetermined lenght){
// change it to predetertimed lenght

// }else{
//     keep it that way
// } id one with media, delete thi100


    console.log('vals is ' + vals);
    console.log('percentage is ' + barProgress);

    document.getElementById("progress-bar-complete").style.width = barProgress+"%";



}

function goalReached() {
    //poof its done
}

// add function that get the info
//add a function changes the width of the bar and numbers
//animate that shiz