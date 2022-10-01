const Intern = require("../Classes/Intern");

describe("Intern", () => {
    it("should call to the Intern Class and return a pupulated HTML", () => {

      //dumby data to be sent to the Intern class
      const user = "John";
      const id = "1";
      const email = "john@john.com";
      const school = "Class of Hard Knox";
      const role = "Intern"
      // call to the class
      const result = new Intern().internHTML(user, id, email, school);
      //expected results from the call
        const expected =`<div class="card">
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
      //compare expected with the result return data
      expect(result).toEqual(expected);
    });
  });