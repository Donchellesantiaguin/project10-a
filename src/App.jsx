import { Routes, Route } from "react-router-dom";
import {Home} from './pages/Home'; // Ensure correct import
import {Detail} from './pages/Detail'; // Ensure correct import
import './App.css';
import collectionData from "./assets/collection.json"; // Correct path

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path=":slug" element={<Detail />} /> {/* Match slug in URL */}
    </Routes>
    </>
  );
}

export default App;
