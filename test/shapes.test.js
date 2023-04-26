// import classes Square, Triangle and Circle 
const { Square, Triangle, Circle } = require("../lib/shapes");

describe("Circle", () => {
  it("should render svg for a green circle element", () => {
    const expectedSvg = '<circle cx="150" cy="100" r="80" fill="green" />';
    
    const circle = new Circle();
    circle.setColor('green')

    // render is unique to circle from the shapes.js, not shape
    const greenCircleSVG = circle.render()
    expect(greenCircleSVG).toEqual(expectedSvg)
  });
});

describe("Triangle", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<polygon points="150, 18 244, 182 56, 182" fill="bisque" />';

      const tri = new Triangle();
      tri.setColor('bisque')
  
      // render is unique to triangle from the shapes.js, not shape
      const bisqueSvg = tri.render()
      expect(bisqueSvg).toEqual(expectedSvg)

  });
});

describe("Square", () => {
  it("should render svg for a green polygon element", () => {
    const expectedSvg =
      '<rect x="90" y="40" width="120" height="120" fill="dodgerblue" />';

      const square = new Square();
      square.setColor('dodgerblue')
  
      // render is unique to Square from the shapes.js, not shape
      const dodgerblueSvg = square.render()
      expect(dodgerblueSvg).toEqual(expectedSvg);
  });
});
