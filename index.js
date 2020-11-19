function submitData(name, email){
    let userData = {
        name,
        email
    }

    let configObject = {
        method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
                },
        body: JSON.stringify(userData)
        }

    return fetch('http://localhost:3000/users', configObject)
    .then(function(response){
        return response.json();
    })
    .then(function(object){
        // console.log(object);
        appendToDom(object.id)
        // debugger
    })
    .catch(function(error) {
        alert("No no no");
        appendErrorToDom(error.message);
    })
}

function appendToDom(objectId){
    const body = document.querySelector("body")
    body.innerHTML = objectId
}

function appendErrorToDom(error){
    const body = document.querySelector("body")
    body.innerHTML = error
}
// submitData()