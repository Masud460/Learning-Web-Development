class BankAccount {
    constructor(accountHolder, balance = 0) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        return `Deposited: ${amount}, Total balance: ${this.balance}`
    }

    withdraw(amount) {
        if (amount > this.balance) {
            return `Insufficient funds`
        } else {
            this.balance -= amount;
            return `${amount} withdrawed, remaining balance: ${this.balance}`
        }
    }
}

const account = new BankAccount('Ataullah Masud', 10000000);
console.log(account.deposit(100000))
console.log(account.withdraw(100000))