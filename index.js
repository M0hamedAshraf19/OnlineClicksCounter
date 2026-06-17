let count = 0
let clickCountEl = document.getElementById("clickCount")

function clicked() {
    count += 1
    clickCountEl.textContent = "Clicks: " + count
}

function save() {
    alert(count)
    //console.log(count)
    count = 0
    clickCountEl.textContent = "Clicks: " + count
}