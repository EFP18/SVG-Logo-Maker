const inquirer = require("inquirer");
const SVG = require("./svg");
const { Circle, Triangle, Square } = require("./shapes");
const fs = require("fs/promises");

class CLI {
  run() {
    const questions = [{
      type: 'input',
      name: 'Text',
      message: 'What would you like to logo to say? Please type up to 3 characters.'
    }, 
    {
      type: 'input', 
      name: 'Color',
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
      name: 'ShapeColor',
      message: 'What color would you like your logo to have?'
    }];
    
    inquirer.prompt(questions).then((data, err) => {
      let newShape;
      if (data.Shape === 'Circle') {
        newShape = new Circle()
      } else if (data.Shape === 'Triangle') {
        newShape = new Triangle() 
      } else {
        newShape = new Square()
      }

      newShape.setColor(data.ShapeColor)
      const newSVG = new SVG();
      newSVG.setText(data.Text, data.Color);
      newSVG.setShape(newShape);
      return fs.writeFile('logo.svg', newSVG.render())
    })
  }
}

module.exports = CLI;

