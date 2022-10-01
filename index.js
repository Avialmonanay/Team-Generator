//All required files and packages
const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./Classes/Manager');
const Intern = require('./Classes/Intern')
const Other = require('./Classes/Other')
const Engineer = require('./Classes/Engineer');
// keeps track of added users
let userCount = 0

//first prompt, requests all of the teams managers information
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the managers name?',
      name: 'manager',
    },
    {
      type: 'input',
      message: 'provide an employee ID',
      name: 'Identification',
    },
    {
      type: 'input',
      message: 'provide managers email',
      name: 'email',
    },
    {
      type: 'input',
      message: 'provide managers phone #',
      name: 'phone',
    },
    {
      type: 'checkbox',
      message: 'Would you like to add another user?',
      choices: ['Yes', 'No'],
      name: 'additionalUser',
    },
  ])

  //increase user count and with the prompt data (managerInfo) create several variables and call to the Manager Class. Set the return result to const "managerHtml"
  .then((managerInfo) => {
    userCount++
    const manager = new Manager()
    var userName = managerInfo.manager
    var id = managerInfo.Identification
    var email = managerInfo.email
    var phone = managerInfo.phone
    var addUser = managerInfo.additionalUser
    const managerHTML = manager.managerHTML(userName, id, email, phone)
    console.log(managerHTML)
    //call to the createFile function and the newUserCheck data
    createFile('./Team/index.html', managerHTML)
    newUserCheck(addUser)
  })
//Checks if a new user was selected as "Yes and the total user count is under 16"
var newUserCheck = (addUser) => {
  //If yes ask what the role of the next user is
  if (userCount <= 16 && addUser == "Yes") {
    console.log(userCount)
    inquirer
      .prompt([
        {
          type: 'checkbox',
          message: 'What is the users role?',
          choices: ["Engineer", "Intern", "Other"],
          name: 'userType',
        },
      ])
      //sends the users role to the "newTeamMember function"
      .then((userCheck) => {
        var userType = userCheck.userType
        newTeamMember(userType)
      })
  }
  //if new user = "no" then send the close of the HTML to the finishFile Function
  else if (addUser == "No") {
    var closeHTML = `
</main>
</html>`
    finishFile(closeHTML)
  }
  //If more than 16 users finish the file and console log "Max Users Reached"
  else {
    console.log("Max Users Reached")
    var closeHTML = `
</main>
</html>`
    finishFile(closeHTML)
  }
}

//newTeamMember function looks at the user role that was selected and prompts the user for information about that role.
var newTeamMember = (userType) => {
  console.log(userType)

  //Start Engineer Prompts
  if (userType == "Engineer") {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the Engineers Name',
          name: 'userName',
        },
        {
          type: 'input',
          message: 'provide an employee ID',
          name: 'Identification',
        },
        {
          type: 'input',
          message: 'provide users email',
          name: 'email',
        },
        {
          type: 'input',
          message: 'provide github profile name',
          name: 'githubName',
        },
        {
          type: 'input',
          message: 'provide github profile URL',
          name: 'githubURL',
        },
        {
          type: 'checkbox',
          message: 'Would you like to add another user?',
          choices: ['Yes', 'No'],
          name: 'additionalUser',
        },
      ])

      //increses user count and with the prompt data (engineerInfo) create several variables and call to the Engineer Class. Set the return result to const "engineerHtml"
      .then((engineerInfo) => {
        userCount++
        const engineer = new Engineer()
        var userName = engineerInfo.userName
        var id = engineerInfo.Identification
        var email = engineerInfo.email
        var hubName = engineerInfo.githubName
        var hubURL = engineerInfo.githubURL
        var addUser = engineerInfo.additionalUser
        
        const engineerHTML = engineer.engineerHTML(userName, id, email, hubName, hubURL)
        console.log(engineerHTML)
        //call to the appendFile function and the newUserCheck data
        appendFile(engineerHTML)
        newUserCheck(addUser)

      })
  }
  //Start Intern Prompts
  else if (userType == "Intern") {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the Interns Name',
          name: 'userName',
        },
        {
          type: 'input',
          message: 'provide an employee ID',
          name: 'Identification',
        },
        {
          type: 'input',
          message: 'provide users email',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What school does the user attend?',
          name: 'school',
        },
        {
          type: 'checkbox',
          message: 'Would you like to add another user?',
          choices: ['Yes', 'No'],
          name: 'additionalUser',
        },
      ])
      .then((internInfo) => {
        //increses user count and with the prompt data (internInfo) create several variables and call to the Intern Class. Set the return result to const "internHtml"
        userCount++
        const intern = new Intern()
        var userName = internInfo.userName
        var id = internInfo.Identification
        var email = internInfo.email
        var school = internInfo.school
        var addUser = internInfo.additionalUser

        const internHTML = intern.internHTML(userName, id, email, school)
        //call to the appendFile function and the newUserCheck data
        appendFile(internHTML)
        newUserCheck(addUser)
      })
  }
  //Start Other Prompts
  else if (userType == "Other") {
    inquirer
      .prompt([
        {
          type: 'input',
          message: 'What is the Users Name',
          name: 'userName',
        },
        {
          type: 'input',
          message: 'What is the Users Role',
          name: 'userRole',
        },
        {
          type: 'input',
          message: 'provide an employee ID',
          name: 'Identification',
        },
        {
          type: 'input',
          message: 'provide users email',
          name: 'email',
        },
        {
          type: 'input',
          message: 'What is the users phone #?',
          name: 'phone',
        },
        {
          type: 'checkbox',
          message: 'Would you like to add another user?',
          choices: ['Yes', 'No'],
          name: 'additionalUser',
        },
      ])
      .then((otherInfo) => {
        //increses user count and with the prompt data (otherInfo) create several variables and call to the Other Class. Set the return result to const "otherHtml"
        userCount++
        const other = new Other()
        var userName = otherInfo.userName
        var role = otherInfo.userRole
        var id = otherInfo.Identification
        var email = otherInfo.email
        var phone = otherInfo.phone
        var addUser = otherInfo.additionalUser
        //call to the appendFile function and the newUserCheck data
        const otherHTML = other.otherHTML(userName, role, id, email, phone)
        appendFile(otherHTML)
        newUserCheck(addUser)
      })
  }
}

//create file function takes in the managerHTML and creates and index.html inside of the Team folder of the repository
function createFile(fileName, managerHTML) {
  fs.writeFile(fileName, managerHTML, (err) => {
    err
  });
}

//finishFile appends the closing HTML information onto the index.html
function finishFile(closeHTML) {

  fs.appendFile(`./Team/index.html`, closeHTML, (err) => 
  err
  ? console.error(err)
  : console.log(`index.html is complete`)
  );
}

//appendFile takes in the added users and appends them to the index.html
function appendFile(appendHTML) {

  fs.appendFile(`./Team/index.html`, appendHTML, (err) => 
  err
  );
}