//가져온 비디오들을 보여주는 곳
import styled from "styled-components";

export default function MainContentContainer(props) {
    const data = props.mostPopularData;
    console.log(data);
    return (
        <MainContentContainerStyled>
            <MainContentStyled>
                {data && data.map((d, i) => (
                    <VideoContent key={i}>
                        <VideoImg src={d.snippet.thumbnails.default.url}></VideoImg>
                        <Title key={i}>{d.snippet.title}</Title>
                    </VideoContent>
                ))}
            </MainContentStyled>
        </MainContentContainerStyled>
    )
}

const MainContentContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width:  100%;
`

const MainContentStyled = styled.div`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
`

const VideoContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45%;
    border: 2px solid #DFDFDE;
    border-radius: 10px;
    margin: 10px;
    padding: 5px;
    box-sizing: border-box;
    transition: transform 250ms ease-in;
    &:hover{
        cursor: pointer;
        transform: scale(1.15);
    }
`

const Title = styled.div`
    width: 350px;
    height: 100px;
    margin: 20px;
`

const VideoImg = styled.img`
    width: 280px;
`