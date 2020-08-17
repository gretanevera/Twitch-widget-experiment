console.log("hello world!")

let finalGoal= 500;
let onePercent= finalGoal / 100;
let currentProgress= 300;
// document.getElementsByClassName('currentProg').addEventListener("onchange", currentChanged());


function currentChanged() {
console.log('values changed')

     let vals= parseInt(document.getElementsByClassName('currentProg').value);
    
    let barProgress = vals / onePercent;

    console.log('vals is ' + vals);
    console.log('percentage is ' + barProgress);

    // document.getElementsByClassName('progress-bar-compete').style.width=barProgress + "%";
}
function goalReached() {
    //poof its done
}

// add function that get the info
//add a function changes the width of the bar and numbers
//animate that shiz