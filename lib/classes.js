 class Manager {
    constructor(user, id, email, number){
    this.user = user
    this.id = id
    this.email = email
    this.number = number
    this.role = "Manager"
    }

    generateHTML() {
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
 

 class Intern {}

 class Engineer {}

 class Employee {}


 module.exports = Manager
 module.exports = Intern
 module.exports = Employee
 module.exports = Engineer
