import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "../assets/singleblog.css"

export const SingleBlog=({title, author, slug})=>{
    const navigate = useNavigate();
    const redirect = () => {
        navigate('blog/'+slug)
      }
    return(
        <div className="p-5 ms-1 my-3 shadow single">
            <h3>{title}</h3>
            <p>Author: {author}</p>
            <Button onClick={redirect} >Read More</Button>
        </div>
    )
}