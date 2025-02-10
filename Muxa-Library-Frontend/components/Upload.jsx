function Upload() {
    return (
        <>
            <br></br>
            <div className="">
            <input
                type="file"
                accept=".pdf, .doc, .txt">
                </input>
                
                <button type="submit">submit</button>
            </div>
        </>
    )
}
export default Upload;