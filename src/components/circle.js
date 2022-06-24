const Shape = require('./shape.js')


class Circle extends Shape {
    calculateArea() {
        console.log('Calculate area from circle class')
    }

}
module.exports = Circle
