const inquirer = require('inquirer');
const fs = require('fs'); 

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
        const READMEDocument = await fs.promises.readFile("./README.md", "utf8");
        const READMEfile = READMEDocument
        .replace("$Name", answers.Title)
        .replace("$Description", answers.Description)
        .replace("$Github", answers.Contents)
        .replace("$Email", answers.Installation)
        .replace("$License", answers.Usage)
        .replace("$Usage", answers.License)
        .replace("$Installation", answers.Contributing)
        console.log(READMEDocument)
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


