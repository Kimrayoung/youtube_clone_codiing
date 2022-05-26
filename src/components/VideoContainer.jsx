//비디오를 클릭했을 때  실행될 컴포넌트 -> video를 어떻게 보여주지,,?
//즉, 메인 페이지에 있는 비디오들 중에 하나의 비디오를 클릭하면 이 컴포넌트가 랜딩
//이 컴포넌트에서는 실제로 비디오가 실행되어야 함
//문제 --> 여기서 비디오를 어떻게 보여주는가,,?
import styled from "styled-components";

export default function VideoContainer() {
    return (
        <StyledVideoContainer>

        </StyledVideoContainer>
    )
}

const StyledVideoContainer = styled.div`
    display: flex;
    width: 80%;
    flex-wrap: wrap;
`