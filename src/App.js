import axios from "axios";
import "./App.css";
import Navbar from "./components/Navbar";
import MostPopularVideoContainer from "./components/MainContentContainer";
import styled from "styled-components";
import { useEffect, useState } from "react";

function App({ youtube }) {
    //youtube라는 클래스를 받아옴 (즉, dependency를 받아옴)
    const [mostPopularData, setMostPopular] = useState([]);

    //초기 데이터
    const fetchmostPopularData = async () => {
        const data = await youtube.fetchmostPopularData();
        setMostPopular(data);
    };
    useEffect(() => {
        fetchmostPopularData();
    }, []);

    //params -> key=value즉, 입력한 검색어를 가지고 검색하고 싶다면 q=내가 입력한 검색어 이런식으로 변경해주면 됨
    //검색한 데이터
    const navbarSubmitHandler = async (searchData) => {
        //const youtube = new Youtube()이렇게 여기서 매번 클래스를 만들면 안됨
        //이유: 계속 네트워크 통신을 할 것 이므로
        //이렇게 여기서 만들어주는 것이 아니라 dependency를 외부에서 받아와야 함 -> 즉, 클래스를 외부에서 받아와야 한다, -> 그리고 이 클래스는 가장 최상단에서 가져와야 함
        const data = await youtube.navbarSubmitHandler(searchData);
        console.log(data);
        setMostPopular(data);
    };

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
