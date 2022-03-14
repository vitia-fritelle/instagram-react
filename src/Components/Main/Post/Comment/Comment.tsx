import { HeartOutline } from "react-ionicons";

interface Comment {
    name: string,
    children: string
}

export default ({name, children}: Comment) => {
    return(
        <div className="post-all-comments">
            <span>
                <a href="#">{name}</a>
                {children}
            </span>
            <HeartOutline cssClasses="mini-icon"/>
        </div>
    );
}