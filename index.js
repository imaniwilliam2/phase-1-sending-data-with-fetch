function submitData(name, email){
    return fetch(url, postObject)
    .then(res => res.json())
    .then(data => {
        const id = data.id
        const element = document.createElement('div')
        element.textContent = `New object with id: ${id}`
        document.body.append(element)
    })
    .catch(error => {
       const errorMessage = error.message
       
        const errorAlert = document.createElement('p')
        errorAlert.textContent = errorMessage
        document.body.append(errorAlert)
    })
}



const url = 'http://localhost:3000/users'
const bodyData = {
    name: "Steve",
    email : "steve@steve.com",
}
const postObject = {
    method: "POST",
    headers:{
        "Content-Type" : "application/json",
        "Accept" : "application/json",
    },
    body: JSON.stringify(bodyData)
}