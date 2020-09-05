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
      
    if (currentFollows >= goalDetails[5].startingPoint && currentFollows <= goalDetails[5].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[5].level; 
        currentGoal = goalDetails[5].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[5].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[5].name;
        currentChanged();
    }
         
    else if (currentFollows >= goalDetails[4].startingPoint && currentFollows <= goalDetails[4].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[4].level; 
        currentGoal = goalDetails[4].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[4].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[4].name;
        currentChanged();
     
    }
        else if (currentFollows >= goalDetails[3].startingPoint && currentFollows <= goalDetails[3].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[3].level; 
        currentGoal = goalDetails[3].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[3].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[3].name;
        currentChanged();
    }  else if (currentFollows >= goalDetails[2].startingPoint && currentFollows <= goalDetails[2].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[2].level; 
        currentGoal = goalDetails[2].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[2].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[2].name;
        currentChanged();
    }
    
    
    
    else if (currentFollows >= goalDetails[1].startingPoint && currentFollows < goalDetails[1].goal) {
        document.getElementById("current-level").
        textContent = goalDetails[1].level; 
        currentGoal = goalDetails[1].goal;
        document.getElementById("goal-number").textContent = currentGoal;
        starterFollowerCount = goalDetails[1].startingPoint;
        document.getElementById("goal-name").textContent = goalDetails[1].name;
        currentChanged();
    

    }
    
    
    else {
        console.log("nothing changed");

    }


}

levelChecker();

function currentChanged() {

    let onePercent = (currentGoal - starterFollowerCount) / 100;
    let vals = parseInt(document.getElementById('currentProg').value);//changed in the production
    let barProgress = (vals - starterFollowerCount) / onePercent;
    document.getElementById("achieved-number").textContent = vals;
   

   
    if (barProgress < 100 && barProgress>0) {
       document.getElementById("progress-bar-complete").style.width = barProgress + "%";
    } else if (barProgress >= 100 || parseInt(barProgress) < -0 ) {
       levelChecker();
        
    }

}

