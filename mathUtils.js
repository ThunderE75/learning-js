// we meed the 'export' keyword to specify the variables & functions 
// that can be accessed by the importer 

export const PI = 3.14159;

export function getCircumference(radius) {
    return 2 * PI * radius;
}
export function getArea(radius) {
    return PI * radius * radius;
}
