//네트워크 통신을 처리하기 위한 부분
import axios from "axios";

class Youtube {
    constructor(key) {
        this.key = key;
    }

    async fetchmostPopularData() {
        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=${this.key}`
        );
        console.log("youtube.js", this.key);
        return response.data.items;
    }

    async navbarSubmitHandler(searchData) {
        const res = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${searchData}&key=${this.key}`
        );

        return res.data.items;
    }
}

export default Youtube;
