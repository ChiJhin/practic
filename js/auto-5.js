"use strict";

// ----------1-----------

// const pizzaPalace = {
//     pizzas: ["Supercheese", "Smoked", "Four meats"],
//     // Change code below this line
//     checkPizza(pizzaName) {
//     return this.pizzas.includes(pizzaName);
//     },
//     order(pizzaName) {
//       const isPizzaAvailable = this.checkPizza(pizzaName);

//       if (!isPizzaAvailable) {
//         return `Sorry, there is no pizza named «${pizzaName}»`;
//       }

//       return `Order accepted, preparing «${pizzaName}» pizza`;
//     },
//     // Change code above this line
//   };

//   console.log(pizzaPalace.order('Smoked'))

//  ------------------10---------------

// class Storage {
//     constructor(items) {
//       this.items = items;
//     };
//     getItems() {
//       return this.items;
//     };
//     addItem(newItem) {
//       this.items.push(newItem);
//     };
//     removeItem(itemToRemove) {
//       this.items = this.items.filter(item => item !== itemToRemove)
//     };
//   };

//   // Change code above this line
//   const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
//   storage.addItem("Droid");
//   console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
//   storage.removeItem("Prolonger");
//   console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// ----------------------11----------------------

// class StringBuilder {
//     constructor(initialValue) {
//       this.value = initialValue;
//     }
//     getValue() {
//       return this.value;
//     };
//     padEnd(str) {
//       this.value = this.value + str;
//     };
//     padStart(str) {
//       this.value = str + this.value;
//     };
//     padBoth(str) {
//         this.value = str + this.value;
//         this.value = this.value + str;
//     };
//   }

//   // Change code above this line
//   const builder = new StringBuilder(".");
//   console.log(builder.getValue()); // "."
//   builder.padStart("^");
//   console.log(builder.getValue()); // "^."
//   builder.padEnd("^");
//   console.log(builder.getValue()); // "^.^"
//   builder.padBoth("=");
//   console.log(builder.getValue()); // "=^.^="

// ----------------------16----------------------

// class Car {
//   // Change code below this line

//   static MAX_PRICE = 50000;

//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice < Car.MAX_PRICE) {
//      return this.#price = newPrice;
//     }
//   }
//   // Change code above this line
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklistedEmails = [];

//   blacklist(email) {
//     return this.blacklistedEmails.push(email);
//   };
//   isBlacklisted(email) {
//     return this.blacklistedEmails.includes(email);
//   };

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true
