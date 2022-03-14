import Post from "./Post/Post";
import driven from '../../assets/images/driven.jpg';
import pharrel from '../../assets/images/pharrel.png';
import mars from '../../assets/videos/chunky.mp4';
import fob from '../../assets/videos/irresistible.mp4';
import blurred from '../../assets/videos/blurred_lines.mp4';


export default () => {
    const videos = [
        mars, fob, blurred
    ];
    return (
        <main>
            <Post posterSrc={driven} posterName={"Driven"} 
                  postSrc={pharrel} comments={[
                      '❤️❤️❤️❤️','Ansiosooooooo 🔥🔥🔥','FINALMENTE! AAAAAA 🤩👑🛐'
                      ]}/>
            {videos.map(video => {
                return (
                <Post posterSrc={driven} posterName={"Driven"} 
                  postVideoMp4={video} comments={[
                      '❤️❤️❤️❤️','Bora subir mais. 🔥','🥺🥺🥺 merece demais'
                      ]}/>
                )
            })}
        </main>
    );
}