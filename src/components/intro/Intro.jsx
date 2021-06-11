import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      backSpeed: 60,
      showCursor: true,
      strings: ["Junior", "Developer"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/me.png" alt="프로필사진" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>안녕하세요!</h2>
          <h1>서경아입니다.</h1>
          <h3>
            프론트엔드 <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="아래로 스크롤" />
        </a>
      </div>
    </div>
  );
}
