//CARD

let arrCard = [
  { id: "3BICH", name: '3-Bich', point: 1, type: 3 },
  { id: "3CHUON", name: "3-chuồn", point: 2, type: 3 },
  { id: "3RO", name: "3-rô", point: 3, type: 3 },
  { id: "3CO", name: "3-cơ", point: 4, type: 3 },
  { id: "4BICH", name: "4-bích", point: 5, type: 4 },
  { id: "4CHUON", name: "4-chuồn", point: 6, type: 4 },
  { id: "4RO", name: "4-rô", point: 7, type: 4 },
  { id: "4CO", name: "4-cơ", point: 8, type: 4 },
  { id: "5BICH", name: "5-bích", point: 9, type: 5 },
  { id: "5CHUON", name: "5-chuồn", point: 10, type: 5 },
  { id: "5RO", name: "5-rô", point: 11, type: 5 },
  { id: "5CO", name: "5-cơ", point: 12, type: 5 },
  { id: "6BICH", name: "6-bích", point: 13, type: 6 },
  { id: "6CHUON", name: "6-chuồn", point: 14, type: 6 },
  { id: "6RO", name: "6-rô", point: 15, type: 6 },
  { id: "6CO", name: "6-cơ", point: 16, type: 6 },
  { id: "7BICH", name: "7-bích", point: 17, type: 7 },
  { id: "7CHUON", name: "7-chuồn", point: 18, type: 7 },
  { id: "7RO", name: "7-rô", point: 19, type: 7 },
  { id: "7CO", name: "7-cơ", point: 20, type: 7 },
  { id: "8BICH", name: "8-bích", point: 21, type: 8 },
  { id: "8CHUON", name: "8-chuồn", point: 22, type: 8 },
  { id: "8RO", name: "8-rô", point: 23, type: 8 },
  { id: "8CO", name: "8-cơ", point: 24, type: 8 },
  { id: "9BICH", name: "9-bích", point: 25, type: 9 },
  { id: "9CHUON", name: "9-chuồn", point: 26, type: 9 },
  { id: "9RO", name: "9-rô", point: 27, type: 9 },
  { id: "9CO", name: "9-cơ", point: 28, type: 9 },
  { id: "10BICH", name: "10-bích", point: 29, type: 10 },
  { id: "10CHUON", name: "10-chuồn", point: 30, type: 10 },
  { id: "10RO", name: "10-rô", point: 31, type: 10 },
  { id: "10CO", name: "10-cơ", point: 32, type: 10 },
  { id: "11BICH", name: "bồi-bích", point: 33, type: 11 },
  { id: "11CHUON", name: "bồi-chuồn", point: 34, type: 11 },
  { id: "11RO", name: "bồi-rô", point: 35, type: 11 },
  { id: "11CO", name: "bồi-cơ", point: 36, type: 11 },
  { id: "12BICH", name: "đầm-bích", point: 37, type: 12 },
  { id: "12CHUON", name: "đầm-chuồn", point: 38, type: 12 },
  { id: "12RO", name: "đầm-rô", point: 39, type: 12 },
  { id: "12CO", name: "đầm-cơ", point: 40, type: 12 },
  { id: "13BICH", name: "già-bích", point: 41, type: 13 },
  { id: "13CHUON", name: "già-chuồn", point: 42, type: 13 },
  { id: "13RO", name: "già-rô", point: 43, type: 13 },
  { id: "13CO", name: "già-cơ", point: 44, type: 13 },
  { id: "1BICH", name: "1-bích", point: 45, type: 1 },
  { id: "1CHUON", name: "1-chuồn", point: 46, type: 1 },
  { id: "1RO", name: "1-rô", point: 47, type: 1 },
  { id: "1CO", name: "1-cơ", point: 48, type: 1 },
  { id: "2BICH", name: "2-bích", point: 49, type: 2 },
  { id: "2CHUON", name: "2-chuồn", point: 50, type: 2 },
  { id: "2RO", name: "2-rô", point: 51, type: 2 },
  { id: "2CO", name: "2-cơ", point: 52, type: 2 },
];

