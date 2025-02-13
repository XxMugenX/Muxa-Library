import '../App.css'
import AddBookForm from '../../components/AddBookForm'
import { NavLink } from 'react-router'

function AddBooks() {
  

  return (
    <>
          <AddBookForm></AddBookForm>
           <NavLink to="/">Go to homepage</NavLink>
      
    </>
  )
}
export default AddBooks
