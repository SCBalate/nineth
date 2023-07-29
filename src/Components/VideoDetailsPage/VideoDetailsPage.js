import { useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import "./VideoDetailsPage.css"
// Render a YouTube video player

export const VideoDetailsPage = ({videos}) => {
    const {videoId} = useParams();

  
    const currentVideo = videos.find(v =>{
        console.log(v._id, videoId, v);
        return v._id.toString() === videoId
    });

    return(
        <div className="video-details-page">
            <div className="vd-page-left-section">
                <div className="video-container">
                 
<ReactPlayer url={currentVideo.src} />

                </div>
                <div style={{ display:"flex", margin:"5px",justifyContent:"start"}}>
                    <img src={currentVideo.thumbnail} alt={currentVideo.title} style={{borderRadius: "50%",
    width: "75px", height:"75px"}}/>
                <h3 >{currentVideo.title}</h3>
                </div>
               
                <hr/>
                <div className="create-notes-section">
<h1>Video Notes</h1>
                </div>

            </div>
            <div className="vd-page-right-section">
{videos.map((video) =>{
return(
   
        <div key={video._id} className="video-card">
          <img src={video.thumbnail} alt={video.title} />
          <h3>{video.title}</h3>
          <a href={`/video/${video._id}`}>Watch Video</a>
        </div>
     
)
})}
            </div>
        </div>
    )
}

export default VideoDetailsPage;