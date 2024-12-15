//  --- Data Types ---

//String
const a = "5"
const b = "1.1"
const c = "Mergim"
const d = "Gima"
const e = 'true'
const f = "false"

// Number
const a1 = 5
const b1 = 6
const c1 = 1.1

// Boolean
const isAllowedToEnterSmth = true
const isGoodCoffe = true
const didIStudy = false
const isAuthorized = false
const isLoggedIn = true
const isVerifiedByBiometrics = false
const isAndroidPhone = true

// Undefined
const a2 = undefined
const b2 = undefined

// null
const a3 = null

//Object
const person = {
    name: "Diell",
    lastName: "Budima",
    age: 13,
    isProf: false,
    hobby: {
        name:"Football",
        rate: 9
        }
}
// console.log(person)
// console.table(person)
// console.table(person[age])


// Array
const students = [
    {
        name:"A",
        age: 6
    },
    {
        name:"B",
        age: -1
    },
    {
        name:"C",
        age: 0
    },
    {
        name:"D",
        age: 1
    },
    {
        name:"E",
        age: 2
    },
    {
        name:"F",
        age: 3
    },
    {
        name:"G",
        age: 4
    }
]


const person1 = {
    age: 15
}
person1.name = "Diell"
person1.name = undefined

delete person1.age
console.log(person1)

const p1 = {
    age: 13,
    name: "Diell"
}

const p2 = {
    ...p1,
    lastname: "Budima"
}
const p3 = {
    ...p2,
    lastname: "Gr"
}
