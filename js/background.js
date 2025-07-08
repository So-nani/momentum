const images = [
  "WW_background_1.png",
  "WW_background_2.png",
  "WW_background_3.png",
  "WW_background_4.png",
  "WW_background_5.png"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];
// html에 background-img를 적용하려면, createElement을 사용하여 img 태그를 생성하고, 
// src 속성에 선택된 이미지를 할당합니다.
// 그런 다음, body에 prepend를 사용하여 추가합니다.
const bgimg = document.createElement("img");
bgimg.src = `img/${chosenImage}`;
document.body.prepend(bgimg);
// html에서 <src = ""/>를 실행한 것과 같음.
