const Manager = require("../Classes/Manager");

describe("Manager", () => {
    it("should call to the Manager Class and return a pupulated HTML", () => {

        //dumby data to be sent to the Manager class
      const user = "John";
      const id = "1";
      const email = "john@john.com";
      const number = "5555555555";
      const role = "Manager";
        // call to the class
      const result = new Manager().managerHTML(user, id, email, number);
        //expected results from the call
        const expected =`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css">
            <link rel="stylesheet" href="style.css">
            <title>My Team</title>
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
        //compare expected with the result return data
      expect(result).toEqual(expected);
    });
  });