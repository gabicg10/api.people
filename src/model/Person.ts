export class Person{
    // atibutos da classe
    private name: string;
    private CPF: string;
    private birthDate: Date;
    private phone: string;
    private adress: string;
    private height: number;
    private weight: number;

    //método construtor
    public constructor (_name:string, _CPF:string, _birthDate:Date, _phone:string, _adress:string, _height:number, _weight:number){
        this.name = _name;
        this.CPF = _CPF;
        this.birthDate = _birthDate;
        this.phone = _phone;
        this.adress =_adress;
        this.height = _height;
        this.weight = _weight;
    }

    //métodos GETTERS & SETTERS

    /**
     * retorna o nome da pessoa
     * @returns 
     */
    public getName(){
        return this.name;
    }
    /**
     * atribui o nome da pessoa
     * @param _name 
     * nome da pessoa
     */
    public setName(_name:string){
        this.name = _name;
    }

    /**
     * retorna o cpf da pessoa
     * @returns cpf = _cpf
     */
    public getCPF(){
        return this.CPF;
    }
    /**
     * atribui o cpf da pessoa
     * @param _CPF 
     * cpf da pessoa
     */
    public setCPF(_CPF:string){
        this.CPF = _CPF;
    }
    
    /**
     * retorna a data de nascimento da pessoa
     * @returns 
     */
    public getbirthDate(){
        return this.birthDate;
    }
    /**
     * atribui data de nascimento da pessoa
     * @param _birthDate 
     * data de nascimento da pessoa
     */
    public setbirthDate(_birthDate:Date){
        this.birthDate = _birthDate;
    }

    /**
     * retorna o telefone da pessoa
     * @returns 
     */
    public getPhone(){
        return this.phone;
    }
    /**
     * atribui o telefone da pessoa
     * @param _phone 
     * telefone da pessoa
     */
    public setPhone(_phone:string){
        this.phone = _phone;
    }

    /**
     * retorna o endereço da pessoa
     * @returns 
     */
    public getAdress(){
        return this.adress;
    }
    /**
     * atribui endereço da pessoa
     * @param _adress 
     * endereço da pessoa
     */
    public setAdress(_adress:string){
        this.adress = _adress;
    }

    /**
     * retorna a altura da pessoa
     * @returns 
     */
    public getHeight(){
        return this.height;
    }
    /**
     * atribui altura a pessoa
     * @param _height 
     * altura da pessoa
     */
    public setHeight(_height:number){
        this.height = _height;
    }

    /**
     * retorna o peso da pessoa
     * @returns 
     */
    public getWeight(){
        return this.weight;
    }
    /**
     * atribui peso a pessoa
     * @param _weight 
     * peso da pessoa
     */
    public setWeight(_weight:number){
        this.weight = _weight;
    }

    //metodo mostrar pessoa
    public showPerson(){
        console.log(`name: ${this.name}, cpf: ${this.CPF}, birthdate: ${this.birthDate}, phone: ${this.phone}, adress: ${this.adress}, height: ${this.height}, weight: ${this.weight}`);
    }
    
    //implementar os metodos
    public speak(){
        //logica de negocio
        console.log(`${this.name} is speaking`);
    }
    public speakPhrase(_phrase:string){
        //lógica de negocio
        console.log(`${this.name} spoke: ${_phrase}`);
    }

    public walk(){
        console.log(`${this.name} is walking`)
    }
    public walkKm(_km:string){
        console.log(`${this.name} walked ${_km}`)
    }

    public eat(){
        console.log(`${this.name} is eating`)
    }
    public eatDish(_dish: string){
        console.log(`${this.name} ate ${_dish}`)
    }

    /**CRUD */
    cadastroPessoa(pessoa: Person) {
        console.log(`${pessoa.name} cadastrada com sucesso!!!!`);
    }
}