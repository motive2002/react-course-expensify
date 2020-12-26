

const add = (a, b) => a + b

test('should add two numbers', () => {
    const result = add(3, 4)

    expect(result).toBe(7)

})

const generateGreeting = (name) => `Hello ${name}`

test('Should be a certain name', () => {

    const name = generateGreeting('James')

    expect(name).toBe('Hello James')
})