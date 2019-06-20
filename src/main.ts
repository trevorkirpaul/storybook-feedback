const name: string = 'Trevor'

const greeter = ({ name, age }: { name: string; age: number }) => {
  return console.log(`Hello, ${name}, you are ${age}`)
}

export { greeter, name }
