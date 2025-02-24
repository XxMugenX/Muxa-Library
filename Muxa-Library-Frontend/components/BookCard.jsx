 const styling = {
     height: "400px",
        justifyItems: "center"
    }
const BookCard = ({ book }) =>  {
   
    return (
        <>
            <div className="book" style={styling}>
                <div style={{border : "solid 2px", borderRadius : "5px"}} >
                    <img src="../src/images/images.png" height={"300px"} width={"230px"}></img>
                    <h3 style={{backgroundColor: 'grey'}}>{book.Title}</h3>
                    <p style={{backgroundColor: 'grey'}}>{book.Author}</p>
                </div>
        </div>
        </>
    )
}

export default BookCard