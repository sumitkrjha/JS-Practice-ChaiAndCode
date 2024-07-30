// Task 9 : Define a class Account with private fields for balance and a method to deposit and withdraw money. Ensure that the balance can only be updated through these methods.

class Account {
  #balance = 0;
  deposit(sum) {
    this.#balance += sum;
    console.log(`After deposit of ${sum} your new Balance is ${this.#balance}`);
  }
  withdraw(sum) {
    if (sum > this.#balance) {
      console.log(
        `Low Balance! Your account's balance is only ${this.#balance}`
      );
      return;
    } else {
      this.#balance -= sum;
      console.log(
        `After withdraw of sum ${sum} your new Balance is ${this.#balance}`
      );
    }
  }
}

// Create an instance of the Account class and test the deposit and withdraw methods, logging the balance after each opertaion.
const newAccount = new Account();
newAccount.deposit(1500);
newAccount.withdraw(500);
newAccount.withdraw(500);
newAccount.withdraw(600);
