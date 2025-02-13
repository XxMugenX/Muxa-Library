import { NavLink } from "react-router"

function Homepage() {
    return (
        <>
            <div>WELCOME TO MUXA LIBRARY</div>
            <div>here are the available books in the library</div>
            <NavLink to= '/AddBooks'>Click here to add books</NavLink>
            
        </>
    )
}
export default Homepage