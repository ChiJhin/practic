'use strict';

// const Abuser = function ({ email, password } = {}) {
//   this.email = email;
//   this.password = password;
// };

// const dima = new Abuser({
//   email: "buba@gmail.com",
//   password: "bars25",
// });

// console.log(dima);

// class User {
//   // Необов'язкове оголошення публічних властивостей
//   name;
//   // Обов'язкове оголошення приватних властивостей
//   #email;

//   constructor({ name, email }) {
//     this.name = name;
//     this.#email = email;
//   }

//   get email() {
//     return this.#email;
//   }

//   set email(newEmail) {
//     if (newEmail === "") {
//       console.error("Помилка! Пошта не може бути порожнім рядком!");
//       return;
//     }

//     this.#email = newEmail;
//   }
// }

// const mango = new User({
//   name: "Манго",
//   email: "mango@mail.com",
// });
// mango.email = "mango@supermail.com";
// console.log(mango.email); // mango@supermail.com
// console.log(mango);
// mango.name = "Buba";
// console.log(mango);

// class User {
//   static #takenEmails = [];

//   static isEmailTaken(email) {
//     return User.#takenEmails.includes(email);
//   }

//   #email;

//   constructor({ email }) {
//     this.#email = email;
//     User.#takenEmails.push(email);
//   }
// }

// const mango = new User({ email: "mango@mail.com" });

// console.log(User.isEmailTaken("poly@mail.com"));
// console.log(User.isEmailTaken("mango@mail.com"));

// function squareSum (numbers) {
//   let sum = 0;
//   for (number of numbers) {
//     sum += Math.pow(number, 2);
//   }
//   console.log(sum);
// }

// squareSum([1, 2])

// const random = Math.random() * (10 - 1) + 1;  // Math.random() * (max - min) + min

// console.log(Math.round(random));

// const jsFileName = "script.js";
// const minifiedJsFileName = jsFileName.replace(".js", ".min.js");
// console.log(minifiedJsFileName); // "script.min.js"
// console.log(jsFileName);

// let counter = 0;

// while (counter < 10) {
//   console.log("counter: ", counter);
//   counter += 1;
// }
// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const colors = ["teal", "black", "green", "blue"];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);

// function checkForSpam(message) {
//   let result;
//   // Change code below this line
//   const check = message.toLowerCase();
//   result = check.includes("spam") || check.includes("sale");
//   // Change code above this line
//   return result;
// }
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// function withdraw(amount, balance) {
//   if (amount === 0) {
//     console.log("Для проведення операції введіть суму більшу за нуль");
//     return;
//   }
//   if (amount > balance) {
//     console.log("Недостатньо коштів на рахунку");
//     return;
//   }
//   console.log("Операція зняття коштів проведена");
// }

// withdraw(0, 300);
// withdraw(500, 300);
// withdraw(100, 300);

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   isPublic: true,
//   rating: 8.38,
// };

// book.pageCount = 836;
// book.originalLanguage = "en";
// book.translations = ["ua", "ru"];

// console.log(book.pageCount); // 836
// console.log(book.originalLanguage); // 'en'
// console.log(book.translations); // ['ua', 'ru']
// console.log(book);

// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   },
//   removeBook(bookName) {
//     this.books.splice(this.books.indexOf(bookName), 1);
//     // Або  const bookIndex = this.books.indexOf(bookName);
//     //      this.books.splice(bookIndex, 1);
//   },
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ['The Last Kingdom', 'The Mist', 'Dream Guardian']
// bookShelf.removeBook("The Mist");
// console.log(bookShelf.getBooks());

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значення властивості з таким ключем
//   console.log(book[key]);
// }

// const scores = [12, 32, 43, 94, 75];

// const fnA = function (items) {
//   console.log("Function A");
//   let total = 0;

//   for (const item of items) {
//     total += item;
//   }
//   return total;
// };

// console.log(fnA(scores));

// var arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3, "A"];

// var uniqueArray = arr1.filter(function (elem, i, rep) {
//   return i === rep.indexOf(elem);
// });
// console.log(uniqueArray);

// const total = [2, 7, 3, 14, 6].reduce((previousValue, number) => {
//   return previousValue + number;
// }, 1);
// console.log(total);

// const a = [2, 7, 3, 14, 6];

// const b = [...a];

// console.log(b);

// b[3] = 7;
// console.log(b);
// console.log(a);

// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];

// const getTags = (tweets) =>
//   tweets.reduce((allTags, tweet) => {
//     allTags.push(...tweet.tags);

//     return allTags;
//   }, []);

// const tags = getTags(tweets);

// console.log(tags);

// // Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// // Це стандартна практика, якщо callback-функція досить велика.

// // Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// // то створюємо її і записуємо їй значення 0.
// // В іншому випадку збільшуємо значення на 1.
// const getTagStats = (acc, tag) => {
//   if (!acc.hasOwnProperty(tag)) {
//     acc[tag] = 0;
//   }

//   acc[tag] += 1;

//   return acc;
// };

// // Початкове значення акумулятора - це порожній об'єкт {}
// const countTags = (tags) => tags.reduce(getTagStats, {});

// const tagCount = countTags(tags);
// console.log(tagCount);

// console.log(document);

// const body = document.body;
// console.log(body);

// const list = document.querySelector('.list');
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastListItem = list.lastElementChild;
// console.log(lastListItem);

// const listItems = list.children;
// console.log(listItems);

// const saveBtn = document.querySelector('button[data-action="save"]');
// console.log(saveBtn.dataset.action);

// const closeBtn = document.querySelector('button[data-action="close"]');
// console.log(closeBtn.dataset.action);

// const link = document.querySelector('.link');
// console.log(link.classList);

// const hasActiveClass = link.classList.contains('is-active');
// console.log(`hasActiveClass - ${hasActiveClass}`);

// link.classList.add('special');
// console.log(link.classList);

// link.classList.remove('is-active');
// console.log(link.classList);

// link.classList.toggle('is-active');
// console.log(link.classList);

// link.classList.replace('special', 'regular');
// console.log(link.classList);

// const technologies = ['HTML', 'CSS', 'JavaScript', 'React', 'Node'];
// const list = document.querySelector('.list');

// const markup = technologies
//   .map(technology => `<li class="list-item">${technology}</li>`)
//   .join('');
// console.log(markup);

// list.innerHTML = markup;

// const Client = function (name, weight, height) {
//   this.name = name;
//   this.weight = weight;
//   this.height = height;
//   this.bodyMassIndex = function () {
//     const index = this.weight / (this.height * this.height * 0.1);
//     return `Client ${this.name} has body mass index ${index.toFixed(3)}`;
//   };
//   return { client: 'New client of the fitness club' };
// };

// const john = new Client('John', 80, 170);
// console.log(john);
// console.log(document);

// const body = document.body;
// console.log(body);

// const list = document.querySelector('.list');
// console.log(list);

// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastListItem = list.lastElementChild;
// console.log(lastListItem);

// const listItems = list.childNodes;
// console.log(listItems);

// const listElItems = list.children;
// console.log(listElItems);

// const listItem3 = list.childNodes[3];
// console.log(listItem3);

// const firstItem = listItem3.previousElementSibling;
// console.log(firstItem);

const date = new Date();

console.log(date);
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"

console.log(date.toString());
// "Fri Jun 18 2021 15:01:35 GMT+0300 (Eastern European Summer Time)"
