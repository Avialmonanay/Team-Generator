const Intern = require("../Classes/Intern");

describe("Intern", () => {
    it("should call to the Intern Class and return a pupulated HTML", () => {
      const user = "John";
      const id = "1";
      const email = "john@john.com";
      const school = "Class of Hard Knox";

      const role = "Intern"

      const result = new Intern().internHTML(user, id, email, school);

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

      expect(result).toEqual(expected);
    });
  });