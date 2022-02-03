'use strict';

function playBot (num) {
  let tryMessage;
  let endGame;
  let present;
  let trying = 10;

  function isNumber (n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  function endGameFunc(){
    return function () {
      tryMessage = confirm("Попытки закончились, хотите сыграть еще?");
      if(tryMessage) {
        trying = 10;
        getNum();
      } else {
        alert("Игра окончена");
      }
    }
  }

  function winGame () {
    present = confirm("Поздравляю, Вы угадали!!! Хотели бы сыграть еще?");
      if(present){
        getNum();
      } else {
        alert("Игра окончена");
      }
  }

  function getNum () {
    let ask = prompt("Угадай число от 1 до 100");

    if(ask > num && ask != null && isNumber(ask)) {
      trying--
      alert("Загаданное число меньше, осталось " + (trying) + " попыток...");
      console.log(trying);
      if(trying <= 0){
        endGame();
      } else {
        getNum();
      }

    } else if (ask < num && ask != null && isNumber(ask)) {
      trying--
      alert("Загаданное число больше, осталось " + (trying) + " попыток...");
      console.log(trying);
      if(trying <= 0){
        endGame();
      } else {
        getNum();
      }

    } else if (ask === null){
      return alert("Игра окончена");

    } else if (!isNumber(ask)) {

      alert("Введите число!");
      getNum();

    } else if (ask == num) {
      winGame();
    }
  }
  
  endGame = endGameFunc();
  getNum();

}

playBot(50);



