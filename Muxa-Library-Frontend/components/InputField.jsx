function InputField({title,placeholder}) {
    const style = {
        fontFamily: "san-serif",
        fontSize: "16px" ,
        fontStyle: "bold"
}

    return (
        <>
        <div style={style}>
                <p className="">{title}</p>
                <input className="" placeholder={placeholder}></input>    
        </div>
        </>
    )
}

export default InputField;