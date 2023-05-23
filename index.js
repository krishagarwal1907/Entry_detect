let mypoints=3
function add3points(){
    mypoints+=3
}
function remove1point(){
    mypoints-=1
}
add3points()
add3points()
add3points()
remove1point()
remove1point()
console.log(mypoints)

let countEL=document.getElementById("countt")
let saveEL=document.getElementById("save-el")
let count=0
function increment(){
    count=count+1
    countEL.innerText=count
}

function save(){
    let countstr=count+" - "
    saveEL.textContent += countstr
    countEL.textContent=0
    count=0
}
