import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../molecules/Header";
import Stats from "../molecules/Stats";
import Nav from "../molecules/Nav";
import Start from "../atoms/Start";
import StatContext from "../../context/use-stats";

const Main = () => {
  const [page, setPage] = useState("/");

  const pageLinkCreator = (selectedPage) => {
    setPage(() => selectedPage);
  };
  const stats={
    puan : 15,
    cozulen : 2,
    yanlis : 0,
    dogru : 2
  }
  return (
    <StatContext.Consumer>
      {(stats) => {
        return (
          <div className="main">
            <Header type="main-header">Matematik Oyunu</Header>
            <div className="main-section">
              <Stats stats={stats} />
              <Nav pageLink={pageLinkCreator} />
            </div>
            <Link to={page}>
              <Start>Başla</Start>
            </Link>
          </div>
        );
      }}
    </StatContext.Consumer>
  );
};

export default Main;
