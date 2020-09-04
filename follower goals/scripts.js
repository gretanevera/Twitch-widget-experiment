let currentFollows = parseInt(document.getElementById('currentProg').value);
let currentGoal = parseInt(document.getElementById('goal').value);
let currentProgress = currentFollows / (currentGoal / 100);
let starterFollowerCount = parseInt(document.getElementById('starter-followers').value);

let goalDetails = {
    1: {
        "name": "Play a horror game",
        "startingPoint": 25,
        "goal":50
    },
    2: {
        "name": "The game you want to play",
        "startingPoint": 50,
        "goal":100
    },
    3: {
       "name": "???",
        "startingPoint": 100,
        "goal":200
    },
    4: {
         "name": "Gaming with viewers",
        "startingPoint": 200,
        "goal":500
    },
    5: {
         "name": "???",
        "startingPoint": 500,
        "goal":1000
    }
}


document.getElementById("achieved-number").textContent = currentFollows;
document.getElementById("goal-number").textContent = currentGoal;
document.getElementById("progress-bar-complete").style.width = currentProgress + "%";

function levelChecker(){
//check now many followers we have
//adjust the goal level
//render the needed thing

}




function currentChanged() {

    starterFollowerCount = parseInt(document.getElementById('starter-followers').value);
    let finalGoal = parseInt(document.getElementById('goal').value);
    let onePercent = (finalGoal - starterFollowerCount) / 100;
    let vals = parseInt(document.getElementById('currentProg').value);
    let barProgress = (vals - starterFollowerCount) / onePercent;

    if (barProgress < 100) {
        document.getElementById("progress-bar-complete").style.width = barProgress + "%";
    } else if (barProgress > 100) {
        goalReached()
    }

}

function onGoalChange() {
    let vals = parseInt(document.getElementById('goal').value);
    document.getElementById("goal-number").textContent = vals;
    currentChanged();
}

function goalReached() {;
    // to do :
    // make that when it reaches one 100 percent the goal becomes minimum value.
    // count percentage from that minimum
    // poof its done
    //call levelChecker
}
