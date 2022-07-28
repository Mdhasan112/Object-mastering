const normalPerson = {
    firstName: "Md Hasan",
    lastName: "khan",
    salary: 25000,
    
    fullName: function() {
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function(amount) {
        console.log(this)
        this.salary = this.salary - amount;
        return this.salary;
    }
}

const heroPerson = {
        firstName: "rofiq",
        lastName: "khan",
        salary: 15000,
}

const goodlyPerson = {
    firstName: "mokbul",
    lastName: "khan",
    salary: 5000,
}

// normalPerson.chargeBill();

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);

const goodChargeBill = normalPerson.chargeBill.bind(goodlyPerson);
goodChargeBill(2000);
console.log(goodChargeBill);
console.log(goodlyPerson)
