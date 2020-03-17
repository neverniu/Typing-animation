let typed = "";
const element = document.querySelector(".typity");

function startType(pun, index) {
  if (index < pun.length) {
    typed += pun.charAt(index);
    element.innerHTML = typed;
    index++;
    setTimeout(function() {
      startType(pun, index);
    }, 50);
  } else {
    setTimeout(function() {
      element.classList.add("highlight");
    }, 1000);

    setTimeout(function() {
      element.classList.remove("highlight");
      typed = "";
      element.innerHTML = typed;
      startType(getRandomPun(), 0);
    }, 2000);
  }
}

function getRandomPun() {
  const puns = [
    "Yeeeee",
    "Yuki was here.",
    "С*кс это кто?",
    "Каво?",
    "Чево?",
    "Чьто?",
    "Ok, boomer",
    "ну шош",
    "покупайте деньги",
    "Ноль, целковый, чекушка, порнушка, пердушка, засерушка, жучок, м*дачок, х*й на воротничок, дурачок.",
    "С*кс опасен для здоровья, наверное... И для жизни.",
    "гi",
    "хрюкка",
    "я жаба, ебатб 🐸",
    "Чилю тупа."
  ];
  const index = Math.floor(Math.random() * puns.length);

  return puns[index];
}

startType(getRandomPun(), 0);
