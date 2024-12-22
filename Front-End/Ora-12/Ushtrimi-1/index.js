const students = [
{ name: "Arber",   points: 85 },
{ name: "Blerta",  points: 92 },
{ name: "Dion",    points: 78 },
{ name: "Elda",    points: 88 },
{ name: "Fjolla",  points: 95 },
{ name: "Genti",   points: 72 },
{ name: "Hana",    points: 80 },
{ name: "Ilir",    points: 67 },
{ name: "Jonida",  points: 89 },
{ name: "Kreshnik",points: 91 },
{ name: "Luan",    points: 74 },
{ name: "Miranda", points: 85 },
{ name: "Nora",    points: 79 },
{ name: "Omer",    points: 82 },
{ name: "Petrit",  points: 77 }
];

const containerElement = document.getElementById("container")

for(let index = 0; index<students.length;index++){
    const currentStudent = students[index]
    const studentContainerElement = document.createElement("div")
    studentContainerElement.className = "item"
    studentContainerElement.id = index
    
    const displayNameElement = document.createElement("h2")
    displayNameElement.innerText = currentStudent.name
    
    const pointsElement = document.createElement("h4")
    pointsElement.innerText = "Points:" + currentStudent.points

    studentContainerElement.appendChild(displayNameElement)
    studentContainerElement.appendChild(pointsElement)

    containerElement.appendChild(studentContainerElement)
}

const removeRandomNumber = ()=>{
    const randomNumber = Math.random() * (students.length - 1 - 0) + 0
    const precRandomNumber = Math.round(randomNumber)
    const elementToBeRemoved = document.getElementById(precRandomNumber)

    containerElement.removeChild(elementToBeRemoved)
    alert(students[precRandomNumber].name + " Was Removed")
}