const ElementInput = ({ type, postIndex, deleteElement, post, setPost }) => {
    return (
        <section style={{ display: "flex", width: "100%", gap: "10px" }}>
            <input type="text" placeholder={type} className="ElementInput" value={post[postIndex].value} onChange={(e) => setPost(prev => {
                let arr = [...prev];
                arr[postIndex].value = e.target.value;
                return arr;
            })} />
            <button onClick={() => deleteElement(postIndex)} style={{ width: 20, background: "none", border: "none", cursor: "pointer" }}>🗑️</button>
        </section>
    );
}

export default ElementInput;