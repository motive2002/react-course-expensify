console.log('utils.js is running')

const square = (X) => X * X

const subtract = (a, b) => a - b

//inline export
export const add = (a, b) => a + b

//export after the fact
export {square, subtract as default}


