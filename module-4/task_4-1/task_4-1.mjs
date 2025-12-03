"use strict";
import { printOut, newLine } from "../../common/script/utils.mjs";

printOut("--- Part 1 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Oppgave 1");

const Accounttype = {
    Normal: "Brukskonto",
    Savings: "Sparekonto",
    Credit: "Kredittkonto",
    Pension: "Pensjonskonto"
};
const CurrencyTypes = {
  NOK: { value: 1.0000, name: "Norske kroner", denomination: "kr" },
  EUR: { value: 0.0985, name: "Europeiske euro", denomination: "€" },
  USD: { value: 0.1091, name: "United States dollar", denomination: "$" },
  GBP: { value: 0.0847, name: "Pound sterling", denomination: "£" },
  INR: { value: 7.8309, name: "Indiske rupee", denomination: "₹" },
  AUD: { value: 0.1581, name: "Australske dollar", denomination: "A$" },
  PHP: { value: 6.5189, name: "Filippinske peso", denomination: "₱" },
  SEK: { value: 1.0580, name: "Svenske kroner", denomination: "kr" },
  CAD: { value: 0.1435, name: "Canadiske dollar", denomination: "C$" },
  THB: { value: 3.3289, name: "Thai baht", denomination: "฿" }
};
printOut(Object.values(Accounttype).join(", "));

printOut(newLine);

printOut("--- Part 2 ----------------------------------------------------------------------------------------------");
/* Put your code below here!*/
printOut("Oppgave 2");

class TAccount {
    #type;
    #balance = 0;
    #withdrawCount = 0;
    #currencyType = "NOK";

    constructor(aType) {
        this.#type = aType;
    }

    toString() {
        return this.#type;
    }

    setType(aType) {
        printOut(`Account is changed from ${this.#type} to ${aType}`);
        this.#type = aType;
        this.#withdrawCount = 0;
    }

    getBalance() {
        return this.#balance;
    }

    // ---------- Part 7: deposit kan ta beløp i annen valuta ----------
    deposit(aAmount, aType = this.#currencyType) {
        // konverter beløpet til kontovaluta
        const amountInAccountCurrency = this.#convertAmount(aAmount, aType, this.#currencyType);

        this.#balance += amountInAccountCurrency;
        this.#withdrawCount = 0;

        const accountSymbol = CurrencyTypes[this.#currencyType].denomination;
        const inputSymbol = CurrencyTypes[aType].denomination;

        printOut(
            `Deposit of ${aAmount}${inputSymbol} (${amountInAccountCurrency.toFixed(2)}${accountSymbol}), new balance is ${this.#balance.toFixed(2)}${accountSymbol}`
        );
    }

    // ---------- Part 7: withdraw kan ta beløp i annen valuta ----------
    withdraw(aAmount, aType = this.#currencyType) {
        switch (this.#type) {
            case Accounttype.Pension:
                printOut("You can't withdraw from a Pensionskonto!");
                return;
            case Accounttype.Savings:
                if (this.#withdrawCount >= 3) {
                    printOut("You can't Withdraw from a Sparekonto more than three times!");
                    return;
                }
                break;
        }

        // konverter beløpet til kontovaluta
        const amountInAccountCurrency = this.#convertAmount(aAmount, aType, this.#currencyType);

        if (this.#balance < amountInAccountCurrency) {
            printOut("Withdrawal failed: insufficient funds");
            return;
        }

        this.#balance -= amountInAccountCurrency;
        this.#withdrawCount++;

        const accountSymbol = CurrencyTypes[this.#currencyType].denomination;
        const inputSymbol = CurrencyTypes[aType].denomination;

        printOut(
            `Withdrawal of ${aAmount}${inputSymbol} (${amountInAccountCurrency.toFixed(2)}${accountSymbol}), new balance is ${this.#balance.toFixed(2)}${accountSymbol}`
        );
    }

    setCurrencyType(aType) {
        if (this.#currencyType === aType) return;
        const oldCurrency = this.#currencyType;

        this.#balance = this.#currencyConvert(aType);
        this.#currencyType = aType;
        printOut(
            `The account currency has change from ${CurrencyTypes[oldCurrency].name} to ${CurrencyTypes[aType].name}`
        );
        const symbol = CurrencyTypes[this.#currencyType].denomination;
        printOut(`New balance is ${this.#balance.toFixed(2)}${symbol}`);
    }

    #currencyConvert(aType) {
        // Sjekk at valutaene finnes
        const oldCurrency = CurrencyTypes[this.#currencyType];
        const newCurrency = CurrencyTypes[aType];
        if (!oldCurrency || !newCurrency) return this.#balance;

        const newAmount = this.#balance * (newCurrency.value / oldCurrency.value);
        return newAmount;
    }

    #convertAmount(amount, fromType, toType) {
        const from = CurrencyTypes[fromType];
        const to = CurrencyTypes[toType];
        if (!from || !to) return amount; // fallback hvis ukjent valuta

        // Riktig formel: amount * (to.value / from.value)
        const converted = amount * (to.value / from.value);
        return converted;
    }

} 

const myAccount = new TAccount(Accounttype.Normal);

printOut("myAccount = " + myAccount.toString());

myAccount.setType(Accounttype.Savings);

printOut("myAccount = " + myAccount.toString());

printOut(newLine);

printOut("--- Part 3 ----------------------------------------------------------------------------------------------");
printOut("Oppgave 3");

myAccount.deposit(100);
myAccount.withdraw(25);
printOut("My account balance is " + myAccount.getBalance());

printOut(newLine);

printOut("--- Part 4 ----------------------------------------------------------------------------------------------");
printOut("Oppgave 4");

const need = 100 - myAccount.getBalance();
if (need > 0) {
    myAccount.deposit(need);
}

myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30);
myAccount.withdraw(30); // dette skal stoppes pga 3 uttak

// Bytt til Pension (skal ikke gå)
myAccount.setType(Accounttype.Pension);
myAccount.withdraw(10); // skal ikke gå

myAccount.setType(Accounttype.Savings);
myAccount.withdraw(10); // dette skal gå

printOut(newLine);
printOut(newLine);

printOut("--- Part 5 ----------------------------------------------------------------------------------------------");
printOut("Oppgave 5");
myAccount.deposit(150);
printOut(newLine);

printOut("--- Part 6 ----------------------------------------------------------------------------------------------");
printOut("Oppgave 6");

// Bytt til SEK
myAccount.setCurrencyType("SEK");

// Bytt til USD
myAccount.setCurrencyType("USD");

// Bytt tilbake til NOK
myAccount.setCurrencyType("NOK");

printOut(newLine);

printOut("--- Part 7 ----------------------------------------------------------------------------------------------");
printOut("oppgave 7");

if (myAccount.getBalance() < 150) {
    const difference = 150 - myAccount.getBalance();
    myAccount.deposit(difference);
}

myAccount.deposit(12, "USD");
myAccount.withdraw(10, "GBP");

myAccount.setCurrencyType("CAD");   // Norske kr → Canadiske dollar
myAccount.setCurrencyType("INR");   // Canad
