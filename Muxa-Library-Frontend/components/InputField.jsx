function InputField({title,placeholder}) {
    const style = {
        fontFamily: "san-serif",
        fontSize: "16px" ,
        fontStyle: "bold"
}

    return (
        <>
            <div style={style}>
                <label>{title}</label>
                <div>
                    <input  className="" placeholder={placeholder}></input>  
                </div>
        </div>
        </>
    )
}

export default InputField;