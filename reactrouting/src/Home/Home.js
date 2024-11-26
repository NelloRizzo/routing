import { useEffect, useState } from "react"
import { Album } from "../Album/Album.js"

const URL = "https://jsonplaceholder.typicode.com/albums"
export function Home() {
    //const albums = [{userId: 1, id: 1, title:'titolo 1'}, {userId: 1, id: 2, title:'titolo 2'},{userId: 1, id: 3, title:'titolo 3'}]
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