var luotDi = 1;
var kiemTraLanDau = 1;
var keuBaiDanh = 0;
var player1 = [];
var player2 = [];
var player3 = [];
var player4 = [];
var player5 = [];
var player6 = [];
var player7 = [];
var player8 = [];
var arrChonBai = [];
var arrBaiDoiThu = [];

var pl1 = document.querySelector("#p1");
var pl2 = document.querySelector("#p2");
var pl3 = document.querySelector("#p3");
var pl4 = document.querySelector("#p4");
var pl5 = document.querySelector("#p5");
var pl6 = document.querySelector("#p6");
var pl7 = document.querySelector("#p7");
var pl8 = document.querySelector("#p8");
var ChonBai = document.querySelector(".BanHienThiBaiDanh");
var BaiDoiThu = document.querySelector(".BanHienThiDoiThu");

//main
checkLuotDi(luotDi);
//Random arrCard in Pleyers
function shuffleArray(array) {
  let shuffleArray = [...array];
  for (let i = shuffleArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]];
  }
  return shuffleArray;
}


//chia bài
function chiaBai() {
  var newCard = shuffleArray(arrCard);
  player1 = newCard.slice(0, 3);
  player1.map((card) => {
    card.idPlayer = 1;
  });
  player2 = newCard.slice(3, 6);
  player2.map((card) => {
    card.idPlayer = 2;
  });
  player3 = newCard.slice(6, 9);
  player3.map((card) => {
    card.idPlayer = 3;
  });
  player4 = newCard.slice(9, 12);
  player4.map((card) => {
    card.idPlayer = 4;
  });
  player5 = newCard.slice(12, 15);
  player5.map((card) => {
    card.idPlayer = 5;
  });
  player6 = newCard.slice(15,18);
  player6.map((card) => {
    card.idPlayer = 6;
  });
  player7 = newCard.slice(18,21);
  player7.map((card) => {
    card.idPlayer = 7;
  });
  player8 = newCard.slice(21,24);
  player8.map((card) => {
    card.idPlayer = 8;
  });
  getBai(player1, pl1, 1);
  getBai(player2, pl2, 2);
  getBai(player3, pl3, 3);
  getBai(player4, pl4, 4);
  getBai(player5, pl5, 5);
  getBai(player6, pl6, 6);
  getBai(player7, pl7, 7);
  getBai(player8, pl8, 8);

}
//DOM
function getBai(p, Spl, idPlayer) {
  for (let i = 0; i < p.length; i++) {
    let btn = document.createElement("BUTTON"); //tạo element
    btn.innerHTML = p[i].name;
    btn.setAttribute("class", "box"); //set class cho btn
    btn.setAttribute("id", idPlayer);
    btn.setAttribute("name", p[i].id);
    btn.addEventListener("click", chonBai);
    Spl.appendChild(btn); //add vào btn
  }
}
//check Luot Di
function checkLuotDi(luotDi) {
  if (luotDi == 1) {
    danhLai();
    danhLai();
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p1").style.display = "initial";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p6").style.display = "none";
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "none";

  } else if (luotDi == 2) {
    danhLai();
    danhLai();
    document.getElementById("p2").style.display = "initial";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p6").style.display = "none";
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "none";
  } else if (luotDi == 3) {
    danhLai();
    danhLai();
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "initial";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p6").style.display = "none";
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "none";
  } else if (luotDi == 4) {
    danhLai();
    danhLai();
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "initial";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p6").style.display = "none";
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "none";
  } else if (luotDi == 5){
    danhLai();
    danhLai();
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p5").style.display = "initial";
    document.getElementById("p6").style.display = "none";
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "none";
  } else if (luotDi == 6) {
    danhLai();
    danhLai();
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p6").style.display = "initial";
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "none";
  } else if (luotDi == 7) {
    danhLai();
    danhLai();
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p6").style.display = "none";
    document.getElementById("p7").style.display = "initial";
    document.getElementById("p8").style.display = "none";
  } else if (luotDi == 8) {
    danhLai();
    danhLai();
    document.getElementById("p2").style.display = "none";
    document.getElementById("p3").style.display = "none";
    document.getElementById("p4").style.display = "none";
    document.getElementById("p1").style.display = "none";
    document.getElementById("p5").style.display = "none";
    document.getElementById("p6").style.display = "none";
    document.getElementById("p7").style.display = "none";
    document.getElementById("p8").style.display = "initial";
  }

}
//check bo luot
function checkBoLuot() 
{
            if (luotDi == 1) {
              luotDi = 2;
              checkLuotDi(luotDi);
            }
            else if (luotDi == 2) {
              luotDi = 3;
              checkLuotDi(luotDi);
            }
            else if (luotDi == 3) {
              luotDi = 4;
              checkLuotDi(luotDi);

            } 
            else if (luotDi == 4) {
              luotDi = 5;
              checkLuotDi(luotDi);
            }
            else if (luotDi == 5) {
              luotDi = 6;
              checkLuotDi(luotDi);
            }
              else if (luotDi == 6) {
              luotDi = 7;
              checkLuotDi(luotDi);
            }

            else if (luotDi == 7) {
              luotDi = 8;
              checkLuotDi(luotDi);
            }

            else if (luotDi == 8) {
              luotDi = 1;
              checkLuotDi(luotDi);
                  }



}
//DANH LAI
function danhLai() {
        for (let i = 0; i < arrChonBai.length; i++) {
          if (arrChonBai[i].idPlayer == 1) {
            player1.push(arrChonBai[i]);
            arrChonBai.splice(i, 1); //?
            loadElementPlayerCard(player1, pl1, 1);
            loadElementToArrChonBai(1);
          } else if (arrChonBai[i].idPlayer == 2) {
            player2.push(arrChonBai[i]);
            arrChonBai.splice(i, 1); //?
            loadElementPlayerCard(player2, pl2, 2);
            loadElementToArrChonBai(2);
          } else if (arrChonBai[i].idPlayer == 3) {
            player3.push(arrChonBai[i]);
            arrChonBai.splice(i, 1); //?
            loadElementPlayerCard(player3, pl3, 4);
            loadElementToArrChonBai(3);
          } else if (arrChonBai[i].idPlayer == 4) {
            player1.push(arrChonBai[i]);
            arrChonBai.splice(i, 1); //?
            loadElementPlayerCard(player4, pl4, 4);
            loadElementToArrChonBai(4);
          }
        }
}

