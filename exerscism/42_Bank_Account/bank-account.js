// Solución al ejercicio de Exercism: "Bank Account"
// Enunciado tomado de Exercism.org

export class BankAccount {
  constructor() {
    this.money = 0;
    this.statusAccount = false;
  }

  open() {
    if (this.statusAccount) {
      throw new ValueError();
    }
    this.statusAccount = true;
    this.money = 0;
  }

  close() {
    if (!this.statusAccount) {
      throw new ValueError();
    }
    this.statusAccount = false;
  }

  deposit(amount) {
    if (!this.statusAccount) {
      throw new ValueError();
    }
    if (amount < 0) {
      throw new ValueError();
    }
    this.money += amount;
  }

  withdraw(amount) {
    if (!this.statusAccount) {
      throw new ValueError();
    }
    if (amount < 0 || amount > this.money) {
      throw new ValueError();
    }
    this.money -= amount;
  }

  get balance() {
    if (!this.statusAccount) {
      throw new ValueError();
    }
    return this.money;
  }
}

export class ValueError extends Error {
  constructor() {
    super("Bank account error");
  }
}

// Test cases
const account = new BankAccount();
account.open();
account.deposit(100);
account.withdraw(200);
account.withdraw(80);
account.close();
