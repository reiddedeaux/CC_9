//Task 1 Created Employee Class
class Employee {
    constructor(name, id, department, salary){
        this.name = name;
        this.id = id;
        this.department = department;
        this.salary = salary;
        } // Created a class with these details
    
getDetails() {
    return `Employee ${this.name}, ID:${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    } //Returns the employees details
    calculateAnnualSalary() {
        return this.salary *12;
    }   
}// Employee class
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1.getDetails()); // Logs employee details

console.log(emp1.calculateAnnualSalary()); // Logs anual salary

// Task 2 Created Manager Class with Inheritance
class Manager extends Employee {
    constructor(name, id, department, salary, teamSize){
        super(name, id, department, salary);
        this.teamSize = teamSize;
    };
    getDetails() {
      return `Manager: ${this.name}, ID: ${this.id}, Department: ${this.department}, Salary: ${this.salary}, TeamSize: ${this.teamSize}`;  
    } // Created the manager details
    calculateBonus(){
        return this.salary * 12 * .10; //Created the salary bonus 
    }
    calculateAnnualSlary() {
        return this.salary * 12 + this.calculateBonus();  //
    }
}; // Created Manager Class 
const mgr1 = new Manager("John Smith", 201, "IT", 8000, 5)
console.log(mgr1.getDetails()); // Logs the managers details into the console
console.log(mgr1.calculateBonus()); // Logs the Managers bonus into the console

// Task 3 Created Company Class
class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }; // Company constructor
    addEmployee(employee) {
        this.employees.push(employee); // Adds Employees
    }
    listEmployee(){ // List the employees
        this.employees.forEach(employee => console.log(employee.getDetails()));
    }
    //Task 4 Implemented Payroll System
    calculateTotalPayroll(){
        return this.employees.reduce((total, employee) => {
            return total + employee.calculateAnnualSalary();
            }, 0); // calculate total payroll
    }; // Created a payroll system

    //Task 5 Implemented Promtion System
    PromoteToManager(employee, teamSize){
        const index = this.employees.indexOf(employee);
        if (index !== -1)
            this.employees[index] = new Manager(employee.name, employee.id, employee.department, employee.salary, employee.tamesize);
    } 
};
const Company = new Company("Tech Corp");
Company.addEmployee(emp1); // adds the employee
Company.addEmployee(mgr1); // adds the manager
Company.listEmployee();

console.log(Company.calculateTotalPayroll());

Company.PromoteToManager(emp1, 3);
Company.listEmployee();