import { useState } from "react";
import "./work.scss";

export default function Work() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      icon: "./assets/globe.png",
      title: "Travel Pin App",
      desc: "MERN 스택과 React-map-gl 라이브러리를 사용하여 제작한 지도 웹 어플리케이션입니다. 원하는 곳을 클릭하여 마커를 생성할 수 있도록 하였고 회원가입, 로그인, 로그아웃 기능을 구현하였습니다.",
      img: "assets/travelpinapp.png",
      url: "https://eager-spence-2d8bd2.netlify.app/",
      notion: "https://www.notion.so/Travel-Pin-App-bcb0842eb1224ed88d1d32e469566e4f",
    },
    {
      id: 2,
      icon: "./assets/mobile.png",
      title: "Bong Pyeong",
      desc: "부모님께서 운영하시는 음식점을 소개하고자 제작하게 되었습니다. Swiper 라이브러리를 사용한 슬라이더 기능과 자바스크립트 만으로 toggle 기능을 구현하였습니다.",
      img: "assets/bpapp.png",
      url: "https://kyongahseo.github.io/bongpyeong/",
      notion: "https://www.notion.so/Bongpyeong-6a792e2248d34e7187c9635e63c4f808",
    },
    {
      id: 3,
      icon: "./assets/writing.png",
      title: "Blog",
      desc: "Node.js와 MongoDB의 흐름을 이해하고 실습하기 위해 제작하였습니다. 블로그 CRUD 기능을 구현하였으며, 클라이언트와 서버 사이에 오고가는 데이터가 어떤 것인지 둘의 연결이 어떠한 원리로 작동되는 것인지 공부하는 기회가 되었습니다. ",
      img: "assets/blogapp.png",
      url: "https://polar-plains-99011.herokuapp.com/",
      notion: "https://www.notion.so/Blog-0cd5acb9734c45ddb587bddedea546c3",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0); //오른쪽 arrow 클릭시
  };

  return (
    <div className="work" id="work">
      <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className="link">
                    <a href={d.url} target="_blank" rel="noreferrer">
                      Link
                    </a>
                    <a href={d.notion} target="_blank" rel="noreferrer">
                      Description
                    </a>
                  </div>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
      <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick()} />
    </div>
  );
}
