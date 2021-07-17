const btn = document.querySelector(".button");
const color = document.querySelector(".color");
const normal = ["red", "black", "white", "blue", "peach", "pink", "purple", "orange", "gray", "brown", "yellow", "green", "rgb(0,0,205)", "rgb(0,255,0)", "rgb(128,0,0)"];


btn.addEventListener("click", ()=> {
 const normalColor = getRandomColor();
 console.log(normalColor);
  
  document.body.style.backgroundColor = normal[normalColor];
  color.textContent = normal[normalColor];
});

function getRandomColor() {
 return Math.floor(Math.random() * normal.length);
};

