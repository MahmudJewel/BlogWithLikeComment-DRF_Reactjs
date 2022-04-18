

export const CommentsView=({comment})=>{
    return(
        <div className='card'>
            <div>Comments: {comment.comment}</div>
            <div>by: {comment.author.username}</div>
        </div>
    )
}