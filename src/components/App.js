import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoDetail from "./VideoDetail"
import VideoList from "./VideoList";
import useVideos from "../hooks/useVideos";

const App = () => {
    
    const [selectedVideo, setSelectedVideo] = useState(null)
    
    const [videos, search] = useVideos("learn react")
    
    useEffect(() => {
        setSelectedVideo(videos[0])
    }, [videos])

    

    return (
        <div className="ui container" style={{marginTop: "20px"}}>
            <SearchBar onTermSubmit={search} />
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        {selectedVideo ? <VideoDetail video={selectedVideo} /> : <div>Loading...</div>}
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App