//func chon bai
function chonBai(e) {
              let idCardPlayer = e.currentTarget.name;
              let idCard = arrCard.findIndex((idTim) => {
                return idCardPlayer === idTim.id;
              });
              document.getElementById("Danh").style.display = "initial";
              arrChonBai.push(arrCard[idCard]);
              if (e.currentTarget.id == 1) {
                player1.splice(
                  player1.findIndex((idTim) => {
                    return idCardPlayer === idTim.id;
                  }),
                  1
                );
                loadElementPlayerCard(player1, pl1, 1);
                loadElementToArrChonBai(1);
              } else if (e.currentTarget.id == 2) {
                player2.splice(
                  player2.findIndex((idTim) => {
                    return idCardPlayer === idTim.id;
                  }),
                  1
                );
                loadElementPlayerCard(player2, pl2, 2);
                loadElementToArrChonBai(2);
              } else if (e.currentTarget.id == 3) {
                player3.splice(
                  player3.findIndex((idTim) => {
                    return idCardPlayer === idTim.id;
                  }),
                  1
                );
                loadElementPlayerCard(player3, pl3, 3);
                loadElementToArrChonBai(3);
              } else if (e.currentTarget.id == 4) {
                player4.splice(
                  player4.findIndex((idTim) => {
                    return idCardPlayer === idTim.id;
                  }),
                  1
                );
                loadElementPlayerCard(player4, pl4, 4);
                loadElementToArrChonBai(4);
              } else if (e.currentTarget.id == 5) {
                player5.splice(
                  player5.findIndex((idTim) => {
                    return idCardPlayer === idTim.id;
                  }),
                  1
                );
                loadElementPlayerCard(player5, pl5, 5);
                loadElementToArrChonBai(5);
              } else if (e.currentTarget.id == 6) {
                player6.splice(
                  player6.findIndex((idTim) => {
                    return idCardPlayer === idTim.id;
                  }),
                  1
                );
                loadElementPlayerCard(player6, pl6, 6);
                loadElementToArrChonBai(6);
              } else if (e.currentTarget.id == 7) {
                player7.splice(
                  player7.findIndex((idTim) => {
                    return idCardPlayer === idTim.id;
                  }),
                  1
                );
                loadElementPlayerCard(player7, pl7, 7);
                loadElementToArrChonBai(7);
              } else if (e.currentTarget.id == 8) {
                player8.splice(
                  player8.findIndex((idTim) => {
                    return idCardPlayer === idTim.id;
                  }),
                  1
                );
                loadElementPlayerCard(player8, pl8, 8);
                loadElementToArrChonBai(8);
              }
}

