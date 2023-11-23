"use strict";

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number)
//         }
//     })

//     // Change code above this line
//     return filteredNumbers;
//   }

// const filtred = filterArray([12, 24, 8, 41, 76], 20);

// console.log(filtred);

// const pureMultiply = (array, value) => {
//     const newArray = [];

//     array.forEach(element => {
//       newArray.push(element * value);
//     });

//     return newArray;
//   };

//   const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = pureMultiply(numbers, 2);

//   // Мутація вихідних даних не відбулася
//   console.log(numbers); // [1, 2, 3, 4, 5]
//   // Функція повернула новий масив зі зміненими даними
//   console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element)
//         }
//     });

//     return commonElements;
//     // Change code above this line
//   }

// const changeEven = (numbers, value) => {
//     // Change code below this line
// const allNumbers = []
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             allNumbers.push(number + value)
//         } else {allNumbers.push(number)}

//     });

//     return allNumbers;
//   }
// const array = changeEven([1, 2, 3, 4, 5], 10)
//   console.log(array)

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
//   };
//   const playtimes = Object.values(players); // [1270, 468, 710, 244]
//   // Change code below this line

//   const totalPlayTime = playtimes.reduce((totalTime, playtime) =>
//              totalTime + playtime);

//   // Change code above this line
//   const averagePlayTime = totalPlayTime / playtimes.length;

//   console.log(totalPlayTime)

// const books = [
//     {
//       title: "The Last Kingdom",
//       author: "Bernard Cornwell",
//       rating: 8.38,
//     },
//     {
//       title: "Beside Still Waters",
//       author: "Robert Sheckley",
//       rating: 8.51,
//     },
//     {
//       title: "The Dream of a Ridiculous Man",
//       author: "Fyodor Dostoevsky",
//       rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
//   ];
//   // Change code below this line

//   const sortedByAuthorName = [...books].map( ({author}) => author).sort((a, b) => a.localeCompare(b));

//   const sortedByReversedAuthorName = [...books].map( ({author}) => author).sort((a, b) => b.localeCompare(a));

// const sortedByAscendingRating = [...books].map( ({rating}) => rating).sort((a, b) => a - b);

// const sortedByDescentingRating = [...books].map( ({rating}) => rating).sort((a, b) => b - a);

// console.log(sortedByAscendingRating);

const users = [
  {
    name: "Moore Hensley",
    email: "moorehensley@indexia.com",
    eyeColor: "blue",
    friends: ["Sharron Pace"],
    isActive: false,
    balance: 2811,
    gender: "male",
  },
  {
    name: "Sharlene Bush",
    email: "sharlenebush@tubesys.com",
    eyeColor: "blue",
    friends: ["Briana Decker", "Sharron Pace"],
    isActive: true,
    balance: 3821,
    gender: "female",
  },
  {
    name: "Ross Vazquez",
    email: "rossvazquez@xinware.com",
    eyeColor: "green",
    friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
    isActive: false,
    balance: 3793,
    gender: "male",
  },
  {
    name: "Elma Head",
    email: "elmahead@omatom.com",
    eyeColor: "green",
    friends: ["Goldie Gentry", "Aisha Tran"],
    isActive: true,
    balance: 2278,
    gender: "female",
  },
  {
    name: "Carey Barr",
    email: "careybarr@nurali.com",
    eyeColor: "blue",
    friends: ["Jordan Sampson", "Eddie Strong"],
    isActive: true,
    balance: 3951,
    gender: "male",
  },
  {
    name: "Blackburn Dotson",
    email: "blackburndotson@furnigeer.com",
    eyeColor: "brown",
    friends: ["Jacklyn Lucas", "Linda Chapman"],
    isActive: false,
    balance: 1498,
    gender: "male",
  },
  {
    name: "Sheree Anthony",
    email: "shereeanthony@kog.com",
    eyeColor: "brown",
    friends: ["Goldie Gentry", "Briana Decker"],
    isActive: true,
    balance: 2764,
    gender: "female",
  },
];

//   const sortByAscendingBalance = users =>

// [...users].sort((first, second) => first.balance - second.balance);

// console.log(sortByAscendingBalance(users))

// const sortByDescendingFriendCount = users =>
//    [...users].sort((first, second) => second.friends.length - first.friends.length);

// // Change code below this line
// const getNamesSortedByFriendCount = users =>
//   [...users].sort((a, b) => a.friends.length - b.friends.length).map(book => book.name);

// // Change code above this line

// console.log(getNamesSortedByFriendCount(users))

// const getSortedFriends = users =>

// first Method

//     const friends = [...users].flatMap(user => user.friends);
//     const filterFriends = friends.filter(
//         (friend, index, array) => array.indexOf(friend) === index
//       );
//       const sortFriends = filterFriends.sort((a, b) => a.localeCompare(b))
// console.log(sortFriends)

// srcond Method

// [...users].flatMap(user => user.friends).filter(
//         (friend, index, array) => array.indexOf(friend) === index
//       ).sort((a, b) => a.localeCompare(b));

// console.log(getSortedFriends(users))

const getTotalBalanceByGender = (users, gender) =>
  [...users]
    .filter((user) => user.gender === gender)
    .reduce(
      (usersBalance, user, index, array) => usersBalance + user.balance,
      0
    );

console.log(getTotalBalanceByGender(users, "male"));
