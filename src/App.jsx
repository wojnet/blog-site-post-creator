import { useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

export const App = () => {

    const [title, setTitle] = useState();
    const [post, setPost] = useState([]);

	return (
		<div className="App">
			<Left title={title} postJSON={post} />
			<Right title={title} setTitle={setTitle} post={post} setPost={setPost} />
		</div>
	);
}