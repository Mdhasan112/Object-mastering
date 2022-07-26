const normalPerson = {
    firstName: "Md Hasan",
    lastName: "khan",
    salary: 15000,
    
    fullName: function() {
        console.log(this.firstName, this.lastName);
    },

    chargeBill: function(ammount) {
        this.salary = this.salary - ammount;
        return this.salary;
    }
}
console.log(normalPerson.firstName);
console.log(normalPerson.chargeBill(150));