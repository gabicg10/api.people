import { Person } from "../model/Person";

let person = new Person(`João`,
                     `12345678`,   
                     new Date(2004,9,8), 
                     `16999999`, 
                     `rua ndejiwjnfi`
                     ,1.78,
                      75);

person.speak();
person.speakPhrase(`HBFHUHDBVDJBCWYDU`);

person.walk();
person.walkKm(`10kms`);

person.eat();
person.eatDish(`pizza`)
