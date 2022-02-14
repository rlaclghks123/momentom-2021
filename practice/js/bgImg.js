const bgImages = ["01.jpeg", "02.png", "03.jpeg", "04.jpeg", "05.png"];


const creatImg = document.createElement("img");

const random = bgImages[Math.floor(Math.random() * bgImages.length)];

creatImg.src = `img/${random}`;

document.body.appendChild(creatImg);

