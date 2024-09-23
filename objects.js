// Digital Library System

// Task 1: Constructor Function for Book
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

// Task 2: Method to Display Book Information
Book.prototype.displayInfo = function() {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
};

function formatBookTitles() {
    return library.map(book => ({
        title: `Title: ${book.title}`,
        author: `Author: ${book.author}`,
        pages: book.pages
    }));
}

// Banking Application

// Task 1: Constructor Function for Account
function Account(accountNumber, owner) {
    this.accountNumber = accountNumber;
    this.balance = 0;
    this.owner = owner;
}

// Task 2: Methods to Deposit and Withdraw Funds
Account.prototype.deposit = function(amount) {
    this.balance += amount;
    return this.balance;
};

Account.prototype.withdraw = function(amount) {
    if (amount > this.balance) {
        return "Insufficient funds";
    }
    this.balance -= amount;
    return this.balance;
};

// Task 3: Method to Calculate Compound Interest
Account.prototype.calculateInterest = function(years, rate) {
    const principal = this.balance;
    const n = 1; // compounded annually
    const amount = principal * Math.pow((1 + rate), years);
    return Math.ceil(amount);
};
