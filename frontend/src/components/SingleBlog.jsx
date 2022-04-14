

export const SingleBlog=({title, category})=>{
    return(
        <div className="border border-primary p-5">
            <h3>{title}</h3>
            <p>Topic: {category.title}</p>
        </div>
    )
}