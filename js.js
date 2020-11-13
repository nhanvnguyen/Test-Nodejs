//CARD

let arrCard = [
  { id: "3BICH", name: "3-bích", point: 1 },
  { id: "3CHUON", name: "3-chuồn", point: 2 },
  { id: "3RO", name: "3-rô", point: 3 },
  { id: "3CO", name: "3-cơ", point: 4 },
  { id: "4BICH", name: "4-bích", point: 5 },
  { id: "4CHUON", name: "4-chuồn", point: 6 },
  { id: "4RO", name: "4-rô", point: 7 },
  { id: "4CO", name: "4-cơ", point: 8 },
  { id: "5BICH", name: "5-bích", point: 9 },
  { id: "5CHUON", name: "5-chuồn", point: 10 },
  { id: "5RO", name: "5-rô", point: 11 },
  { id: "5CO", name: "5-cơ", point: 12 },
  { id: "6BICH", name: "6-bích", point: 13 },
  { id: "6CHUON", name: "6-chuồn", point: 14 },
  { id: "6RO", name: "6-rô", point: 15 },
  { id: "6CO", name: "6-cơ", point: 16 },
  { id: "7BICH", name: "7-bích", point: 17 },
  { id: "7CHUON", name: "7-chuồn", point: 18 },
  { id: "7RO", name: "7-rô", point: 19 },
  { id: "7CO", name: "7-cơ", point: 20 },
  { id: "8BICH", name: "8-bích", point: 21 },
  { id: "8CHUON", name: "8-chuồn", point: 22 },
  { id: "8RO", name: "8-rô", point: 23 },
  { id: "8CO", name: "8-cơ", point: 24 },
  { id: "9BICH", name: "9-bích", point: 25 },
  { id: "9CHUON", name: "9-chuồn", point: 26 },
  { id: "9RO", name: "9-rô", point: 27 },
  { id: "9CO", name: "9-cơ", point: 28 },
  { id: "10BICH", name: "10-bích", point: 29 },
  { id: "10CHUON", name: "10-chuồn", point: 30 },
  { id: "10RO", name: "10-rô", point: 31 },
  { id: "10CO", name: "10-cơ", point: 32 },
  { id: "11BICH", name: "bồi-bích", point: 33 },
  { id: "11CHUON", name: "bồi-chuồn", point: 34 },
  { id: "11RO", name: "bồi-rô", point: 35 },
  { id: "11CO", name: "bồi-cơ", point: 36 },
  { id: "12BICH", name: "đầm-bích", point: 37 },
  { id: "12CHUON", name: "đầm-chuồn", point: 38 },
  { id: "12RO", name: "đầm-rô", point: 39 },
  { id: "12CO", name: "đầm-cơ", point: 40 },
  { id: "13BICH", name: "già-bích", point: 41 },
  { id: "13CHUON", name: "già-chuồn", point: 42 },
  { id: "13RO", name: "già-rô", point: 43 },
  { id: "13CO", name: "già-cơ", point: 44 },
  { id: "1BICH", name: "1-bích", point: 45 },
  { id: "1BICH", name: "1-chuồn", point: 46 },
  { id: "1BICH", name: "1-rô", point: 47 },
  { id: "1BICH", name: "1-cơ", point: 48 },
  { id: "2BICH", name: "2-bích", point: 49 },
  { id: "2BICH", name: "2-chuồn", point: 50 },
  { id: "2BICH", name: "2-rô", point: 51 },
  { id: "2BICH", name: "2-cơ", point: 52 },
];
// let arrCard = [
//   "3-bích",
//   "3-chuồn",
//   "3-rô",
//   "",
//   "4-bích",
//   "4-chuồn",
//   "4-rô",
//   "4-cơ",
//   "5-bích",
//   "5-chuồn",
//   "5-rô",
//   "5-cơ",
//   "6-bích",
//   "6-chuồn",
//   "6-rô",
//   "6-cơ",
//   "7-bích",
//   "7-chuồn",
//   "7-rô",
//   "7-cơ",
//   "8-bích",
//   "8-chuồn",
//   "8-rô",
//   "8-cơ",
//   "9-bích",
//   "9-chuồn",
//   "9-rô",
//   "9-cơ",
//   "10-bích",
//   "10-chuồn",
//   "10-rô",
//   "10-cơ",
//   "bồi-bích",
//   "bồi-chuồn",
//   "bồi-rô",
//   "bồi-cơ",
//   "đầm-bích",
//   "đầm-chuồn",
//   "đầm-rô",
//   "đầm-cơ",
//   "già-bích",
//   "già-chuồn",
//   "già-rô",
//   "già-cơ",
//   "1-bích",
//   "1-chuồn",
//   "1-rô",
//   "1-cơ",
//   "2-bích",
//   "2-chuồn",
//   "2-rô",
//   "2-cơ",
// ];
var luotDi = 1;
var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];
var arrChonBai = [];
var arrBaiDoiThu = [];

var pl1 = document.querySelector(".player-1");
var pl2 = document.querySelector(".player-2");
var pl3 = document.querySelector(".player-3");
var pl4 = document.querySelector(".player-4");
var ChonBai = document.querySelector(".BanHienThiBaiDanh");
var BaiDoiThu = document.querySelector(".BanHienThiDoiThu");

//Random arrCard in Pleyers
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
//DOM

function getBai(p, Spl, idPlayer) {
  for (let i = 0; i < p.length; i++) {
    //console.log(p[i]);
    let btn = document.createElement("BUTTON"); //tạo element
    btn.innerHTML = p[i].name;
    btn.setAttribute("class", "box"); //set class cho btn
    btn.setAttribute("id", idPlayer);
    btn.addEventListener("click", chonBai(p[i]));
    Spl.appendChild(btn); //add vào btn
  }
}
//chia bài
function chiaBai() {
  var newCard = shuffleArray(arrCard);
  player1 = newCard.slice(0, 13);
  player2 = newCard.slice(13, 26);
  player3 = newCard.slice(26, 39);
  player4 = newCard.slice(39, 52);
  getBai(player1, pl1, 1);
  getBai(player2, pl2, 2);
  getBai(player3, pl3, 3);
  getBai(player4, pl4, 4);
  //alert("chia bài thành công!");
}
//func kiem tra luat choi
// function kiemtraLuat() {
//     for(let i=0;)
// }
//func kiem tra đánh cóc
// function kiemTraDanhCoc(a,b){
//     for(let i=0;i<arrCard.length;i++){
//         arrCard[i]=i;
//     }
// }
//kiem tra danh Doi

//kiem tra Sanh

//func chon bai
function chonBai(e) {
  let btn = document.createElement("BUTTON");
  btn.setAttribute("class", "box");
  btn.setAttribute("id", e.currentTarget.id);
  btn.innerHTML = e.target.innerHTML;
  arrChonBai.push(btn.innerHTML);

  e.target.remove();
  ChonBai.appendChild(btn);
}
//getCardInElement()
function getCardInElement(arrCard) {
  for (let i = 0; i < arrCard.length; i++) {
    let btn = document.createElement("BUTTON");
    btn.setAttribute("class", "box");
    btn.innerHTML = arrCard[i];
    BaiDoiThu.appendChild(btn);
  }
}
//xu li Danh thanh cong
function kiemTra() {
  this.addEventListener("click", function (e) {
    for (let i = 0; i < arrChonBai.length; i++) {
      arrBaiDoiThu.push(arrChonBai[i]);
      getCardInElement(arrBaiDoiThu);
    }
    arrChonBai = [];
    ChonBai.innerHTML = "";
  });
}
