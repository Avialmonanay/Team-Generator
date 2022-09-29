class Engineer {}
    
 
    Engineer.prototype.engineerHTML = function (user, id, email, hubName, hubURL){
            var role = 'Engineer'
            return `<div class="card">
            <div class="cardHeader">
                <h3>${user}</h3>
                <h3>${role}</h3>
            </div>
            <div class="cardBody">
                <div class="cardInfo">ID: ${id}</div>
                <div class="cardInfo">Email:<a href="mailto:${email}">${email}</a></div>
                <div class="cardInfo">Github:<a href=${hubURL}>${hubName}</a></div>
            </div>
        </div>`
    }

 module.exports = Engineer