import { useState } from "react"
import youtubeLogo from "../img/youtube-logo.png"
import styled from "styled-components";

export default function Navbar() {
    const [searchData, setSearch] = useState('');

    function handleSubmit() {
        console.log(searchData);
    }

    return (
        <NavBar>
            <ImgStyled src={youtubeLogo}></ImgStyled>
            <InputBox>
                <Input onChange={(event) => { setSearch(event.target.value) }} value={searchData}></Input>
                <Button onClick={handleSubmit}>🔍</Button>
            </InputBox>

        </NavBar>
    )
}

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