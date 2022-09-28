 class Manager {}


    Manager.prototype.managerHTML = function (user, id, email, number) {
        var role = 'Manager'
        return `<div class="card">
        <div class="cardHeader">
            <h3>${user}</h3>
            <h3>${role}</h3>
        </div>
        <div class="cardBody">
            <div class="cardInfo">ID: ${id}</div>
            <div class="cardInfo">Email: ${email}</div>
            <div class="cardInfo">Number: ${number}</div>
        </div>
    </div>`
    }
 

 module.exports = Manager
