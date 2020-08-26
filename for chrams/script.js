<<<<<<< HEAD
// have a follower
// someone follows
// poof or smokey fadeout?
// new follower
// ???
// profit

let initialTxr = 'follower_ocks';
document.getElementById("latest").innerHTML = initialTxr;


function wait(ms) {
    var d = new Date();
    var d2 = null;
    do {
        d2 = new Date();
    } while (d2 - d < ms);
}

function chageInitiate() {
    let changedPrimary = JSON.stringify(document.getElementById("change-input").value);
    let changed = changedPrimary.replace(/"/g, "");
     // poof
    document.getElementById("poof").style.opacity = "1";
    document.getElementById("latest").style.opacity = "0";




    setTimeout(function () {
        document.getElementById("latest").innerHTML = changed;
        document.getElementById("latest").style.opacity = "1";

    }, 1000);

    // wait
    setTimeout(function () {
        document.getElementById("poof").style.opacity = "0"
    }, 1500);


}


// ideas for other transition:
// like a neon sign
// someone follows
// sign flickers goes off
// flickers on with a new name
=======
// have a follower
// someone follows
// poof or smokey fadeout?
// new follower
// ???
// profit

let initialTxr = 'follower_ocks';
document.getElementById("latest").innerHTML = initialTxr;


function wait(ms) {
    var d = new Date();
    var d2 = null;
    do {
        d2 = new Date();
    } while (d2 - d < ms);
}

function chageInitiate() {
    let changedPrimary = JSON.stringify(document.getElementById("change-input").value);
    let changed = changedPrimary.replace(/"/g, "");
    console.log(changed)
    // poof
    document.getElementById("poof").style.opacity = "1";
    document.getElementById("latest").style.opacity = "0";




    setTimeout(function () {
        document.getElementById("latest").innerHTML = changed;
        document.getElementById("latest").style.opacity = "1";

    }, 1000);

    // wait
    setTimeout(function () {
        document.getElementById("poof").style.opacity = "0"
    }, 1500);


}


// ideas for other transition:
// like a neon sign
// someone follows
// sign flickers goes off
// flickers on with a new name
>>>>>>> 4309725fe8518f5c65554268480f36702fea7d64
