let count = 0
let countEl= document.getElementById("count-el")
saveEl= document.getElementById("save-el")

function increment() {
    count++
    console.log(count) 
    countEl.innerText= count 
}

function save() {
    let entries= count + " - "
    saveEl.textContent += entries 
    countEl.textContent = 0
    count = 0
    console.log(count)
} 

