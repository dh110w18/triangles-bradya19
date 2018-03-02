// Part 1: Area of a triangle 
var base= 30;
var height= 40;
var area= (1/2)* base * height;
var message1 = 'The area of a triangle with a base of ' + base + 'and a height of ' + height + 'is equal to ' + area;
document.getElementById("block1").innerHTML = message1;

// Part 2: Hypotenuse of a triangle 
function calcHypotenuse(b, h){
    return Math.sqrt((b*b)+(h*h));
};
calcHypotenuse(30, 40);
var message2= 'The hypotenuse of a triangle with a base of ' + b + 'and a height of ' + h + 'is equal to ' + calcHypotenuse;
document.getElementById("block2").innerHTML = message2;

//Part 3: Triangle Object
var triangle = {
    base: 30,
    height: 40,
    canvasId: canvas,
    calcArea: function(){
        return (1/2)*this.base*this.height;
    },
    calcHypotenuse: function(){
        return Math.sqrt((this.base*this.base)+(this.height*this.height));
    },
    drawIt: function(){
        drawTriangle(this.base, this.height, this.canvasId);
    },
    drawIt()
};
var message3= 'The area of a triangle with a base of ' + this.base + 'and a height of ' + this.height + 'is equal to ' + calcArea;
var message4= 'The hypotenuse of a triangle with a base of ' + this.base + 'and a height of ' + this.height + 'is equal to ' + calcHypotenuse;
document.getElementById("block3").innerHTML = 'The area of a triangle with a base of ' + this.base + 'and a height of ' + this.height + 'is equal to ' + calcArea + '\n' + message4;