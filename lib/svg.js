class SVG {
// render method, set text (add text component saved on svg), set shape (would add one of the shapes to the svg) method 
  constructor () {
    this.text = '';
    this.Shape = '';
  }

  render(){
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.Shape}${this.text}</svg>`
  }

  setText(textValue, Color) {
    this.text = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${Color}">${textValue}</text>`
  }

  setShape(Shape){
    this.Shape = Shape.render()
  }
}

module.exports = SVG;
