
localStorage.setItem("wuwu", 11);
let storaged = localStorage.getItem("wuwu");
console.log(storaged)

localStorage.removeItem("wuwu");
storaged = localStorage.getItem("wuwu");
console.log(storaged)

if(storaged === null){
    console.log("nullo")
}