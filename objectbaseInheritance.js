const info = {
    emp_id: 1001,
    name: "Ali Ahmed",
    age: 25,
    salary: 15000,

    print: function(){
        console.log("Employee ID", this.emp_id);
        console.log("Name", this.name);
        console.log("Age", this.age);
        console.log("Salary", this.salary);
    },

    display() {
        console.log(`Employee ID: ${this.emp_id},
        Name: ${this.name},
        Age: ${this.age},
        Salary ${this.salary}
        `);
    },

    incrementSalary(amount) {
        this.salary += amount; //this.salary= this.salary + amount;
        return this.salary;
}
};

const department = {
    mang: "M01",
    dept_name: "IT",
    location: "karachi",

    displayDeptInfo() {
        console.log(`mang: ${this.mang},
        Department: ${this.dept_name},
        Location: ${this.location}
        `);
    }
};

// object based inheritance
department.__proto__=info;