const hex = [0,1,2,3,4,5,6,7,8,9,"A","B", "C", "D", "E", "F"]

const btn = document.getElementById("action-btn");
const color = document.getElementsByClassName("color");

btn.addEventListener('click', function(){
    let hexcolor = "#";
    for (let i=0; i <6; i++){
        // hexcolor+= hex[0];
        hexcolor += hex[getRandomNumber()];
    }
    color.textContent = hexcolor;
    console.log(color.textContent)

    document.body.style.backgroundColor = hexcolor;
});

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
}