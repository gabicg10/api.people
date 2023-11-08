"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    //método construtor
    constructor(_name, _CPF, _birthDate, _phone, _adress, _height, _weight) {
        this.name = _name;
        this.CPF = _CPF;
        this.birthDate = _birthDate;
        this.phone = _phone;
        this.adress = _adress;
        this.height = _height;
        this.weight = _weight;
    }
    //métodos GETTERS & SETTERS
    /**
     * retorna o nome da pessoa
     * @returns
     */
    getName() {
        return this.name;
    }
    /**
     * atribui o nome da pessoa
     * @param _name
     * nome da pessoa
     */
    setName(_name) {
        this.name = _name;
    }
    /**
     * retorna o cpf da pessoa
     * @returns cpf = _cpf
     */
    getCPF() {
        return this.CPF;
    }
    /**
     * atribui o cpf da pessoa
     * @param _CPF
     * cpf da pessoa
     */
    setCPF(_CPF) {
        this.CPF = _CPF;
    }
    /**
     * retorna a data de nascimento da pessoa
     * @returns
     */
    getbirthDate() {
        return this.birthDate;
    }
    /**
     * atribui data de nascimento da pessoa
     * @param _birthDate
     * data de nascimento da pessoa
     */
    setbirthDate(_birthDate) {
        this.birthDate = _birthDate;
    }
    /**
     * retorna o telefone da pessoa
     * @returns
     */
    getPhone() {
        return this.phone;
    }
    /**
     * atribui o telefone da pessoa
     * @param _phone
     * telefone da pessoa
     */
    setPhone(_phone) {
        this.phone = _phone;
    }
    /**
     * retorna o endereço da pessoa
     * @returns
     */
    getAdress() {
        return this.adress;
    }
    /**
     * atribui endereço da pessoa
     * @param _adress
     * endereço da pessoa
     */
    setAdress(_adress) {
        this.adress = _adress;
    }
    /**
     * retorna a altura da pessoa
     * @returns
     */
    getHeight() {
        return this.height;
    }
    /**
     * atribui altura a pessoa
     * @param _height
     * altura da pessoa
     */
    setHeight(_height) {
        this.height = _height;
    }
    /**
     * retorna o peso da pessoa
     * @returns
     */
    getWeight() {
        return this.weight;
    }
    /**
     * atribui peso a pessoa
     * @param _weight
     * peso da pessoa
     */
    setWeight(_weight) {
        this.weight = _weight;
    }
    //metodo mostrar pessoa
    showPerson() {
        console.log(`name: ${this.name}, cpf: ${this.CPF}, birthdate: ${this.birthDate}, phone: ${this.phone}, adress: ${this.adress}, height: ${this.height}, weight: ${this.weight}`);
    }
    //implementar os metodos
    speak() {
        //logica de negocio
        console.log(`${this.name} is speaking`);
    }
    speakPhrase(_phrase) {
        //lógica de negocio
        console.log(`${this.name} spoke: ${_phrase}`);
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
    walkKm(_km) {
        console.log(`${this.name} walked ${_km}`);
    }
    eat() {
        console.log(`${this.name} is eating`);
    }
    eatDish(_dish) {
        console.log(`${this.name} ate ${_dish}`);
    }
    /**CRUD */
    cadastroPessoa(pessoa) {
        console.log(`${pessoa.name} cadastrada com sucesso!!!!`);
    }
}
exports.Person = Person;
//# sourceMappingURL=Person.js.map