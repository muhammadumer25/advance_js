class bank{
    #balance;
    constructor(n, balance){
        this.name = n;
        this.#balance = balance;
}
deposit(amount){
    this.#balance += amount;
}
withdraw(amount){
    this.#balance -= amount;
}
getBalance(){
    return this.#balance;
}

};


let customer1 = new bank("john", 1000);

console.log(`${customer1.name}`);
// console.log(`${customer1.balance}`);

console.log(customer1.getBalance());