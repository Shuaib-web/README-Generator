const inquirer = require('inquirer');

const questions= [
'Name',
'Description',
'GitHub',
'Email',
'License', 
'Usage',
'Installation'
];

const inquirerQuestions = questions.map((it) => {
    return {
      type: "input",
      name: it,
      Message: it,
    };
  })

  async function askQuestions() {
    inquirer.prompt(inquirerQuestions)
  }

  askQuestions( )

// console.log(inquirerQuestions)
