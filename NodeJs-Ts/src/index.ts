type handle = () => Promise<string>
const name: string = 'Dư Thanh Được'
const handle = () => Promise.resolve(name)


handle().then(console.log)