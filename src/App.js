import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import styled from "styled-components";

function App() {
    return (
        <StyledContainer>
            <Navbar />
        </StyledContainer>
    );
}

export default App;

const StyledContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;
