import { useState, useEffect } from "react";

const TrailerVid = () => {
    const [movieName, setMovieName] = useState("")
    const [youtubeVidID, setYoutubeVidID] = useState("")

    const ytDataApiKey = "AIzaSyCJgtXn61KlQ74yGdmwV6Ok18uSUMEapnQ";
    
    useEffect(() => {
        fetch(`https://www.googleapis.com/youtube/v3/search?key=${ytDataApiKey}&q=${movieName}%20trailer&part=snippet&maxResults=1&type=video`)
        .then(res => {
            if(!res.ok) {
                throw Error("Request failed")
            }
            return res.json()
        })
        .then(data => {
            console.log(data)
        })
    }, [])
    
    return(
        <div className="trailer-video"></div>
    )
}

export default TrailerVid;