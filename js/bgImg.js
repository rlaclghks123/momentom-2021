const bgImges=["01.jpeg", "02.png","03.jpeg","04.jpeg","05.png"];

const createImg = document.createElement("img");
const todayImg = bgImges[Math.floor(Math.random() * bgImges.length)];

const createSrc=createImg.src=`img/${todayImg}`;

document.body.appendChild(createImg);