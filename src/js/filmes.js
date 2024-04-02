export async function getFilmes() {
    const url = 'http://localhost:8080/v2/acme/filmes'
    const response = await fetch(url)
    const data = await response.json()


    return data.filmes
}