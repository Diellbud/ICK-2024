const containerElement = document.getElementById("container")
const loadingTextElement = document.getElementById("loadingText")
const studentsInStorage = localStorage.getItem('students') ?? '[]'
const parsedStudents = JSON.parse(studentsInStorage)

const insertStudentsIntoDom = (students)=>{
    for(let index = 0; index<students.length;index++){
        const currentStudent = students[index]
        const studentContainerElement = document.createElement("div")
        studentContainerElement.className = "item"
        studentContainerElement.id = index
        
        const displayNameElement = document.createElement("h2")
        displayNameElement.innerText = currentStudent.title
        
        const pointsElement = document.createElement("h4")
        pointsElement.innerText = "ID:" + currentStudent.id
    
        if (currentStudent.completed == true){
            studentContainerElement.style.backgroundColor = "green"
        }
        else if (currentStudent.completed == false){
            studentContainerElement.style.backgroundColor = "red"
        }
        
        studentContainerElement.appendChild(displayNameElement)
        studentContainerElement.appendChild(pointsElement)
    
        containerElement.appendChild(studentContainerElement)
    }
}

const fetchDocumentsFromBackEnd = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(students => {
        loadingTextElement.style.display = "none"

        localStorage.setItem('students',JSON.stringify(students))

        insertStudentsIntoDom(students)
      }).catch(error=>{
        console.warn('er',error)
        loadingTextElement.innerText = 'Something Went Wrong! Are You Connected To The Internet?'
      });
      
}

insertStudentsIntoDom(parsedStudents)

fetchDocumentsFromBackEnd()