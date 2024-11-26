import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ALBUM_INFO_URL = "https://jsonplaceholder.typicode.com/albums"
const GALLERY_URL = "https://jsonplaceholder.typicode.com/albums/ID/photos"

export function AlbumDetail() {
    const { id } = useParams()
    //const images = [{ title: "Titolo dell'immagine", id: 1, thumbnail: '' }]

    const [title, setTitle] = useState()
    const [images, setImages] = useState()
    useEffect(() => {
        const fetchAlbumInfo = async () => {
            var res = await (await fetch(`${ALBUM_INFO_URL}/${id}`)).json()
            setTitle(res.title)
        }
        const fetchImages = async () => {
            var res = await (await fetch(GALLERY_URL.replace('ID', id))).json()
            setImages(res)
        }
        fetchAlbumInfo()
        fetchImages()
    }, [id])
    return (
        <div className="container">
            <h1>Album "{title}"</h1>
            {
                images?.map(image =>
                    <img src={image.thumbnailUrl} alt={image.title} />
                )
            }
        </div>
    )
}