
//inline exports.

//named exports
export const isAdult = (age) => age >=18
export const canDrink = (age) => age >=21

//default export. Inline it is a anonymous function
export default (age) => age>=65


//or default referenced after the fact as a named function

// const isSenior = (age) => age >=65
// export {isSenior as default}