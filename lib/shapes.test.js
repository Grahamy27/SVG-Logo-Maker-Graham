const {Circle, Square, Triangle} = require("./shapes")

describe('Circle', () => {
    test('renders correctly',() => {
    const shape = new Circle();
    var color =('green')
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100%" fill="green"/>`)
  });
});

describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square();
      var color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
    });
  });

  describe('Triangle', () => {
    test('renders correctly', () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue"/>');
    });
  });