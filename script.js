// Part 1: Area of a triangle 
var base= 30;
var height= 40;
var area= (1/2)* base * height;
var message1 = 'The area of a triangle with a base of ' + base + ' and a height of ' + height + ' is equal to ' + area + '.';
document.getElementById("block1").innerHTML = message1;

// Part 2: Hypotenuse of a triangle 
function calcHypotenuse(){
    return Math.sqrt((base*base)+(height*height));
};
calcHypotenuse(base, height);
var message2= 'The hypotenuse of a triangle with a base of ' + base + ' and a height of ' + height + ' is equal to ' + calcHypotenuse() + '.';
document.getElementById("block2").innerHTML = message2;

//Part 3: Triangle Object
var triangle = {
    base: 30,
    height: 40,
    canvasId: "canvas",
    calcArea: function(){
        return (1/2)*this.base*this.height;
    },
    calcHypotenuse: function(){
        return Math.sqrt((this.base*this.base)+(this.height*this.height));
    },
    drawIt: function(){
        drawTriangle(this.base, this.height, this.canvasId);
    },
};
var message3= 'The area of a triangle with a base of ' + triangle.base + ' and a height of ' + triangle.height + ' is equal to ' + triangle.calcArea();
var message4= 'The hypotenuse of a triangle with a base of ' + triangle.base + ' and a height of ' + triangle.height + ' is equal to ' + triangle.calcHypotenuse();
document.getElementById("block3").innerHTML = 'The area of a triangle with a base of ' + triangle.base + ' and a height of ' + triangle.height + ' is equal to ' + triangle.calcArea() + '.'+ '\n' + message4 + '.';
triangle.drawIt();