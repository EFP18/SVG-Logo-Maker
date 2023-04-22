const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs/promises");
const createSVG = require("../index")

class CLI {
  run() {

  }
}

module.exports = CLI;

const questions = [{
  type: 'input',
  name: 'Text',
  message: 'What would you like to logo to say? Please type up to 3 characters.'
}, 
{
  type: 'input', 
  name: 'Text color',
  message: 'What color would you like the text to be?'
},
{ 
  type: 'list', 
  name: 'Shape',
  message: 'What shape would you like your logo to have?',
  choices: ['Circle', 'Triangle', 'Square']
},
{   
  type: 'input', 
  name: 'Shape color',
  message: 'What color would you like your logo to have?'
}];

const askUserAndCreateSVGFile = () => {
  // take input from inquirer
  inquirer.prompt(questions).then((data, err) => {
    console.log(data);
    // create svg file
    fs.writeFile('logo.svg', createSVG(data), (err) =>
      err ? console.error(err) : console.log('Generated logo.svg')
    );
  });
}

askUserAndCreateSVGFile()