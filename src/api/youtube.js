import axios from "axios"

const KEY = "AIzaSyAnv2oX1zcolV2Ntg8MbEH3goTxRm4YyOw"

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        type: "video",
        maxResults: 5,
        key: KEY
    }
})