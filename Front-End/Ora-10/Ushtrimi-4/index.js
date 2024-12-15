let a = true
let b = false

let c = a && b // false

console.log(c)

a = false
b = true
c = a && b // false

a = true
b = true
c = a && b // true

a = false
b = false
c = a && b // false

// Ose
c = a || b 