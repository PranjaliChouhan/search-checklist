import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Search from "./components/Search";
import Checklist from "./components/Checklist";






function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Checklist />} />
        <Route path="/search" element={<Search/>} />
        
        </Routes>
      
    </Router>
  );
}

export default App;