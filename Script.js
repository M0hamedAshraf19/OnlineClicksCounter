let count = 0
let clickCountEl = document.getElementById("clickCount")

function clicked() {
    count += 1
    clickCountEl.textContent = "Clicks: " + count
}

function save() {
    if (count == 0) {
        alert("No Clicks")
    }
    else if (count == 1) {
        alert("1 Click")
    }
    else {
        alert(count + " Clicks")
    }
    //console.log(count)
    count = 0
    clickCountEl.textContent = "Clicks: " + count
}