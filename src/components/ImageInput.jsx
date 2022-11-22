const ImageInput = ({ postIndex, deleteElement, post, setPost }) => {

    const handleChange = (e) => {
        setPost(prev => {
            let arr = [...prev];
            arr[postIndex].value = e.target.files[0];
            return arr;
        })
    }

    return (
        <section style={{ display: "flex", width: "100%", gap: "10px" }}>
            <input type="file" accept="image/gif, image/jpeg, image/png" className="ImageInput" onChange={handleChange} />
            <button onClick={() => deleteElement(postIndex)} style={{ width: 20, background: "none", border: "none", cursor: "pointer" }}>🗑️</button>
        </section>
    );
}

export default ImageInput;