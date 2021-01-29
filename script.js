const triangle1 = document.getElementById("triangle1");
const triangle2 = document.getElementById("triangle2");

let rotation = 0;
let rotation2 = 180;
triangle2.style.transform = `translateY(-100%) rotate(${rotation2}deg)`;

setInterval(() => {
  rotation += 90;
  rotation2 += 90;
  triangle1.style.transform = `rotate(${rotation}deg)`;
  setTimeout(() => {
    triangle2.style.transform = `translateY(-100%) rotate(${rotation2}deg)`;
  }, 300);
}, 1000);
