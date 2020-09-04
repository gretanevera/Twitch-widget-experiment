let goalDetails = {
    1: {
        "name": "Play a horror game",
        "startingPoint": 0,
        "goal": 50,
        "level":1
    },
    2: {
        "name": "The game you want to play",
        "startingPoint": 50,
        "goal": 100,
        "level":2
    },
    3: {
        "name": "???",
        "startingPoint": 100,
        "goal": 200,
        "level":3
    },
    4: {
        "name": "Gaming with viewers",
        "startingPoint": 200,
        "goal": 500,
        "level":4
    },
    5: {
        "name": "???",
        "startingPoint": 500,
        "goal": 1000,
        "level":5
    }
}
let currentGoal
let currentProgress
let starterFollowerCount
 
let currentFollows = parseInt(document.getElementById('currentProg').value);
document.getElementById("achieved-number").textContent = currentFollows;
document.getElementById("goal-number").textContent = 0;
function levelChecker() {
    
    currentFollows = parseInt(document.getElementById('currentProg').value);
      
    if (currentFollows >= goalDetails[1].startingPoint && currentFollows < goalDetails[1].goal-1) {
        document.getElementById("current-level").
        textContent = goalDetails[1].level; 
        currentGoal = goalDetails[1].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[1].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[1].name;
    

    } else if (currentFollows >= goalDetails[2].startingPoint && currentFollows < goalDetails[2].goal-1) {
        document.getElementById("current-level").
        textContent = goalDetails[2].level; 
        currentGoal = goalDetails[2].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[2].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[2].name;
    } else if (currentFollows >= goalDetails[3].startingPoint && currentFollows < goalDetails[3].goal-1) {
        document.getElementById("current-level").
        textContent = goalDetails[3].level; 
        currentGoal = goalDetails[3].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[3].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[3].name;
    } else if (currentFollows >= goalDetails[4].startingPoint && currentFollows < goalDetails[4].goal-1) {
        document.getElementById("current-level").
        textContent = goalDetails[4].level; 
        currentGoal = goalDetails[4].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[4].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[4].name;
    } else if (currentFollows >= goalDetails[5].startingPoint && currentFollows < goalDetails[5].goal-1) {
        document.getElementById("current-level").
        textContent = goalDetails[5].level; 
        currentGoal = goalDetails[5].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[5].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[5].name;
    } else {
        console.log("nothing changed");

    }


}

levelChecker();

function currentChanged() {

    let onePercent = (currentGoal - starterFollowerCount) / 100;
    let vals = parseInt(document.getElementById('currentProg').value);//changed in the production
    let barProgress = (vals - starterFollowerCount) / onePercent;
    document.getElementById("achieved-number").textContent = vals;
    levelChecker();

   
    if (barProgress < 100) {
        document.getElementById("progress-bar-complete").style.width = barProgress + "%";
    } else if (barProgress >= 100) {
        goalReached();
        
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
    // call levelChecker
}
