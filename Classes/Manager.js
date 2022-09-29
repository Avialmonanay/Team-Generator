class Manager { }


Manager.prototype.managerHTML = function (user, id, email, number) {
    var role = 'Manager'
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="style.css">
    <title>WorkDay Calendar</title>
</head>

<header id="pHeader">
    <h1>My Team</h1>
</header>

<main class="container">
    <div class="card">
        <div class="cardHeader">
            <h3>${user}</h3>
            <h3>${role}</h3>
        </div>
        <div class="cardBody">
            <div class="cardInfo">ID: ${id}</div>
            <div class="cardInfo">Email:<a href="mailto:${email}">${email}</a></div>
            <div class="cardInfo">Number:<a href="tel:+${number}">${number}</a></div>
        </div>
    </div>`
}


module.exports = Manager
