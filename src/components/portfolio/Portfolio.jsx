import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import { allPortfolio, reactPortfolio, mernPortfolio, jsPortfolio } from "../../data";

export default function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "all",
      title: "All",
    },
    {
      id: "react",
      title: "React",
    },
    {
      id: "mern",
      title: "MERN",
    },
    {
      id: "js",
      title: "Javascript",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "all":
        setData(allPortfolio);
        break;
      case "react":
        setData(reactPortfolio);
        break;
      case "mern":
        setData(mernPortfolio);
        break;
      case "js":
        setData(jsPortfolio);
        break;
      default:
        setData(allPortfolio);
        break;
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio.</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList id={item.id} title={item.title} active={selected === item.id} setSelected={setSelected} />
        ))}
      </ul>

      <div className="container">
        {data.map((d) => (
          <div className="item">
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
