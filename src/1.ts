/*
  Клас Student, який містить три властивості: name, age та grade. 
  Замість того, щоб оголошувати ці властивості в тілі класу, потім у конструкторі, і нарешті надавати їм значення, 
  напишіть скорочену ініціалізацію.
*/

//? 1 variant ?//

// class Student {
//   constructor(public name: string, public age: number, public grade: string) {}
// }

///OR

//* 2 variant *//

class Student {
  constructor(public name: string, public age: number, public grade: string) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
}

export { Student };
