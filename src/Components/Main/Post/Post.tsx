import {
    EllipsisHorizontalOutline, HappyOutline, HeartOutline, Bookmark, 
    BookmarkOutline, Heart, ChatbubbleOutline, NavigateOutline
} from 'react-ionicons';
import driven from '../../../assets/images/driven.jpg';
import Comment from './Comment/Comment';
interface Post {
    posterSrc: string,
    posterName: string,
    postSrc?: string,
    postVideoMp4?: string,
    postVideoOgg?: string,
    comments?: string[]
}

export default ({
    posterSrc, posterName, postSrc, postVideoMp4, postVideoOgg, comments
}: Post) => {
    return (
        <div className="post">
            <div className="post-header">
                <div className="post-sender">
                    <a href="#"><img src={posterSrc} alt="algum instagrammer"/></a>
                    <a href="#"><h4> {posterName} </h4></a>
                </div>
                <a href="#">
                    <EllipsisHorizontalOutline cssClasses="icon"/>
                </a>
            </div>
            {
                postSrc?
                <div className="post-img">
                    <img src={postSrc} alt="alguma imagem"/>
                </div>:
                <div className="post-video">
                    <video preload="metadata" autoPlay muted loop controls>
                        {postVideoMp4 && <source src={postVideoMp4} type="video/mp4"/>}
                        {postVideoOgg && <source src={postVideoOgg} type="video/ogg"/>}
                    </video>
                </div>
            }
            <div className="post-action">
                <div className="post-utils">
                    <div className="icons-group">
                        <a href="#">
                            <input className="isfilled" type= "checkbox" 
                                   id= "heart" name= "post1" value= "like"/>
                            <label htmlFor = "heart">
                                <HeartOutline cssClasses="icon heart-outline"/>
                            </label>
                            <label htmlFor = "heart">
                                <Heart cssClasses="icon heart"/>
                            </label>
                        </a>
                        <a href="#">
                            <ChatbubbleOutline cssClasses="icon"/>
                        </a>
                        <a href="#">
                            <NavigateOutline cssClasses="icon"/>
                        </a>
                    </div>
                    <a href="#">
                        <input className= "isfilled" type= "checkbox" 
                               id= "bookmark" name= "post1" value= "bookmark"/>
                        <label htmlFor= "bookmark">
                            <BookmarkOutline cssClasses="icon bookmark-outline"/>
                        </label>
                        <label htmlFor= "bookmark">
                            <Bookmark cssClasses="icon bookmark"/>
                        </label>
                        
                    </a>
                </div>
                <div className="post-stats">
                    <a href="#"><img src={driven} alt="insta de alguém"/></a>
                    <span>
                        Curtido por <a href="#">respondeai</a> e 
                        <a href="#">outras 101.523 pessoas</a>
                    </span>
                </div>
                {comments?.map(comm => <Comment name='driven'>{comm}</Comment>)}
            </div>
            <div className="horizontal"></div>
            <div className="post-comment">
                <div>
                    <a href="#"><HappyOutline cssClasses="icon"/></a>
                    <input type="text" name="comments" className="comments" 
                           placeholder="Adiciona um comentário..."/>
                </div>
                <a href="#">Publicar</a>
            </div>
        </div>
    );
}