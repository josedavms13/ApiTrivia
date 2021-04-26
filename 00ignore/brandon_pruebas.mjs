/* 
localStorage.setItem("wuwu", 11);
let storaged = localStorage.getItem("wuwu");
console.log(storaged)

localStorage.removeItem("wuwu");
storaged = localStorage.getItem("wuwu");
console.log(storaged)

if(storaged === null){
    console.log("nullo")
} */

document.getElementById("see1").removeAttribute("onclick")

function wuwu(text, id){
    console.log(text);
    console.log(id)
}

function se(){
    console.log(22)
}

window.wuwu = wuwu;