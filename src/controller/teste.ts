import { Person } from "../model/Person";

let person = new Person(`João`, `12345678`,new Date(2004,9,8),`16999999`,`rua ndejiwjnfi`,1.78,75);

person.speak();
person.speakPhrase(`HBFHUHDBVDJBCWYDU`);

person.walk();
person.walkKm(`10kms`);

person.eat();
person.eatDish(`pizza`)

let pessoa = new Person(`marys`, `24687654`, new Date(1999, 9,9), `8085967392`, `rua`, 157, 55)
person.cadastroPessoa(person);