const person = {
    name: 'Jason',
    age: 49,
    location: {
        city: 'Vancouver',
        temp: 33
    }
}

//basic object destructuring. Variables are 1 to 1 named by properties
const {name, age} = person
console.log(`${name} is ${age}`)

//object in an object destructuring, along with renaming the property. Here, renaming temp as temperature
//and leaving city the same
const {city, temp: temperature} = person.location
console.log(`It\'s ${temperature} in ${city}`)

//Default values applied to destructuring. If the country property does not exist
//provide a default value instead.
const {country = 'Some country'} = person.location
console.log(`${city} is in ${country}`)

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

//Both renaming the property and setting a default
const {name: publisherName = 'Self published'} = book.publisher
console.log(publisherName)


//Destructuring arrays - same principles
const address = ['1299 S Juniper', 'Philadelphia', 'Pennsylvania', '19167']

//store array elements into variable names. To skip elements you can leave them blank
const [, myCity, myState] = address
console.log(`you are in ${myCity}, ${myState}`)


const item = ['Coffee', '$2.00', '$2.50', '$2.75']
const [menuItem, ,medium] = item
console.log(`A medium ${menuItem} costs ${medium}`)

