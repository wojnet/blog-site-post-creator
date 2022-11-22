import { useEffect, useState } from "react";
import { PostTitle, PostH2, PostH3, PostP, PostImage, PostLine } from "./PostElements";

const Left = ({ title, postJSON }) => {

    const [post, setPost] = useState([]);

    const renderPost = () => {
        setPost(() => {
            return postJSON.map((e, i) => {
                switch(e.type) {
                case "PostH2":
                    return <PostH2 key={i} value={e.value} />
                case "PostH3":
                    return <PostH3 key={i} value={e.value} />
                case "PostP":
                    return <PostP key={i} value={e.value} />
                case "PostImage":
                    return <PostImage key={i} value={e.value ? URL.createObjectURL(e.value) : ""} />
                case "PostLine":
                    return <PostLine key={i} />
                default:
                    break;
                }
            });
        })
    }

    useEffect(() => {
        renderPost();
        console.log(postJSON);
    }, [postJSON]);

    return (
        <div className="Left">
            <PostTitle value={title}/>
            {post ? post : "" }
            {/* <h4>JSON (tricky stuff)</h4> */}
            {/* {JSON.stringify(postJSON)} */}
        </div>
    );
}

export default Left;