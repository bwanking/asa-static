import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Index from './pages/Index';
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
//import Login from "./pages/Login";
import Profile from "./pages/Profile";

function App() {
  return (
    <Router basename="/asafinal"> {/* ✅ Updated to match your GitHub repo name */}
      <div className="App">
        <div className="max-w-[90%] md:max-w-[50%] mx-auto">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;


