const helloTextElement = document.getElementById('helloText')

const onClickHereMethod = ()=>{
    // helloTextElement.innerText = 'Hello Ari'
    // helloTextElement.className = 'helloTextCSS'
    // console.log("hi")
    helloTextElement.innerText = Math.round( Math.random()*(100-1)+1)
}