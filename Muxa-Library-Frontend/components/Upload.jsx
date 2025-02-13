import axios from 'axios'
import { NavLink } from 'react-router';

function Upload({title, author, description}) {
  
        const handleSubmit = async (event) => {
            event.preventDefault();
            console.log(title + author + description)
            try {
                const {data} = await axios.post('/api',{
                    title ,
                    author,
                    description,
                    book: document.querySelector("#file").files
                }, {
                    headers: {
                        'Content-Type' : 'multipart/form-data'
                    }
                }).then(<NavLink to="/"></NavLink>)    
                console.log(data + '  uploaded successfully')
            }catch (error) {
                console.log(error)      
            }      
            }
    
    return (
        <>          
            <div className="">
            <label  htmlFor="file">Choose file to upload</label><br></br>
            <input id ="file" style={{opacity: 1}}
                type="file"
                accept=".pdf, .doc, .txt">
                </input>
                {/* handle unsupported files */}
               <button type="submit" onClick={handleSubmit}>Upload File</button>
            </div>
        </>
    )
}
export default Upload;