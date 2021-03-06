import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import Login from "./routes/Login";

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
