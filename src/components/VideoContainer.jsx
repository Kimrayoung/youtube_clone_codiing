//비디오를 클릭했을 때  실행될 컴포넌트 -> video를 어떻게 보여주지,,?
//즉, 메인 페이지에 있는 비디오들 중에 하나의 비디오를 클릭하면 이 컴포넌트가 랜딩
//이 컴포넌트에서는 실제로 비디오가 실행되어야 함
//문제 --> 여기서 비디오를 어떻게 보여주는가,,?
import styled from "styled-components";

export default function VideoContainer(props) {
    console.log('props checking', props);
    const data = props.data;
    const snippet = data.snippet;
    const videoId = data.id.videoId === undefined ? data.id : data.id.videoId;
    const description = snippet.description;
    const title = snippet.title;
    const channelTitle = snippet.channelTitle;

    return (
        <StyledVideoContainer>
            <VideoBox
                key={videoId}
                id="ytplayer" type="text/html"
                src={`https://www.youtube.com/embed/${videoId}`}
            >
                {/* <iframe
                    key={videoId}
                    id="ytplayer" type="text/html" width="600" height="405"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    style={{ position: "sticky" }}
                /> */}
            </VideoBox>
            <TitleContainer>{title}</TitleContainer>
            <ChannelContainer>{channelTitle}</ChannelContainer>
            <DescriptionContainer>{description}</DescriptionContainer>

        </StyledVideoContainer>
    )
}

const StyledVideoContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

const VideoBox = styled.iframe`
    width: 70%;
    height: 15%;
`

const TitleContainer = styled.div`
    margin: 10px;
`

const ChannelContainer = styled.div`
    margin: 10px;
`

const DescriptionContainer = styled.div`
    margin: 10px;
`