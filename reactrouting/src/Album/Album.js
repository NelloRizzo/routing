import { Link } from "react-router-dom";

export function Album({ data }) {
    return (
        <div><Link to={`/detail/${data.id}`}>{data.title}</Link> </div>
    )
}