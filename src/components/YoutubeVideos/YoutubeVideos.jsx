import { map } from "jquery";
import React, { useState, useEffect } from "react";
import "./YoutubeVideos.css";
// import items from "./data.js";

function YoutubeVideos() {
  const [videos, setVideos] = useState([]);

//   useEffect(() => {
//     fetch(
//       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&channelId=UCE_M8A5yxnLfW0KghEeajjw&maxResults=8&order=date&key=AIzaSyCCpbXbaQl52qYD-Ug1vIje0RSMLVJ-328 `
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         // console.log(data);
//         setVideos(data.items);
//       });
//   }, []);

  //   console.log(videos);

  return (
    <section className="yotubevideo-wrapper"> 
      <div className='allvideoWrapper' >
        <div  className='container-fluid'>
          <div className='row align-items-center justify-content-center text-center'>
            <div className='col-12' >
              <div className='title-wrapper video-title-wrapper'>
                <br/>
                <h1>Latest Videos </h1>
                <br/>
              </div>
            </div>
             {videos?.map((singleVideo, i) =>{
                let vidId = singleVideo.id.videoId;
                let videoLink = `https://www.youtube.com/watch?v=${vidId}`;
                 return(
                    <div key={i} className="col-sm-12 col-md-6 col-lg-4">
                       <div className='single-video-wrapper'>
                         <div className='video-thumbnail'> 
                         <a href={videoLink} target = '_blank'>
                            <img src={singleVideo.snippet.thumbnails.high.url} alt= "thumbnail"/></a>
                            </div>
                            <div className='video-info-wrapper'>
                              <div className='video-title'>
                              <a href={videoLink} target = '_blank'>
                                 {singleVideo.snippet.title}</a>
                               </div>
                               <div className='video-description'> {singleVideo.snippet.description}
                                     </div>
                            </div>

                         </div>
                    </div>
                 )
             })}

          </div>
        </div>
      </div>
    </section>

    
  );
}

export default YoutubeVideos;
