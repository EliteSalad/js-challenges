//challenge

// Write a function to find the perimeter of a rectangle
const calculatePerimeter = (width, height) => {
    return (width * 2) + (height * 2);
}

console.log(calculatePerimeter(2,3));

const calculateArea = (radius) =>{
    const area = Math.PI * (radius * 2);
    console.log(area)
}

const calculatePerimeter = (radius) => {
    return 2 * Math.PI * radius;
}

console.log(calculatePerimeter(3));