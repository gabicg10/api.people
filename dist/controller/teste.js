"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = require("../model/Pessoa");
let person = new Pessoa_1.Pessoa(`João`, `12345678`, new Date(2004, 9, 8), `16999999`, `rua ndejiwjnfi`, 1.78, 75);
person.speak();
person.speakPhrase(`HBFHUHDBVDJBCWYDU`);
person.walk();
person.walkKm(`10kms`);
person.eat();
person.eatDish(`pizza`);
let pessoa = new Pessoa_1.Pessoa(`marys`, `24687654`, new Date(1999, 9, 9), `8085967392`, `rua`, 157, 55);
person.cadastroPessoa(person);
//# sourceMappingURL=teste.js.map