import React from "react";
import ElementInput from "./ElementInput";
import ImageInput from "./ImageInput";

const Right = ({ title, setTitle, post, setPost }) => {

    const [plusIsOpen, setPlusIsOpen] = React.useState(false);

    const deleteElement = (index) => {
        setPost(prev => {
            let arr = [...prev].filter((_, i) => i !== index);
            return arr;
        });
    }

    const addPostElement = (type) => {
        setPost(prev => {
            let arr = [...prev];
            arr.push({"type": type, "value": ""});
            return arr;
        })
    }



    return (
        <div className="Right">
            <h4>TITLE</h4>
            <input type="text" className="Right--title" value={title} onChange={(e) => setTitle(e.target.value)} />
            {
                post.map((e, i) => {
                    switch(e.type) {
                        case "PostImage":
                            return <ImageInput postIndex={i} deleteElement={deleteElement} post={post} setPost={setPost} />
                            break;
                        default:
                            return <ElementInput deleteElement={deleteElement} type={e.type} postIndex={i} post={post} setPost={setPost} />
                            break;
                    }
                })
            }
            <br />
            <button onClick={() => setPlusIsOpen(prev => !prev)}>+</button>
            { plusIsOpen && <ul className="Right--list">
                <li><button onClick={() => addPostElement("PostH2")}>H2</button></li>
                <li><button onClick={() => addPostElement("PostH3")}>H3</button></li>
                <li><button onClick={() => addPostElement("PostP")}>P</button></li>
                <li><button onClick={() => addPostElement("PostImage")}>IMG</button></li>
                <li><button onClick={() => addPostElement("PostLine")}>LINE</button></li>
            </ul> }
        </div>
    );
}

export default Right;