function loadElementPlayerCard(player, spl, idPlayer) {
  spl.innerHTML = "";
  for (let i = 0; i < player.length; i++) {
    let btn = document.createElement("button");
    btn.setAttribute("class", "box");
    btn.innerHTML = player[i].name;
    btn.setAttribute("name", player[i].id);
    btn.setAttribute("id", idPlayer);
    btn.addEventListener("click", chonBai);
    spl.appendChild(btn);
  }
}
//load Element to Arr
function loadElementToArrChonBai(idPlayer) {
  ChonBai.innerHTML = "";
  for (let i = 0; i < arrChonBai.length; i++) {
    let btn = document.createElement("BUTTON");
    btn.setAttribute("class", "box");
    btn.setAttribute("id", idPlayer);
    btn.setAttribute("name", arrChonBai[i].id);
    btn.innerHTML = arrChonBai[i].name;
    ChonBai.appendChild(btn);
  }
}
//load ElenmentToArrBaiDoiThu
//Danh Hop Le!
function ElenmentToArrBaiDoiThu() {
  //kiem tra hop deu kien
  debugger;
  //lần đầu
  if (kiemTraLanDau == 1) {
    //xoa arrBanDoiThu cũ
    arrBaiDoiThu = [];
    BaiDoiThu.innerHTML = "";
    for (let i = 0; i < arrChonBai.length; i++) {
      arrBaiDoiThu.push(arrChonBai[i]);
      let btn = document.createElement("BUTTON");
      btn.setAttribute("class", "box");
      btn.setAttribute("id", arrChonBai[i].idPlayer);
      btn.setAttribute("name", arrChonBai[i].id);
      btn.innerHTML = arrChonBai[i].name;
      BaiDoiThu.appendChild(btn);
    }
    arrChonBai = [];
    loadElementToArrChonBai();
    document.getElementById("Danh").style.display = "none";
    checkWin();
    setStyleCard();
    checkBoLuot();
    kiemTraLanDau = 0;
  }

  //sau lần đầu
  else {
    if (checkChonBaiHopLe() == true) {
      //so sanh point
      if (keuBaiDanh == 1) {
        if (checkDoubleCard() == false) {
          alert("KHÔNG HỢP LỆ! CHỌN LẠI");
          for (let i = 0; i < 13; i++) {
            danhLai(); // fix bug : phải xóa hết một lần
          }
        } else {
          //xoa arrBanDoiThu cũ
          arrBaiDoiThu = [];
          BaiDoiThu.innerHTML = "";
          for (let i = 0; i < arrChonBai.length; i++) {
            arrBaiDoiThu.push(arrChonBai[i]);
            let btn = document.createElement("BUTTON");
            btn.setAttribute("class", "box");
            btn.setAttribute("id", arrChonBai[i].idPlayer);
            btn.setAttribute("name", arrChonBai[i].id);
            btn.innerHTML = arrChonBai[i].name;
            BaiDoiThu.appendChild(btn);
          }
          arrChonBai = [];
          loadElementToArrChonBai();
          document.getElementById("Danh").style.display = "none";
          checkWin();
          setStyleCard();
          checkBoLuot();
        }
      } else if (keuBaiDanh == 2) {
        //kiem tra 2card đôi phải cùng type nhau
        if (checkDoubleCard() == false) {
          alert("KHÔNG HỢP LỆ! CHỌN LẠI");
          for (let i = 0; i < 13; i++) {
            danhLai(); // fix bug : phải xóa hết một lần
          }
        } else {
          //xoa arrBanDoiThu cũ
          arrBaiDoiThu = [];
          BaiDoiThu.innerHTML = "";
          for (let i = 0; i < arrChonBai.length; i++) {
            arrBaiDoiThu.push(arrChonBai[i]);
            let btn = document.createElement("BUTTON");
            btn.setAttribute("class", "box");
            btn.setAttribute("id", arrChonBai[i].idPlayer);
            btn.setAttribute("name", arrChonBai[i].id);
            btn.innerHTML = arrChonBai[i].name;
            BaiDoiThu.appendChild(btn);
          }
          arrChonBai = [];
          loadElementToArrChonBai();
          document.getElementById("Danh").style.display = "none";
          checkWin();
          setStyleCard();
          checkBoLuot();
        }
      } else {
        //xoa arrBanDoiThu cũ
        arrBaiDoiThu = [];
        BaiDoiThu.innerHTML = "";
        for (let i = 0; i < arrChonBai.length; i++) {
          arrBaiDoiThu.push(arrChonBai[i]);
          let btn = document.createElement("BUTTON");
          btn.setAttribute("class", "box");
          btn.setAttribute("id", arrChonBai[i].idPlayer);
          btn.setAttribute("name", arrChonBai[i].id);
          btn.innerHTML = arrChonBai[i].name;
          BaiDoiThu.appendChild(btn);
        }
        arrChonBai = [];
        loadElementToArrChonBai();
        document.getElementById("Danh").style.display = "none";
        checkWin();
        setStyleCard();
        checkBoLuot();
      }
    } else {
      alert("KHÔNG HỢP LỆ! CHỌN LẠI");
      for (let i = 0; i < 13; i++) {
        danhLai(); // fix bug : phải xóa hết một lần
      }
    }
  }
}

