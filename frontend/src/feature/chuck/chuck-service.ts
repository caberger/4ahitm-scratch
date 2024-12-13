const BASE_URL = "./api"

export async function loadJokes() {
    const response = await fetch(`${BASE_URL}/chuck`)
    return response.json()
}