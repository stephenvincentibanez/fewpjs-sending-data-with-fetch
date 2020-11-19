function submitData(userName, userEmail){
    let userData = {
        name: "Steve",
        email: "steve@steve.com"
    }

    let configObject = {
        // method: "POST",
        headers: {
            "Content-type": "application/json",
            "Accept": "application/json"
                },
        body: JSON.stringify(userData)
        }

    fetch('http://localhost:3000/users', configObject)
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
    body.innerText = objectId
}

function appendErrorToDom(error){
    const body = document.querySelector("body")
    body.innerText = error
}
// submitData()