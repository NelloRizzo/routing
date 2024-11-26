import { useEffect, useState } from "react"
import { Album } from "../Album/Album.js"
import axios from 'axios'

const URL = "https://jsonplaceholder.typicode.com/albums"

axios.interceptors.response.use(
    response => ({...response, data: response.data.map(r => ({...r, title: r.title.toUpperCase()}))}),
    error => {
        console.error("Errore: ", error.message)
        return Promise.reject(error)
    }
)

export function Home() {
    const [albums, setAlbums] = useState([])
    const [error, setError] = useState(null)
    useEffect(() => {
        //const fetchData = () => fetch(URL).then(r => r.json()).then(r => setAlbums(r))
        //fetchData()
        axios.get(URL)
            .then(r => {
                setAlbums(r.data)
            }) 
            .catch(err => {
                setError(err)
            })
    }, [])
    return (
        <div className="container">
            <h1>Album Disponibili</h1>
            <div>{ error?.message }</div>
            <div>
                {
                    albums?.map(v =>
                        <Album data={v}></Album>
                    )
                }
            </div>
        </div>
    )
}