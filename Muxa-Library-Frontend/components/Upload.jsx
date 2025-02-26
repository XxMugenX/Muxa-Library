
import { useState  } from 'react';
import { NavLink } from 'react-router';
import Homepage from '../src/pages/Homepage';

function Upload({ title, author, description }) {
    const [data, setData] = useState();
    const [file, setFile] = useState({});


     async function handleSubmit (event) {
         event.preventDefault();
         const formData = new FormData();
        const select = document.getElementById('file');
        
        //     const details = {
        //         title: title,
        //         author: author,
        //         description: description,
        //         file
        //  }
         //console.log(file)
         // console.log(select.files[0])
         formData.append('title', title);
         formData.append('author', author);
         formData.append('description', description);
         formData.append('file', select.files[0]);
        //      formData.forEach((items) => {
        //     console.log(items)
         // })
        
         
          
        
            const result = await fetch('http://localhost:8000/addbook', {
                method: 'POST',
                body: formData
                //     JSON.stringify({
                //     title,
                //     author,
                //     description,
                //     book: document.querySelector("#file").files
                // }),
            }).then(result => result.json());
            await setData(result);
         if (result.status === 'Successful') {
           window.alert(data.message);
         }
         else {
             window.alert('An error has occured');
         }
        
        console.log(data);
        }
        //console.log(response.status);
    

            
    
    return (
        <>          
            <div className="">
            <label  htmlFor="file">Choose file to upload</label><br></br>
            <input id ="file" style={{opacity: 1}}
                type="file"
                name="UploadFile"
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