import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../molecules/Header";
import Stats from "../molecules/Stats";
import Nav from "../molecules/Nav";
import Start from "../atoms/Start";

const Main = () => {
  const [page, setPage] = useState("/");

  const pageLinkCreator = (selectedPage) => {
    setPage(() => selectedPage);
  };

  return (
    <div className="main">
      <Header type="main-header">Matematik Oyunu</Header>
      <div className="main-section">
        <Stats />
        <Nav pageLink={pageLinkCreator} />
      </div>
      <Link to={page}>
        <Start>Başla</Start>
      </Link>
    </div>
  );
};

export default Main;
