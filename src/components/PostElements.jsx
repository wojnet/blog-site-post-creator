export const PostTitle = ({ value }) => {
    return (
        <h1 className="PostTitle">
            {value}
        </h1>
    );
}

export const PostH2 = ({ value }) => {
    return (
        <h2 className="PostH2">
            {value}
        </h2>
    );
}

export const PostH3 = ({ value }) => {
    return (
        <h3 className="PostH3">
            {value}
        </h3>
    );
}

export const PostP = ({ value }) => {
    return (
        <p className="PostP">
            {value}
        </p>
    );
}

export const PostImage = ({ value, alt }) => {
    return (
        <img className="PostImage" src={value} alt={alt} />
    );
}

export const PostLine = () => {
    return (
        <hr className="PostLine" />
    );
}