import {Route, Routes} from "react-router-dom";
import HomePage from "@/pages/HomePage/Homepage";
import CurriculumPage from "@/pages/CurriculumPage/CurriculumPage";

function App() {
  return (
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/curriculum" element={<CurriculumPage/>} />
      </Routes>
  );
}

export default App;
