import './App.css'
import InputField from '../components/InputField'
import Upload from '../components/Upload'
function App() {
  

  return (
    <>
      <InputField title="Title of book" placeholder="Input the title of the book" id= "Title"></InputField>
      <InputField title="Author of book" placeholder="Input the Author of the book" id = "Author"></InputField>
      <InputField title="Description of book" placeholder="Input the Description of the book" id = "Description"></InputField>
      <Upload></Upload>
    </>
  )
}

export default App
