import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import MostPopularVideoContainer from "./components/MainContentContainer";
import styled from "styled-components";
import { useEffect, useState } from "react";

function App() {
    const [mostPopularData, setMostPopular] = useState([]);
    //params -> key=value즉, 입력한 검색어를 가지고 검색하고 싶다면 q=내가 입력한 검색어 이런식으로 변경해주면 됨
    const search = {
        method: "get",
        url: "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=nct127&key=AIzaSyAlYezJtDH7UhxXtHW2io4tJ_LrfJ2UEos",
        headers: {},
    };

    const fetchmostPopularData = async () => {
        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyAlYezJtDH7UhxXtHW2io4tJ_LrfJ2UEos`
        );
        setMostPopular(response.data.items);
        console.log(mostPopularData);
    };
    useEffect(() => {
        fetchmostPopularData();
    }, []);

    return (
        <StyledContainer>
            <Navbar />
            <MostPopularVideoContainer mostPopularData={mostPopularData} />
        </StyledContainer>
    );
}

export default App;

const StyledContainer = styled.div`
    // width: 100%;
    // height: auto;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    // flex-direction: column;
`;
