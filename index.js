// const fs = require('fs')
const inquirer = require('inquirer');
const Manager = require('./Classes/Manager');
const Intern = require('./Classes/Intern')
const Other = require('./Classes/Other')
const Engineer = require('./Classes/Engineer')

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
        const manager = new Manager()
        var userName = managerInfo.manager
        var id = managerInfo.Identification
        var email = managerInfo.email
        var phone = managerInfo.phone
        var addUser = managerInfo.additionalUser

        const managerHTML = manager.managerHTML(userName, id, email, phone)
        console.log(managerHTML)
        // appendToHTML(managerHTML)
        newUserCheck(addUser)
    })

    var newUserCheck = (addUser) => {
      userCount++
      if (userCount <= 12 && addUser == "Yes") {
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
    else {
      console.log("Max Users Reached")
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
          const engineer = new Engineer()
          var userName = engineerInfo.userName
          var id = engineerInfo.Identification
          var email = engineerInfo.email
          var hubName = engineerInfo.githubName
          var hubURL = engineerInfo.githubURL
          var addUser = engineerInfo.additionalUser
  
          const engineerHTML = engineer.engineerHTML(userName, id, email, hubName, hubURL)
          console.log(engineerHTML)
          // appendToHTML(managerHTML)
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
          const intern = new Intern()
          var userName = internInfo.userName
          var id = internInfo.Identification
          var email = internInfo.email
          var school = internInfo.school
          var addUser = internInfo.additionalUser
  
          const internHTML = intern.internHTML(userName, id, email, school)
          console.log(internHTML)
          // appendToHTML(managerHTML)
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
          const other = new Other()
          var userName = otherInfo.userName
          var role = otherInfo.userRole
          var id = otherInfo.Identification
          var email = otherInfo.email
          var phone = otherInfo.phone
          var addUser = otherInfo.additionalUser
  
          const otherHTML = other.otherHTML(userName, role, id, email, phone)
          console.log(otherHTML)
          // appendToHTML(managerHTML)
          newUserCheck(addUser)
      })
      }
    }