import { NavLink } from "react-router-dom";

export function Album({ data }) {
    return (
        <div><NavLink to={`/detail/${data.id}`} activeClassName="active">{data.title}</NavLink> </div>
    )
}