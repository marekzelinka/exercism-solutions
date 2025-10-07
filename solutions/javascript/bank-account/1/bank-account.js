//
// This is only a SKELETON file for the 'Bank Account' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class BankAccount {
  constructor() {
    this.isOpen = false;
    this._balance = 0;
  }

  open() {
    if (this.isOpen) {
      throw new ValueError();
    }
  
    this.isOpen = true;
  }

  close() {
    if (!this.isOpen) {
      throw new ValueError();
    }
  
    this.isOpen = false;
    this._balance = 0;
  }

  deposit(amount) {
    if (!this.isOpen) {
      throw new ValueError();
    } else if (amount < 0) {
      throw new ValueError();
    }

    this._balance += amount;
  }

  withdraw(amount) {
    if (!this.isOpen) {
      throw new ValueError();
    } else if (amount < 0) {
      throw new ValueError();
    } else if (amount > this._balance) {
      throw new ValueError();
    }
  
    this._balance -= amount;
  }

  get balance() {
    if (!this.isOpen) {
      throw new ValueError();
    }

    return this._balance;
  }

  set balance(balance) {
    throw new Error();
  }
}

export class ValueError extends Error {
  constructor() {
    super('Bank account error');
  }
}
