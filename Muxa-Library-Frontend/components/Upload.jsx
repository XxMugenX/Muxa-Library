
import { useState  } from 'react';

function Upload({ title, author, description }) {
    const [data, setData] = useState()
    const [file, setFile] = useState({})


     async function handleSubmit (event) {
         event.preventDefault();
         const formData = new FormData();
        const select = document.getElementById('file').files[0]
        
        //     const details = {
        //         title: title,
        //         author: author,
        //         description: description,
        //         file
        //  }
         //console.log(file)
         // console.log(select)
         formData.append('title', title)
         formData.append('author', author)
         formData.append('description', description)
         formData.append('file', select)
        //      formData.forEach((items) => {
        //     console.log(items)
         // })
        
         
          
        
            const result = await fetch('http://localhost:8000/addbook', {
                mode: 'no-cors',
                method: 'POST',
                body: formData
                //     JSON.stringify({
                //     title,
                //     author,
                //     description,
                //     book: document.querySelector("#file").files
                // }),
            }).then(result => result.json())
            setData(result)
       
        
        console.log(data)
        }
        //console.log(response.status);
    

            
    
    return (
        <>          
            <div className="">
            <label  htmlFor="file">Choose file to upload</label><br></br>
            <input id ="file" style={{opacity: 1}}
                type="file"
                accept=".pdf, .doc, .txt"
                onChange={(e)=> setFile(e.target.value)}>
                </input>
                {/* handle unsupported files */}
               <button type="submit" onClick={handleSubmit}>Upload File</button>
            </div>
        </>
    )
}
export default Upload;