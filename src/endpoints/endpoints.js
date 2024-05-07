export async function getFilmes() {

    const url = 'http://localhost:8080/v2/acme/filmes'
    const response = await fetch(url)
    const data = await response.json()

    return data.filmes
}

export async function getFilmeId(id) {

    const url = `http://localhost:8080/v2/acme/filme/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.filme
}

export async function postFilme(filme) {
    const url = 'http://localhost:8080/v2/acmefilmes/filme/'
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)

    console.log(response.json())
    return response.ok
}

export async function deleteFilme(id) {

    const url = `http://localhost:8080/v2/acme/filme/delete/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    console.log(response.json)

    return response.ok
}

export async function updateFilme(id, filme) {

    console.log(id, filme)
    const url = `http://localhost:8080/v2/acme/filmes/${id}`
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(filme)
    }

    const response = await fetch(url, options)
    return response.json()
}

//atores

export async function getAtores() {

    const url = 'http://localhost:8080/v2/acme/atores'
    const response = await fetch(url)
    const data = await response.json()

    return data.atores
}


export async function getAtorId(id) {

    const url = `http://localhost:8080/v2/acme/ator/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.ator
}

export async function postAtor(ator) {
    const url = 'http://localhost:8080/v2/acmefilmes/ator/'
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(ator)
    }

    const response = await fetch(url, options)

    console.log(response.json())
    return response.ok
}

export async function deleteAtor(id) {

    const url = `http://localhost:8080/v2/acme/diretor/delete/:id`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    console.log(response.json)

    return response.ok
}

// export async function updateAtor(id, ator) {

//     const url = `http://localhost:8080/v2/AcmeFilmes/ator/${id}`
//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(ator)
//     }

//     const response = await fetch(url, options)

//     return response.json()
// }

//diretores

export async function getDiretores() {

    const url = 'http://localhost:8080/v2/acme/diretores'
    const response = await fetch(url)
    const data = await response.json()

    return data.diretores
}


export async function getDiretorId(id) {

    const url = `http://localhost:8080/v2/acme/diretor/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.diretor
}

export async function postDiretor(diretor) {
    const url = 'http://localhost:8080/v2/AcmeFilmes/diretor'
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(diretor)
    }

    const response = await fetch(url, options)

    console.log(response.json())
    return response.ok
}

export async function deleteDiretor(id) {

    const url = `http://localhost:8080/v2/acme/diretor/delete/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    console.log(response.json)

    return response.ok
}

// export async function updateDiretor(id, diretor) {

//     console.log(id, diretor)
//     const url = `http://localhost:8080/v2/AcmeFilmes/diretor/${id}`
//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(diretor)
//     }

//     const response = await fetch(url, options)
//     console.log(response.json())
//     return response.json()
// }

//generos

export async function getGeneros() {

    const url = 'http://localhost:8080/v2/acme/generos'
    const response = await fetch(url)
    const data = await response.json()

    return data.generos
}


export async function getGeneroId(id) {

    const url = `http://localhost:8080/v2/acme/genero/${id}`
    const response = await fetch(url)
    const data = await response.json()

    return data.generos
}

export async function postGenero(genero) {
    const url = 'http://localhost:8080/v2/acmefilmes/generos/'
    const options = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(genero)
    }

    const response = await fetch(url, options)

    console.log(response.json())
    return response.ok
}

export async function deleteGenero(id) {

    const url = `http://localhost:8080/v2/acme/genero/delete/${id}`
    const options = {
        method: 'DELETE'
    }
    const response = await fetch(url, options)
    console.log(response.json)

    return response.ok
}

// export async function updateGenero(id, genero) {

//     console.log(id, genero)
//     const url = `http://localhost:8080/v2/acmefilmes/generos/${id}`
//     const options = {
//         method: 'PUT',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(genero)
//     }

//     const response = await fetch(url, options)
//     console.log(response.json())
//     return response.json()
// }