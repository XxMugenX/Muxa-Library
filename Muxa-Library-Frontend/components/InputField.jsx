import { useState } from "react";
import Upload from "./Upload";

function InputField() {
    const style = {
        fontFamily: "san-serif",
        fontSize: "16px" ,
        fontStyle: "bold"
    }
    
    const [Title, setTitle] = useState('')
    const [Author, setAuthor] = useState('')
    const [Description, setDescription] = useState('')

    return (
        <>
            <form>
            <div style={style}>
                <label htmlFor="Title">Title of book</label>
                <div>
                    <input
                        className=""
                        id="Title"
                        placeholder="input title"
                        value={Title}
                        onChange={(e) => setTitle(e.target.value)}

                    ></input>      
                    </div>
                    <label htmlFor="Author">Author of book</label>
                <div>
                    
                    <input
                        className=""
                        id="Author"
                        placeholder="input author name"
                        value={Author}
                        onChange={(e) => setAuthor(e.target.value)}

                    ></input>      
                    </div>
                    <label htmlFor="Description">Description of book</label>
                <div>
                    
                    <input
                        className=""
                        id="Description"
                        placeholder="input book description"
                        value={Description}
                        onChange={(e) => setDescription(e.target.value)}
                        
                    ></input>      
                    </div>
                    <Upload title={Title} author={Author} description={Description}/>
                </div>
                </form>
        </>
    )
}

export default InputField;