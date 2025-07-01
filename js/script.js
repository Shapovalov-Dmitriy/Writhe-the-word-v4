"use strict";

const letters = document.querySelectorAll('.letter'),
  inputWord = document.querySelector('.input-word'),
  word = document.querySelector('.word'),
  overlay = document.querySelector('.overlay'),
  audioPlay = document.querySelector('.audio-output'),
  imgBox = document.querySelector('.images-box');
// ===================================================

// Массив слов и соответствующих изображений.  
const data = [
  { word: 'жираф', image: "../images/img-words/jiraf.jpg", audio: '../audio/audio-words/жираф.mp3' },
  { word: 'помидор', image: "../images/img-words/tomat.webp", audio: '../audio/audio-words/помидор.mp3' },
  { word: 'апельсин', image: "../images/img-words/orange.webp", audio: '../audio/audio-words/апельсин.mp3' },
  { word: 'дом', image: "../images/img-words/house.webp", audio: '../audio/audio-words/дом.mp3' },
  { word: 'юла', image: "../images/img-words/yula.webp", audio: '../audio/audio-words/юла.mp3' },
  { word: 'зеркало', image: "../images/img-words/zerkalo.png", audio: '../audio/audio-words/зеркало.mp3' },
  { word: 'полотенце', image: "../images/img-words/polotence.webp", audio: '../audio/audio-words/полотенце.mp3' },
  { word: 'орёл', image: "../images/img-words/eagle.webp", audio: '../audio/audio-words/орёл.mp3' },
  { word: 'солнце', image: "../images/img-words/solnce.webp", audio: '../audio/audio-words/солнце.mp3' },
  { word: 'дерево', image: "../images/img-words/derevo.webp", audio: '../audio/audio-words/дерево.mp3' },
  { word: 'курица', image: "../images/img-words/kurica.png", audio: '../audio/audio-words/курица.mp3' },
  { word: 'диван', image: "../images/img-words/divan.png", audio: '../audio/audio-words/диван.mp3' },
  { word: 'корова', image: "../images/img-words/korova.webp", audio: '../audio/audio-words/корова.mp3' },
  { word: 'кошка', image: "../images/img-words/koshka.webp", audio: '../audio/audio-words/кошка.mp3' },
  { word: 'воробей', image: "../images/img-words/vorobei.png", audio: '../audio/audio-words/воробей.mp3' },
  { word: 'небо', image: "../images/img-words/nebo.webp", audio: '../audio/audio-words/небо.mp3' },
  { word: 'мама', image: "../images/img-words/mama.webp", audio: '../audio/audio-words/мама.mp3' },
  { word: 'яблоко', image: "../images/img-words/apple.webp", audio: '../audio/audio-words/яблоко.mp3' },
  { word: 'машина', image: "../images/img-words/auto.webp", audio: '../audio/audio-words/машина.mp3' },
  { word: 'сова', image: "../images/img-words/sova.png", audio: '../audio/audio-words/сова.mp3' },
  { word: 'щенок', image: "../images/img-words/dog.webp", audio: '../audio/audio-words/щенок.mp3' },
  { word: 'мышь', image: "../images/img-words/mouse.png", audio: '../audio/audio-words/мышь.mp3' },
  { word: 'блокнот', image: "../images/img-words/bloknot.webp", audio: '../audio/audio-words/блокнот.mp3' },
  { word: 'компьютер', image: "../images/img-words/computer.png", audio: '../audio/audio-words/компьютер.mp3' },
  { word: 'рыбка', image: "../images/img-words/fish.webp", audio: '../audio/audio-words/рыбка.mp3' },
  { word: 'снежинка', image: "../images/img-words/snown.png", audio: '../audio/audio-words/снежинка.mp3' },
  { word: 'корабль', image: "../images/img-words/korabl.png", audio: '../audio/audio-words/корабль.mp3' },
  { word: 'йогурт', image: "../images/img-words/jogurt.png", audio: '../audio/audio-words/йогурт.mp3' },
  { word: 'тыква', image: "../images/img-words/tykva.webp", audio: '../audio/audio-words/тыква.mp3' },
];

let currentIndex = 0; // Индекс текущего элемента

function updateDisplay() {
  imgBox.src = data[currentIndex].image;
  inputWord.textContent = data[currentIndex].word;
  audioPlay.src = data[currentIndex].audio;
}

