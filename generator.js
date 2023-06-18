let quotes = [
  " Everybody is a genius. But if you judge a fish by its ability to climb a tree, it will live its whole life believing that it is stupid. ",
  " Yesterday is history, Tomorrow is a mystery, but Today is a gift. That is why it is called the present. ",
  " That's one small step for a man, a giant leap for mankind. ",
  " When you don't feel good remember there is a country that cuts off internet for a week because of a national exam.",
  " If we think of our time as money we are actually valuing our time very poorly. ",
  " On ne voit bien qu'avec le coeur l'essentiel est invisible pour les yeux. ",
  "Kindness is the language that the deaf can hear, the blind can see and the mute can speak.",
  "The world is full of nice people if you can't find one be one.",
  "A person who won't read has no advantage over a person who can't read.",
  "You only live once, but if you do it right, once is enough.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Life would be tragic if it weren't funny.",
  "May the flowers remind us why the rain was so necessary.",
  "Always stay positive.",
];

let authors = [
  "Albert Einstein",
  "Oogway ",
  "Neil Armstrong",
  "A fellow Algerian",
  "Roman Philosopher Sineca",
  "Le petit Prince",
  "Mark Twain",
  "Nishan Panwar",
  "Mark Twain",
  "Mae West",
  "Albert Einstein",
  "Stephen Hawking",
  "Xan oku",
  "Isma",
];

function getQuote() {
  var randomNumber = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[randomNumber];
  document.getElementById("author").innerHTML = authors[randomNumber];
}
//create a favourite list and add/delete the selected quotes

let addButton = document.getElementById("fav");
let Container = document.getElementById("favContainer");
let list = document.createElement("ul");

addButton.addEventListener("click", function () {
  let quoteElement = document.getElementById("quote").textContent;
  let authorElement = document.getElementById("author").textContent;

  let element = document.createElement("li");
  element.style.color = "#ffbec8";
  element.textContent = quoteElement + " - " + authorElement;

  Container.appendChild(element);

  element.addEventListener("click", function () {
    element.style.textDecoration = "line-through";
  });

  element.addEventListener("dblclick", function () {
    Container.removeChild(element);
  });
});

// function that shows the selected box

let tabs = document.querySelectorAll(".tabs li");
let tabsArray = Array.from(tabs);
let cards = document.querySelectorAll(".cards > div");
let cardsArray = Array.from(cards);
tabsArray.forEach((ele) => {
  ele.addEventListener("click", function (e) {
    tabsArray.forEach((ele) => {
      ele.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    cardsArray.forEach((div) => {
      div.style.display = "none";
    });
    document.querySelector(e.currentTarget.dataset.cont).style.display =
      "block";
  });
});
