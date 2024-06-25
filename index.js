/* JSON (Javascript Object Notation)
    Data-interchange format
    JSON Files: {key:value} or [value1, value2, value3]

    JSON.stringify()    = convert a JS object to a JSON String
    JSON.parse()        = convert a JSON string to a JS object
*/
const names = `["Spongebob", "Patrick", "Squidward", "Plankton"]`;
const person = `{ "name": "Spongebob", "age": 26, "isEmployed": true, "hobbies": ["Cooking", "Jellyfishing", "Karate"] }`;
const people = `[
        { "name": "Spongebob", "age": 26, "isEmployed": true },
        { "name": "Patrick", "age": 32, "isEmployed": false },
        { "name": "Squidward", "age": 41, "isEmployed": true }
]`;

// JSON.Stringify()
// console.log(names);
// console.log(JSON.stringify(names));

// JSON.parse()
// console.log(names);
// console.log(JSON.parse(names));


fetch("./JSON/person.json")
        // .json converts the fetched data into a json object 
        // & returns a promise i.e. the value of the json file
        .then(response => response.json())
        .then(value => console.log(value))
        .catch(error => console.error(error));