import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Youtube from "./components/service/youtube";

const root = ReactDOM.createRoot(document.getElementById("root"));
const youtube = new Youtube(process.env.REACT_APP_YOUTUBE_API_KEY);
//이렇게 여기서 한번만 클래스를 만들어주고 dependency가 필요한 곳에 전달해줌
root.render(
    <React.StrictMode>
        <App youtube={youtube} />
        {/* 나중에 유닛테스트 할때는 여기에 이미 정해진 데이터를 리턴해주는 클래스를 넣어주면 됨 즉, {youtube}이 자리에 미리 정해진 데이터를 리턴해주면 됨 */}
    </React.StrictMode>
);
