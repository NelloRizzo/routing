import { useEffect, useState } from "react"
import { Album } from "../Album/Album.js"

const URL = "https://jsonplaceholder.typicode.com/albums"
export function Home() {
    const [albums, setAlbums] = useState()
    useEffect(() => {
        const fetchData = () => fetch(URL).then(r => r.json()).then(r => setAlbums(r))
        fetchData()
    }, [])
    return (
        <div className="container">
            <h1>Album Disponibili</h1>
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