// С помощью делегирования события назначил кнопкам действие (события при клике)
document.addEventListener('click', function (e) {
  const target = e.target;

  // Кнопка удаляет последнюю введенную букву (заметка: удаляет пробелы между буквами(если ставил сам) за отдельный клик).
  if (target.classList.contains('delete')) {
    new Audio('audio/cowbell.mp3').play();
    word.textContent = word.textContent.slice(0, -1);
  }
  //Кнопка сброса очищяет поле вода
  if (target.classList.contains('reset')) {
    new Audio('audio/delete.mp3').play();
    word.textContent = "";
  }
  // Кнопка проверить
  if (target.classList.contains('check')) {
    if (word.innerText == inputWord.innerText) {
      new Audio('audio/huge win.wav').play();
      overlay.classList.remove('none');
    } else {
      new Audio('audio/error-1.mp3').play();
    }
  }
  if (target.classList.contains('audio-check')) {
    audioPlay.src = data[currentIndex].audio;
  }
  // Следующее слово
  if (target.classList.contains('next-word')) {
    currentIndex = (currentIndex + 1) % data.length;
    updateDisplay();
    new Audio('audio/schelchok.mp3').play();
    word.textContent = "";
  }
  // Предыдущее слово
  if (target.classList.contains('prev-word')) {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateDisplay();
    new Audio('audio/schelchok.mp3').play();
    word.textContent = "";
  }
  // Салют
  if (target.classList.contains('overlay')) {
    overlay.classList.add('none');
  }
  // = Буквы ================================
  if (target.classList.contains('letter_1')) {
    const A = document.querySelector('.letter_1');
    new Audio('audio/audio-letters/gen-6.mp3').play();
    const wordValue = A.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_2')) {
    const Б = document.querySelector('.letter_2');
    new Audio('audio/audio-letters/gen-7.mp3').play();
    const wordValue = Б.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_3')) {
    const В = document.querySelector('.letter_3');
    new Audio('audio/audio-letters/gen-8.mp3').play();
    const wordValue = В.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_4')) {
    const Г = document.querySelector('.letter_4');
    new Audio('audio/audio-letters/gen-9.mp3').play();
    const wordValue = Г.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_5')) {
    const Д = document.querySelector('.letter_5');
    new Audio('audio/audio-letters/gen-10.mp3').play();
    const wordValue = Д.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_6')) {
    const Е = document.querySelector('.letter_6');
    new Audio('audio/audio-letters/gen-11.mp3').play();
    const wordValue = Е.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_7')) {
    const Ё = document.querySelector('.letter_7');
    new Audio('audio/audio-letters/gen-12.mp3').play();
    const wordValue = Ё.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_8')) {
    const Ж = document.querySelector('.letter_8');
    new Audio('audio/audio-letters/gen-13.mp3').play();
    const wordValue = Ж.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_9')) {
    const З = document.querySelector('.letter_9');
    new Audio('audio/audio-letters/gen-14.mp3').play();
    const wordValue = З.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_10')) {
    const И = document.querySelector('.letter_10');
    new Audio('audio/audio-letters/gen-15.mp3').play();
    const wordValue = И.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_11')) {
    const Й = document.querySelector('.letter_11');
    new Audio('audio/audio-letters/gen-16.mp3').play();
    const wordValue = Й.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_12')) {
    const К = document.querySelector('.letter_12');
    new Audio('audio/audio-letters/gen-17.mp3').play();
    const wordValue = К.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_13')) {
    const Л = document.querySelector('.letter_13');
    new Audio('audio/audio-letters/gen-18.mp3').play();
    const wordValue = Л.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_14')) {
    const М = document.querySelector('.letter_14');
    new Audio('audio/audio-letters/gen-19.mp3').play();
    const wordValue = М.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_15')) {
    const Н = document.querySelector('.letter_15');
    new Audio('audio/audio-letters/gen-20.mp3').play();
    const wordValue = Н.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_16')) {
    const О = document.querySelector('.letter_16');
    new Audio('audio/audio-letters/gen-21.mp3').play();
    const wordValue = О.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_17')) {
    const П = document.querySelector('.letter_17');
    new Audio('audio/audio-letters/gen-22.mp3').play();
    const wordValue = П.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_18')) {
    const Р = document.querySelector('.letter_18');
    new Audio('audio/audio-letters/gen-23.mp3').play();
    const wordValue = Р.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_19')) {
    const С = document.querySelector('.letter_19');
    new Audio('audio/audio-letters/gen-24.mp3').play();
    const wordValue = С.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_20')) {
    const т = document.querySelector('.letter_20');
    new Audio('audio/audio-letters/gen-25.mp3').play();
    const wordValue = т.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_21')) {
    const У = document.querySelector('.letter_21');
    new Audio('audio/audio-letters/gen-26.mp3').play();
    const wordValue = У.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_22')) {
    const Ф = document.querySelector('.letter_22');
    new Audio('audio/audio-letters/gen-27.mp3').play();
    const wordValue = Ф.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_23')) {
    const Х = document.querySelector('.letter_23');
    new Audio('audio/audio-letters/gen-28.mp3').play();
    const wordValue = Х.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_24')) {
    const Ц = document.querySelector('.letter_24');
    new Audio('audio/audio-letters/gen-29.mp3').play();
    const wordValue = Ц.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_25')) {
    const Ч = document.querySelector('.letter_25');
    new Audio('audio/audio-letters/gen-30.mp3').play();
    const wordValue = Ч.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_26')) {
    const Ш = document.querySelector('.letter_26');
    new Audio('audio/audio-letters/gen-31.mp3').play();
    const wordValue = Ш.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_27')) {
    const Щ = document.querySelector('.letter_27');
    new Audio('audio/audio-letters/gen-32.mp3').play();
    const wordValue = Щ.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_28')) {
    const Ъ = document.querySelector('.letter_28');
    new Audio('audio/audio-letters/gen-33.mp3').play();
    const wordValue = Ъ.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_29')) {
    const Ы = document.querySelector('.letter_29');
    new Audio('audio/audio-letters/gen-34.mp3').play();
    const wordValue = Ы.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_30')) {
    const Ь = document.querySelector('.letter_30');
    new Audio('audio/audio-letters/gen-35.mp3').play();
    const wordValue = Ь.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_31')) {
    const Э = document.querySelector('.letter_31');
    new Audio('audio/audio-letters/gen-36.mp3').play();
    const wordValue = Э.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_32')) {
    const Ю = document.querySelector('.letter_32');
    new Audio('audio/audio-letters/gen-37.mp3').play();
    const wordValue = Ю.textContent;
    word.textContent += wordValue;
  }
  if (target.classList.contains('letter_33')) {
    const Я = document.querySelector('.letter_33');
    new Audio('audio/audio-letters/gen-38.mp3').play();
    const wordValue = Я.textContent;
    word.textContent += wordValue;
  }
});
updateDisplay();

