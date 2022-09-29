const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./Classes/Manager');
const Intern = require('./Classes/Intern')
const Other = require('./Classes/Other')
const Engineer = require('./Classes/Engineer');

let userCount = 0

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

    createFile('./Team/index.html', managerHTML)
    newUserCheck(addUser)
  })

var newUserCheck = (addUser) => {
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
      .then((userCheck) => {
        var userType = userCheck.userType
        newTeamMember(userType)
      })
  }
  else if (addUser == "No") {
    var closeHTML = `
</main>
</html>`
    finishFile(closeHTML)
  }
  else {
    console.log("Max Users Reached")
    var closeHTML = `
</main>
</html>`
    finishFile(closeHTML)
  }
}

var newTeamMember = (userType) => {
  console.log(userType)

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
        appendFile(engineerHTML)
        newUserCheck(addUser)

      })
  }
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
        userCount++
        const intern = new Intern()
        var userName = internInfo.userName
        var id = internInfo.Identification
        var email = internInfo.email
        var school = internInfo.school
        var addUser = internInfo.additionalUser

        const internHTML = intern.internHTML(userName, id, email, school)
        appendFile(internHTML)
        newUserCheck(addUser)
      })
  }
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
        userCount++
        const other = new Other()
        var userName = otherInfo.userName
        var role = otherInfo.userRole
        var id = otherInfo.Identification
        var email = otherInfo.email
        var phone = otherInfo.phone
        var addUser = otherInfo.additionalUser

        const otherHTML = other.otherHTML(userName, role, id, email, phone)
        appendFile(otherHTML)
        newUserCheck(addUser)
      })
  }
}


function createFile(fileName, managerHTML) {
  fs.writeFile(fileName, managerHTML, (err) => {
    err
  ? console.error(err)
  : console.log(`index.html created in the "Team" folder, Manager added`)
  });
}

function finishFile(closeHTML) {

  fs.appendFile(`./Team/index.html`, closeHTML, (err) => 
  err
  ? console.error(err)
  : console.log(`index.html is complete`)
  );
}

function appendFile(appendHTML) {

  fs.appendFile(`./Team/index.html`, appendHTML, (err) => 
  err
  ? console.error(err)
  : console.log(`Team Member added to index.HTML`)
  );
}