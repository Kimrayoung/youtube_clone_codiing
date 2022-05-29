import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import MostPopularVideoContainer from "./components/MainContentContainer";
import styled from "styled-components";
import { useEffect, useState } from "react";

function App() {
    const [mostPopularData, setMostPopular] = useState([]);

    //초기 데이터
    const fetchmostPopularData = async () => {
        const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=26&key=AIzaSyAlYezJtDH7UhxXtHW2io4tJ_LrfJ2UEos`
        );
        setMostPopular(response.data.items);
    };
    useEffect(() => {
        fetchmostPopularData();
    }, []);

    //params -> key=value즉, 입력한 검색어를 가지고 검색하고 싶다면 q=내가 입력한 검색어 이런식으로 변경해주면 됨
    //검색한 데이터
    async function navbarSubmitHandler(searchData) {
        const res = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=26&q=${searchData}&key=AIzaSyAlYezJtDH7UhxXtHW2io4tJ_LrfJ2UEos`
        );
        setMostPopular(res.data.items);
    }

    //navbar에서 enter를 눌렀을때
    function onKeyPress(e, searchData) {
        if (e.key === "Enter") {
            navbarSubmitHandler(searchData);
        }
    }

    return (
        <StyledContainer>
            <Navbar
                // 함수 매핑 -> navbar컴포넌트에서 사용할 이름 = app컴포넌트에서의 함수 이름
                navbarSubmitHandler={navbarSubmitHandler}
                onKeyPress={onKeyPress}
            />
            <MostPopularVideoContainer mostPopularData={mostPopularData} />
        </StyledContainer>
    );
}

export default App;

const StyledContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
