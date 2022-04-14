// Exercise 1

const squareLog = (number1, number2) => {
    const square = number1 ** number2;
    console.log(square);
}

squareLog (2, 5);

//Challenge

number1 = 2;
number2 = 3;

const square = number1 ** number2;

for (i = number1; i <= square; i++) {
    console.log(square) // Daca folosesc console.log(i) arata toate numerele intre number1 si rezultat
}

// Exercise 2

// Square

const ariaSquare = (number1, number2) => {
    const square = number1 ** 2;
    console.log(square);
    return square;
}

// Rectangle

const ariaRectangle = (number1, number2) => {
    const rectangle = number1 * number2;
    console.log(rectangle);
    return rectangle;
}

// Circle

const ariaCircle = (number1, number2) => {
    const circle = 3.14 * number1 ** 2;
    console.log(circle);
    return circle;
}

const squareMain = ariaSquare (4);
const rectangleMain = ariaRectangle (2, 3);
const circleMain = ariaCircle (2)



