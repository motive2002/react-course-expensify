//array of objects

const myArrObj = [{
    name: 'Larry',
    age: 42
},
{
    name: 'Celery',
    age: 33
},
{
    name: 'David',
    age: 99
}]

//filter by name where name does not equal 'David'
const newArr = myArrObj.filter(({name}) => name !== 'David')

console.log(newArr)
//output: [ { name: 'Larry', age: 42 }, { name: 'Celery', age: 33 } ]