//func kiem tra ban doi thu la loại kểu đánh gì
function setStyleCard() {
  debugger;
  if (arrBaiDoiThu.length == 1) {
    keuBaiDanh = 1;
  }
  if (arrBaiDoiThu.length == 2) {
    keuBaiDanh = 2;
  }
  if (arrBaiDoiThu.length == 3) {
    keuBaiDanh = 3;
  }
  if (arrBaiDoiThu.length == 4) {
    keuBaiDanh = 4;
  } else if (arrBaiDoiThu.length == 0) {
    keuBaiDanh = 0;
  }
}
//kiem tra chonBai HOP LE

function checkChonBaiHopLe() {
  debugger;
  if (arrChonBai.length == keuBaiDanh) {
    return true;
  } else if (keuBaiDanh == 0) {
    return true;
  } else {
    return false;
  }
}

//kiem tra danh Doi
function checkDoubleCard() {
  let pointCardChonBai = arrChonBai[0].point + arrChonBai[1].point;
  let pointCardBaiDoiThu = arrBaiDoiThu[0].point + arrBaiDoiThu[1].point;
  if (
    pointCardChonBai > pointCardBaiDoiThu &&
    arrChonBai[0].type == arrChonBai[1].type
  ) {
    return true;
  } else {
    return false;
  }
}
//kiem tra Sanh

//kiem tra danh coc
function checkOneCard() {
  debugger;
  if (arrBaiDoiThu.length > 0) {
    if (arrChonBai[0].point > arrBaiDoiThu[0].point) {
      return true;
    } else {
      return false;
    }
  } else return false;
}
function checkWin() {
  if (player1.length <= 0) {
    alert(" PLAYER-1 WINNER !");
  }
  if (player2 <= 0) {
    alert(" PLAYER-2 WINNER !");
  }
  if (player3 <= 0) {
    alert(" PLAYER-3 WINNER !");
  }
  if (player4 <= 0) {
    alert(" PLAYER-4 WINNER !");
  }
}
