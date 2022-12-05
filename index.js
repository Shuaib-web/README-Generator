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
    return await inquirer.prompt(inquirerQuestions)
  }
  
  async function collectAnswersAndGenerateReadMe(){
    const responses = await askQuestions()
    console.log(responses)
  }
  async function generateReadme(answers) {
    console.log(answers)

  }

  const madeAnswers = {
  
        name: "Input",
        Description: "Readme",
        Email: 'Email UL',
        Github: "Github UL",
        Installation: "Now",
        Usage: "Usage",
        License: "Apache license",
    
    };

 
 generateReadme(madeAnswers)


