import "./topbar.scss";
import { Mail, ListAlt } from "@material-ui/icons";

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    //menuOpen일때 active 클래스 추가되면서 색변함.
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Kyong.
          </a>
          <div className="itemContainer">
            <Mail className="icon" />
            <a href="mailto:kyongahjulieseo@gmail.com">kyongahjulieseo@gmail.com</a>
          </div>
          <div className="itemContainer">
            <ListAlt className="icon" />
            <a
              href="https://www.notion.so/Kyong-Ah-Seo-7254217a777f449ebda804576e476d02"
              target="_blank"
              rel="noreferrer"
            >
              이력서
            </a>
          </div>
        </div>
        <div className="right">
          {/* 햄버거 클릭시 setMenuOpen과 menuOpen이 반대됨 */}
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
