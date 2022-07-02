import React from "react";

const VideoDetail = ({ video }) => {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`

    return (
        <div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
            </div>
            <div className="ui segment">
                <h4 className="ui header">{video.snippet.title}</h4>
                <p className="ui description">{video.snippet.description}</p>
            </div>
        </div>
    )
}

export default VideoDetail