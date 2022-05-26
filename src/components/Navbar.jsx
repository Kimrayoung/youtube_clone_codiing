import { useState } from "react"
import youtubeLogo from "../img/youtube-logo.png"
import styled from "styled-components";

export default function Navbar() {
    //모르겠는 부분 -> navbar에서 데이터를 입력하면 그 입력한 데이터가  App.js로 넘어가서 search의 q=""로 들어가야 하는데 여기서 어떻게 데이터를 전달?
    //하위 컴포넌트에서 상위컴포넌트로는 데이터를 전달할 수 없으니 event발생을 전달해야 한다 -> 어떻게? 
    //event전달 -> onClick이 일어나면 handleSubmit이 실행되는데 이게 prop로 받아와야 하는지,,?
    const [searchData, setSearch] = useState('');

    function handleSubmit() {
        console.log(searchData);
    }

    return (
        <NabBarStyled>
            <NavBar>
                <ImgStyled src={youtubeLogo}></ImgStyled>
                <InputBox>
                    <Input onChange={(event) => { setSearch(event.target.value) }} value={searchData}></Input>
                    <Button onClick={handleSubmit}>🔍</Button>
                </InputBox>
            </NavBar>
        </NabBarStyled>

    )
}

const NabBarStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const NavBar = styled.div`  
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 20%;
    background-color: black;
    padding: 0px 10px;
    margin: 20px 0px;
`

const ImgStyled = styled.img`
    width: 50px;
`

const InputBox = styled.div`
    display: flex;
`

const Input = styled.input`
    width: 1000px;
    height: 30px;
    font-size: 20px;
    padding: 0px 10px;
`

const Button = styled.button`
    background-color: #878f99;
    width: 40px;
`