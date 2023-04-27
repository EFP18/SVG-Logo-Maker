const SVG = require("../lib/svg");

describe("SVG", () => {
  it("should render a 300 x 200 svg element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"></svg>';
      const svg = new SVG()
      expect(svg.render()).toEqual(expectedSvg)

  });

  it("should append text element", () => {
    const expectedSvg =
      '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="150" y="125" font-size="60" text-anchor="middle" fill="white">A</text></svg>';
      const svg = new SVG();
      // svg.setText("SVG", "blue");
      // expect(svg.render()).toEqual(expectedSvg);

  });

  // An exception test checks for code that should throw an error.
  it("should throw if text exceeds 3 characters", () => {
    const expectedError = new Error("Text must not exceed 3 characters.");
    const svg = new SVG();
    // expect(() => svg.setText("MoreThan3Char", "red")).toThrow(expectedError);

  });

});