// = Звуки и действия при нажатии клавиш на клавиатуре ====================================
document.addEventListener('keydown', function (e) {

  if (e.key == 'а' || e.key == 'f') {
    const A = document.querySelector('.letter_1');
    new Audio('audio/audio-letters/gen-6.mp3').play();
    const wordValue = A.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'б' || e.key == ',') {
    const Б = document.querySelector('.letter_2');
    new Audio('audio/audio-letters/gen-7.mp3').play();
    const wordValue = Б.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'в' || e.key == 'd') {
    const В = document.querySelector('.letter_3');
    new Audio('audio/audio-letters/gen-8.mp3').play();
    const wordValue = В.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'г' || e.key == 'u') {
    const Г = document.querySelector('.letter_4');
    new Audio('audio/audio-letters/gen-9.mp3').play();
    const wordValue = Г.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'д' || e.key == 'l') {
    const Д = document.querySelector('.letter_5');
    new Audio('audio/audio-letters/gen-10.mp3').play();
    const wordValue = Д.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'е' || e.key == 't') {
    const Е = document.querySelector('.letter_6');
    new Audio('audio/audio-letters/gen-11.mp3').play();
    const wordValue = Е.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ё' || e.key == '`') {
    const Ё = document.querySelector('.letter_7');
    new Audio('audio/audio-letters/gen-12.mp3').play();
    const wordValue = Ё.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ж' || e.key == ';') {
    const Ж = document.querySelector('.letter_8');
    new Audio('audio/audio-letters/gen-13.mp3').play();
    const wordValue = Ж.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'з' || e.key == 'p') {
    const З = document.querySelector('.letter_9');
    new Audio('audio/audio-letters/gen-14.mp3').play();
    const wordValue = З.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'и' || e.key == 'b') {
    const И = document.querySelector('.letter_10');
    new Audio('audio/audio-letters/gen-15.mp3').play();
    const wordValue = И.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'й' || e.key == 'q') {
    const Й = document.querySelector('.letter_11');
    new Audio('audio/audio-letters/gen-16.mp3').play();
    const wordValue = Й.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'к' || e.key == 'r') {
    const К = document.querySelector('.letter_12');
    new Audio('audio/audio-letters/gen-17.mp3').play();
    const wordValue = К.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'л' || e.key == 'k') {
    const Л = document.querySelector('.letter_13');
    new Audio('audio/audio-letters/gen-18.mp3').play();
    const wordValue = Л.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'м' || e.key == 'v') {
    const М = document.querySelector('.letter_14');
    new Audio('audio/audio-letters/gen-19.mp3').play();
    const wordValue = М.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'н' || e.key == 'y') {
    const Н = document.querySelector('.letter_15');
    new Audio('audio/audio-letters/gen-20.mp3').play();
    const wordValue = Н.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'о' || e.key == 'j') {
    const О = document.querySelector('.letter_16');
    new Audio('audio/audio-letters/gen-21.mp3').play();
    const wordValue = О.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'п' || e.key == 'g') {
    const П = document.querySelector('.letter_17');
    new Audio('audio/audio-letters/gen-22.mp3').play();
    const wordValue = П.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'р' || e.key == 'h') {
    const Р = document.querySelector('.letter_18');
    new Audio('audio/audio-letters/gen-23.mp3').play();
    const wordValue = Р.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'с' || e.key == 'c') {
    const С = document.querySelector('.letter_19');
    new Audio('audio/audio-letters/gen-24.mp3').play();
    const wordValue = С.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'т' || e.key == 'n') {
    const т = document.querySelector('.letter_20');
    new Audio('audio/audio-letters/gen-25.mp3').play();
    const wordValue = т.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'у' || e.key == 'e') {
    const У = document.querySelector('.letter_21');
    new Audio('audio/audio-letters/gen-26.mp3').play();
    const wordValue = У.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ф' || e.key == 'a') {
    const Ф = document.querySelector('.letter_22');
    new Audio('audio/audio-letters/gen-27.mp3').play();
    const wordValue = Ф.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'х' || e.key == '[') {
    const Х = document.querySelector('.letter_23');
    new Audio('audio/audio-letters/gen-28.mp3').play();
    const wordValue = Х.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ц' || e.key == 'w') {
    const Ц = document.querySelector('.letter_24');
    new Audio('audio/audio-letters/gen-29.mp3').play();
    const wordValue = Ц.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ч' || e.key == 'x') {
    const Ч = document.querySelector('.letter_25');
    new Audio('audio/audio-letters/gen-30.mp3').play();
    const wordValue = Ч.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ш' || e.key == 'i') {
    const Ш = document.querySelector('.letter_26');
    new Audio('audio/audio-letters/gen-31.mp3').play();
    const wordValue = Ш.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'щ' || e.key == 'o') {
    const Щ = document.querySelector('.letter_27');
    new Audio('audio/audio-letters/gen-32.mp3').play();
    const wordValue = Щ.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ъ' || e.key == ']') {
    const Ъ = document.querySelector('.letter_28');
    new Audio('audio/audio-letters/gen-33.mp3').play();
    const wordValue = Ъ.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ы' || e.key == 's') {
    const Ы = document.querySelector('.letter_29');
    new Audio('audio/audio-letters/gen-34.mp3').play();
    const wordValue = Ы.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ь' || e.key == 'm') {
    const Ь = document.querySelector('.letter_30');
    new Audio('audio/audio-letters/gen-35.mp3').play();
    const wordValue = Ь.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'э' || e.key == "'") {
    const Э = document.querySelector('.letter_31');
    new Audio('audio/audio-letters/gen-36.mp3').play();
    const wordValue = Э.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'ю' || e.key == '.') {
    const Ю = document.querySelector('.letter_32');
    new Audio('audio/audio-letters/gen-37.mp3').play();
    const wordValue = Ю.textContent;
    word.textContent += wordValue;
  }
  if (e.key == 'я' || e.key == 'z') {
    const Я = document.querySelector('.letter_33');
    new Audio('audio/audio-letters/gen-38.mp3').play();
    const wordValue = Я.textContent;
    word.textContent += wordValue;
  }
  // Кнопка проверить
  if (e.key == ' ') {
    if (word.innerText == inputWord.innerText) {
      new Audio('audio/huge win.wav').play();
      overlay.classList.remove('none');
    } else {
      new Audio('audio/error-1.mp3').play();
    }
  }
  // Кнопка удаляет последнюю введенную букву
  if (e.key == 'Backspace') {
    new Audio('audio/cowbell.mp3').play();
    word.textContent = word.textContent.slice(0, -1);
  }
  //Кнопка сброса очищяет поле вода
  if (e.key == 'Escape') {
    new Audio('audio/delete.mp3').play();
    word.textContent = "";
  }
  // Следующее слово
  if (e.key == 'ArrowLeft') {
    currentIndex = (currentIndex - 1 + data.length) % data.length;
    updateDisplay();
    new Audio('audio/schelchok.mp3').play();
    word.textContent = "";
  }
  // Предыдущее слово
  if (e.key == 'ArrowRight') {
    currentIndex = (currentIndex + 1) % data.length;
    updateDisplay();
    new Audio('audio/schelchok.mp3').play();
    word.textContent = "";
  }
  // Убрать салют
  if (e.key == 'Escape') {
    overlay.classList.add('none');
  }
});