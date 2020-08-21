let currentFollows = parseInt(document.getElementById('currentProg').value);
let currentGoal = parseInt(document.getElementById('goal').value);
let currentProgress = currentFollows / (currentGoal / 100);
let starterFollowerCount = parseInt(document.getElementById('starter-followers').value);

document.getElementById("achieved-number").textContent = currentFollows;
document.getElementById("goal-number").textContent = currentGoal;
document.getElementById("progress-bar-complete").style.width = currentProgress + "%";


function currentChanged() {

    starterFollowerCount = parseInt(document.getElementById('starter-followers').value);
    let finalGoal = parseInt(document.getElementById('goal').value);
    let onePercent = (finalGoal - starterFollowerCount) / 100;
    let vals = parseInt(document.getElementById('currentProg').value);
    let barProgress = (vals - starterFollowerCount) / onePercent;

    document.getElementById("achieved-number").textContent = vals;
    console.log("current followers is " + vals);
    console.log("current bar progress is " + barProgress);
    console.log("current starter follower couny is " + starterFollowerCount);
    console.log("current one percent is " + onePercent);



    if (barProgress < 100) {
        document.getElementById("progress-bar-complete").style.width = barProgress + "%";
    } else if (barProgress > 100) {
        goalReached()
    }

    // } else if (barProgress <= 0) {
    //     //call a function that delevels the bar
    //     console.log("you have been demoted");
    // }

}

function onGoalChange() {
    let vals = parseInt(document.getElementById('goal').value);
    document.getElementById("goal-number").textContent = vals;
    currentChanged();
}

function goalReached() {;
    //to do :
    //make that when it reaches one 100 percent the goal becomes minimum value. 
    //count percentage from that minimum
    // poof its done
}

// add function that get the info
// add a function changes the width of the bar and numbers
// animate that shiz