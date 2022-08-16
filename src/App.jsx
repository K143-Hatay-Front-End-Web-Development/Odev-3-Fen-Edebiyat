import { Routes, Route } from "react-router-dom";
import Main from "./components/organisms/Main";
import Result from "./components/organisms/Result";
import Sum from "./components/organisms/Sum";
import Subtract from "./components/organisms/Subtract";
import Multiply from "./components/organisms/Multiply";
import Divide from "./components/organisms/Divide";
import NotFound from "./components/organisms/NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="sum" element={<Sum />} />
        <Route path="subtract" element={<Subtract />} />
        <Route path="multiply" element={<Multiply />} />
        <Route path="divide" element={<Divide />} />
        <Route path="result" element={<Result />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;