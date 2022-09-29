class Intern {}


Intern.prototype.internHTML = function (user, id, email, school) {
    var role = 'Intern'
    return `<div class="card">
    <div class="cardHeader">
        <h3>${user}</h3>
        <h3>${role}</h3>
    </div>
    <div class="cardBody">
        <div class="cardInfo">ID: ${id}</div>
        <div class="cardInfo">Email:<a href="mailto:${email}">${email}</a></div>
        <div class="cardInfo">School: ${school}</div>
    </div>
</div>`
}


module.exports = Intern