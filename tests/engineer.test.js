const Engineer = require("../Classes/Engineer");

describe("engineer", () => {
    it("should call to the engineer function and return a pupulated HTML", () => {
      const user = "John";
      const id = "1";
      const email = "john@john.com";
      const hubName = "JohnnyBoy";
      const hubUrl = "Jonnyboy.com";

      const result = new Engineer().engineerHTML(user, id, email, hubName, hubUrl);

        const expected =`<div class="card">
        <div class="cardHeader">
            <h3>John</h3>
            <h3>Engineer</h3>
        </div>
        <div class="cardBody">
            <div class="cardInfo">ID: 1</div>
            <div class="cardInfo">Email:<a href="mailto:john@john.com">john@john.com</a></div>
            <div class="cardInfo">Github:<a href=Jonnyboy.com>JohnnyBoy</a></div>
        </div>
        </div>`

      expect(result).toEqual(expected);
    });
  });

