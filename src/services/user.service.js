const getUser = (obj) => {
    return fetch('https://jsonplaceholder.typicode.com/users',
        {
            method: 'POST',
            body: JSON.stringify(obj),
            headers: {'Content-type': 'application/json; charset=UTF-8',}
        })
        .then(responce => responce.json())
}

export {getUser};