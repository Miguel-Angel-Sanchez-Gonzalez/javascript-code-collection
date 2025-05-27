// Solución al ejercicio de Exercism: "Bank Account"
// Enunciado tomado de Exercism.org

export class BankAccount {
  constructor() {
    this.money = 0;
    this.statusAccount = false;
  }

  open() {
    if (this.statusAccount) {
      throw new ValueError("Account is already open");
    }
    this.statusAccount = true;
    this.money = 0;
  }

  close() {
    if (!this.statusAccount) {
      throw new ValueError("Account is not open");
    }
    this.statusAccount = false;
  }

  deposit(amount) {
    if (!this.statusAccount) {
      throw new ValueError("Account is not open");
    }
    if (amount < 0) {
      throw new ValueError("Deposit amount cannot be negative");
    }
    this.money += amount;
  }

  withdraw(amount) {
    if (!this.statusAccount) {
      throw new ValueError("Account is not open");
    }
    if (amount < 0) {
      throw new ValueError("Withdrawal amount cannot be negative");
    }
    if (amount > this.money) {
      throw new ValueError("Cannot withdraw more than current balance");
    }
    this.money -= amount;
  }

  get balance() {
    if (!this.statusAccount) {
      throw new ValueError("Account is not open");
    }
    return this.money;
  }
}

export class ValueError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValueError";
  }
}

// Test cases
const account = new BankAccount();
account.open();
account.deposit(100);
account.withdraw(200);
account.close();
