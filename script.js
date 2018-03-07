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

//Part 4: User entered base and height
var userBase= prompt("Enter a value for the triangle's base that is at least 10");
if(userBase < 10){
    alert("ERROR: Base must be greater than or equal to 10.");
} else{
    var userHeight= prompt("Enter a value for the triangle's height that is greater than 0");
};
if(userHeight <= 0){
    alert("ERROR: Height must be greater than 0.");
} else{
    triangle.base = userBase;
    triangle.height = userHeight;
};
var message5 = 'The area of a triangle with a base of ' + userBase + ' and a height of ' + userHeight + ' is equal to ' + triangle.calcArea();
var message6= 'The hypotenuse of a triangle with a base of ' + userBase + ' and a height of ' + userHeight + ' is equal to ' + triangle.calcHypotenuse();
document.getElementById("block4").innerHTML = 'The area of a triangle with a base of ' + userBase + ' and a height of ' + userHeight + ' is equal to ' + triangle.calcArea(); + '.'+ '\n' + message6 + '.';
triangle.canvasId=canvas2;
triangle.drawIt()
;

//Part 5: Lots of Triangles
