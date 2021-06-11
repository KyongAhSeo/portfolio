import "./menu.scss";

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    // menuOpen 일때 active 클래스 추가되면서 메뉴 사이드메뉴 보여짐.
    <div className={"menu " + (menuOpen && "active")}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#intro">HOME</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#portfolio">PORTFOLIO</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#work">WORK</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href="#contact">CONTACT</a>
        </li>
      </ul>
    </div>
  );
}
