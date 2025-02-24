import { NavLink } from "react-router"
import BookCard from "../../components/bookcard"
import { useEffect, useState } from "react"

const styling1 = {
     width : "100%",
    display: "flex",
    backgroundColor : "green",
    alignItems: "center",
    justifyContent : "center"
}
const styling = {
   
    display: "grid",
    backgroundColor : "white",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    columnGap: "60px",
    rowGap : "15px"
}
function Homepage() {
    // const data = as
    const response = async () => {
        const result = await fetch('http://localhost:8000', {
            method: 'GET',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
       const data = await result.json();
        // for (const i in data) {
        //     console.log(data[i])
        // }
        console.log('data: ' + data)
       // console.log("result " + await result)
        setBook( data)
    }
    const [Books, setBook] = useState([])
    useEffect(() => {
        response();
    }, [])

    return (
        <>
            <div>WELCOME TO MUXA LIBRARY</div>
            <div>here are the available books in the library</div>
            {Books.length > 0 ? 
                <div style={styling1}>
                <div style={styling}>
                    {
                        Books.map((book)=> <BookCard book={book}></BookCard>)
                    }
                    </div>
                </div>    :
            <h2>no books available</h2>}
            <NavLink to= '/AddBooks'>Click here to add books</NavLink>
            
        </>
    )
}
export default Homepage