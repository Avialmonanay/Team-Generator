# Team Generator        
This application was built to be able to dynamically create an HTML file with your team members. This page is easy to view and each team member has their own card containing their Name, Roll, Employee ID, Email, and depending on the user role choice there will be additional information that displays on the card. Each card will have links to emails, phone, and github profiles depending on user choice. Each link will take you to the appropriate application to contact them.  


## Table of Contents (Optional)

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Features](#features)
- [Contact](#questions)

## Screenshot
![My Team](https://user-images.githubusercontent.com/108016215/193398549-2334f268-67bf-4717-882b-bbd06ef455fd.PNG)

## Installation
Team Generator utilizes the NPM inquirer and jest  packages. In my code repository I have included a package.json file. Once you have cloned the code you can run {npm install -y} this will download all neccessary packages needed for the application.

## Usage
After the appropriate packages have been installed highlighted above. You will run a node terminal command {node index.js}. This will initialize the application and prompt the user for the Team managers info. Once complete they will be prompted to add more users. When adding more users you will have the option of "Engineer", "Intern", and "Other". 

Required fields for Engineer are "Name", "Employeer ID", "Email", "Github Profile Name", and "Github profile URL" This will allow you to quickly access the users profile and send them emails. 

Required fields for "Intern" are "Name", "Employeer ID", "Email", and "School. 

Required fields for "Other" are "Name", "Employeer ID", "Email", and "Phone Number". 

You will be able to add a total of 16 users. If you attempt to add more an error will appear on the console log letting you know you have reached the maximum number. At that time the HTML will be completed. Once the application has finished an index.HTML file will be generated in the repositories "Team" folder. This folder include an accompyning css file. This css will dynamically update and display each user on their own card. No additional files are required for the index.html to run so you can move the team folder wherever you would like.

## Contribution
Users who would like to contrbute to this can reach out to the developer (contact information below)

## Testing
This application utilizes Jest and has a total of 4 tests to verify the user role classes are function properly and returning the correct HTML responses. To run these tests use the {npm test} command in the terminal. This will display the results of each user class and let you know if there are any errors. Running these tests is in the video application demo to showcase how each feature works.

## Features
Application uses Node.js and the npm inquirer package to ask the user questions and create an index.html file. There is prebuilt css file that can be used with the HTML that uses flex to align the team members on the page. There are several jest  tests that allow you to check if the application is working before starting.

## Demo
https://drive.google.com/file/d/1PJYJXfetRpDGw2F70l-7uMBzoQ7I1rDc/view

## Questions
Github Username:[ Avialmonanay](https://github.com/Avialmonanay)

If you have any additional questions please email me at rexxmadsen@gmail.com with the subject "Team Generator

Repository: https://github.com/Avialmonanay/Read-Me-Generator

