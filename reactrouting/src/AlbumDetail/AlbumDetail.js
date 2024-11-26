import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'
//const ALBUM_INFO_URL = "https://jsonplaceholder.typicode.com/albums"
//const GALLERY_URL = "https://jsonplaceholder.typicode.com/albums/ID/photos"

const BASE_URL = "https://jsonplaceholder.typicode.com"
const ALBUM_INFO_URI = "/albums"
const GALLERY_URI = "/albums/ID/photos"

const myClient = axios.create({
    baseURL: BASE_URL,
    timeout: 1000,
    headers: { 'X-My-Custom-Header': 'prova' }
})
const cancelTokenSource = axios.CancelToken.source();
const initialState = { title: '', images: [] }
export function AlbumDetail() {
    const { id } = useParams()
    const [state, setState] = useState(initialState)
    //    const [title, setTitle] = useState()
    //    const [images, setImages] = useState()
    useEffect(() => {
        myClient.get(`${ALBUM_INFO_URI}/${id}`).then(r => setState(s => ({ ...s, title: r.data.title })))
        myClient.get(GALLERY_URI.replace('ID', id), { cancelToken: cancelTokenSource.token })
            .then(r => setState(s => ({ ...s, images: r.data })))
            .catch(e => {
                if (axios.isCancel(e))
                    console.log("Richiesta di cancellazione tramite token", e)
                else
                    console.log(e)
            })
        //cancelTokenSource.cancel('Richiesta annullata') 

        //const fetchAlbumInfo = async () => {
        //var res = await (await fetch(`${ALBUM_INFO_URL}/${id}`)).json()
        //setTitle(res.title)
        //}
        //const fetchImages = async () => {
        //    var res = await (await fetch(GALLERY_URL.replace('ID', id))).json()
        //setImages(res)
        //    setState(s => ({ ...s, images: res }))
        //}
        //fetchAlbumInfo()
        //fetchImages()
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