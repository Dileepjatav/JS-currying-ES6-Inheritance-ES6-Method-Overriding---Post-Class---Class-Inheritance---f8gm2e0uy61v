
// import using require
const shapeClass = reuire('./shape');
// declare class
class Circle extends shapeClass{
    calculateArea(){
       console.log("CircleArea");
    }
}
// export class using module.exports
module.exports = shapeClass;
