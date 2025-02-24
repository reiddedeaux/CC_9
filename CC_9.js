//Task 1 Created Employee Class
class Employee {
    constructor(name, id, department, salary){
        this.name = name;
        this.id = id;
        this.department;
        this.salary;
        } // Created a class with these details
    
getDetails() {
    return `Employee ${this.name}, ID:${this.id}, Department: ${this.department}, Salary: ${this.salary}`;
    } //Returns the employees details
    calculateAnnualSlary() {
        return this.salary *12;
    }   
}// Employee class
const emp1 = new Employee("Alice Johnson", 101, "Sales", 5000);
console.log(emp1>getDetails()); // Logs employee details

console.log(emp1.calculateAnnualSlary()); // Logs anual salary

