import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "../vendor/fonts.css";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Profile from "../pages/SavedNews/SavedNews";
import About from "../components/About/About";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="app-background">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
      <About />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
