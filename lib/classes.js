 class Manager {
    constructor(user, id, email, number){
    this.user = user
    this.id = id
    this.email = email
    this.number = number
    this.role = "Manager"
    }

    managerHTML() {
        return `<div class="card">
        <div class="cardHeader">
            <h3>${this.user}</h3>
            <h3>${role}</h3>
        </div>
        <div class="cardBody">
            <div class="cardInfo">ID: ${this.id}</div>
            <div class="cardInfo">Email: ${this.email}</div>
            <div class="cardInfo">Number: ${this.number}</div>
        </div>
    </div>`
    }
 }
 

 class Intern {
    constructor(user, id, email, school){
        this.user = user
        this.id = id
        this.email = email
        this.school = school
        this.role = "Intern"
        }
    
        internHTML() {
            return `<div class="card">
            <div class="cardHeader">
                <h3>${this.user}</h3>
                <h3>${role}</h3>
            </div>
            <div class="cardBody">
                <div class="cardInfo">ID: ${this.id}</div>
                <div class="cardInfo">Email: ${this.email}</div>
                <div class="cardInfo">School: ${this.school}</div>
            </div>
        </div>`
        }
 }

 class Engineer {
    constructor(user, id, email, hub){
        this.user = user
        this.id = id
        this.email = email
        this.hub = hub
        this.role = "Engineer"
        }
    
        engineerHTML() {
            return `<div class="card">
            <div class="cardHeader">
                <h3>${this.user}</h3>
                <h3>${role}</h3>
            </div>
            <div class="cardBody">
                <div class="cardInfo">ID: ${this.id}</div>
                <div class="cardInfo">Email: ${this.email}</div>
                <div class="cardInfo">Github: ${this.hub}</div>
            </div>
        </div>`
        }
 }

 class Employee {
    constructor(user, id, email, number){
        this.user = user
        this.id = id
        this.email = email
        this.number = number
        this.role = "Employee"
        }
    
        employeeHTML() {
            return `<div class="card">
            <div class="cardHeader">
                <h3>${this.user}</h3>
                <h3>${role}</h3>
            </div>
            <div class="cardBody">
                <div class="cardInfo">ID: ${this.id}</div>
                <div class="cardInfo">Email: ${this.email}</div>
                <div class="cardInfo">Number: ${this.number}</div>
            </div>
        </div>`
        }
 }


 module.exports = Manager
 module.exports = Intern
 module.exports = Employee
 module.exports = Engineer
