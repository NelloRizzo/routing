import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const ALBUM_INFO_URL = "https://jsonplaceholder.typicode.com/albums"
const GALLERY_URL = "https://jsonplaceholder.typicode.com/albums/ID/photos"

const initialState = { title: '', images: []}
export function AlbumDetail() {
    const { id } = useParams()
    const [ state, setState ] = useState(initialState)
//    const [title, setTitle] = useState()
//    const [images, setImages] = useState()
    useEffect(() => {
        const fetchAlbumInfo = async () => {
            var res = await (await fetch(`${ALBUM_INFO_URL}/${id}`)).json()
            //setTitle(res.title)
            setState(s => ({...s, title: res.title}))
        }
        const fetchImages = async () => {
            var res = await (await fetch(GALLERY_URL.replace('ID', id))).json()
            //setImages(res)
            setState(s => ({...s, images: res}))
        }
        fetchAlbumInfo()
        fetchImages()
    }, [id])
    return (
        <div className="container">
            <h1>Album "{state?.title}"</h1>
            {
                state?.images?.map(image =>
                    <img src={image.thumbnailUrl} alt={image.title} />
                )
            }
        </div>
    )
}