import { ChuckNorris } from "./chuck"

const BASE_URL = "./api"

export async function loadJokes() {
    const response = await fetch(`${BASE_URL}/chuck`)
    return await response.json() as ChuckNorris[]
}
export async function loadRandomJoke() {
    const response = await fetch(`${BASE_URL}/chuck/random`)
    const joke: ChuckNorris = await response.json()
    return joke
}