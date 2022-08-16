import { Link } from "react-router-dom";
import Header from "../molecules/Header";
import Start from "../atoms/Start";
const Result = () => {
  return (
    <div className="result-page">
      <div className="result-section">
        <div class="result">
          <Header type="main-header">Sonuç</Header>
          <ul className="result-list">
            <li>Puan:</li>
            <li>Doğru Cevap:</li>
            <li>Yanlış Cevap:</li>
          </ul>
          <Link to="/">
            <Start>Başla</Start>
          </Link>
        </div>
        <div class="questions">
          <Header type="main-header">Sorular</Header>
          <ul className="question-list">
            <li>3 x 4 = 12</li>
            <li>4 x 4 = 16</li>
            <li>5 x 6 = 30</li>
            <li>3 x 4 = 12</li>
            <li>4 x 4 = 16</li>
            <li>5 x 6 = 30</li>
            <li>3 x 4 = 12</li>
            <li>4 x 4 = 16</li>
            <li>5 x 6 = 30</li>
            <li>5 x 6 = 30</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Result;
