const Other = require("../Classes/Other");

describe("Other", () => {
    it("should call to the Other class and return a pupulated HTML", () => {

      //dumby data to be sent to the Other class
      const user = "John";
      const role = "johnster"
      const id = "1";
      const email = "john@john.com";
      const phone = "5555555555";
      // call to the class
      const result = new Other().otherHTML(user, role, id, email, phone);
        //expected results from the call
        const expected =`<div class="card">
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
      //compare expected with the result return data
      expect(result).toEqual(expected);
    });
  });