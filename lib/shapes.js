// Base class for shapes uses constructor to define shape
class Shape {
  constructor() {
    this.color = '';
  }
  setColor(color) {
    this.color = color;
  }
}

// circle inherits properties from Shape class
class Circle extends Shape {
  render() {
    return   `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
  }
}

// Triangle inherits properties from Shape class
class Triangle extends Shape {
  render() {
    return   `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`
  }
}

// Square inherits properties from Shape class
class Square extends Shape {
  render() {
    return   `<rect x="90" y="40" width="120" height="120" fill="${this.color}" />`
  }
}

// export classes Circle, Triangle and Square
module.exports = { Circle, Triangle, Square };
