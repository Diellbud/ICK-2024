let multiply = 1

for(let number = 1;number<=20;number++){
    multiply = multiply * number
}
console.log(multiply)

const students = [
    {
       name:"Diell"     // index = 0
    },
    {
        name:"Mergim"   // index = 1
    },
    {
        name:"Daris"    // index = 2
    },
    {
        name:"Ari"      // index = 3
    }
]

const studentsLength = students.length
for(let i=0;i<studentsLength;i++){
    const currentStudent = students[i]
    console.log('index ' + i+1)
    console.log('name ' + currentStudent.name)
    if (i !== studentsLength - 1){
        console.log(' ')
    }
}