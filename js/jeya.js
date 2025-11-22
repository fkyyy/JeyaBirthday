const messages = [
  {
    text: "Aku Selalu Suka ngeliat kamu Happy karna rambut kamu",
    img: "Images/Foto_1.jpg",
  },
  {
    text: "Kalo Kamu Senyum aku selalu liatin lamaa banget jadi bikin kangen terus",
    img: "Images/Foto_2.jpg",
  },
  {
    text: "Kamu selalu Pose gemes begini aku sukaa bangettt",
    img: "Images/Foto_3.jpg",
  },
  {
    text: "Pose Andalan Favorit akuuuu",
    img: "Images/Foto_4.jpg",
  },
  {
    text: "Makasih yaa Sayang udah selalu ada buat aku Selama ini...",
    img: "Images/Foto_5.jpg",
  },
  {
    text: "Makasih Untuk segala usaha kamu untuk segala waktu kamu yang kamu luangin buat aku",
    img: "Images/Foto_6.jpg",
  },
  {
    text: "Sampe Detik ini aku Masih sayang kamu, Happy Birthday Sayang!!!",
    img: "Images/Foto_7.jpg",
  },
];
let currentIndex = 0;

document.getElementById("surpriseButton").addEventListener("click", () => {
  const surpriseMessage = document.getElementById("surpriseMessage");
  if (currentIndex >= messages.length) {
    alert("Sudah abis Ih Fotonya Kalo mau liat lagi refresh yaaa!!!");
    return;
  }
  const message = messages[currentIndex];
  surpriseMessage.innerHTML = `<p>${message.text}</p><img src="${message.img}" alt="Surprise image" />`;
  surpriseMessage.classList.remove("hidden");
  currentIndex++;
});
