import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const SingleBlog=({title, category, slug})=>{
    const navigate = useNavigate();
    const redirect = () => {
        navigate('blog/'+slug)
      }
    return(
        <div className="p-5 shadow">
            <h3>{title}</h3>
            <p>Topic: {category.title}</p>
            <Button onClick={redirect} >Read More</Button>
        </div>
    )
}