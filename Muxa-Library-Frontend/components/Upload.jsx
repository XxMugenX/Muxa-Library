function Upload() {
    function handleUpload() {
        
    }
    return (
        <>          
            <div className="">
            <label  htmlFor="input">Choose file to upload</label><br></br>
            <input id ="input" style={{opacity: 1}}
                type="file"
                accept=".pdf, .doc, .txt">
                </input>
                {/* handle unsupported files */}
                <button onClick={handleUpload}>Upload File</button>
            </div>
        </>
    )
}
export default Upload;