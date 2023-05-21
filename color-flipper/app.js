const colors = ["green", "red","blue", "purple","maroon", "rgba(133, 122, 200)", "#f15025"];
const button = document.getElementById('btn');
const color = document.querySelector('.color');
const colorLength = colors.length;

button.addEventListener("click", function(){
    const getRandomNumber = randomNumber();
    document.body.style.backgroundColor = colors[getRandomNumber] 
    color.textContent = colors[getRandomNumber]
})

function randomNumber(){
    return Math.floor(Math.random() * colorLength)
}