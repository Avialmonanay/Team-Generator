class Other {}


Other.prototype.otherHTML = function (user, role, id, email, phone) {
    return `<div class="card">
    <div class="cardHeader">
        <h3>${user}</h3>
        <h3>${role}</h3>
    </div>
    <div class="cardBody">
        <div class="cardInfo">ID: ${id}</div>
        <div class="cardInfo">Email:<a href="mailto:${email}">${email}</a></div>
        <div class="cardInfo">Number:<a href="tel:+${phone}">${phone}</a></div>
    </div>
</div>`
}

module.exports = Other