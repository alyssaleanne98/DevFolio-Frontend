import './App.css';


//Import Components 
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom"

//import pages
import Home from "./pages/Home"
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  // URL should have YOUR HEROKU URL for your backend, make sure you include the trailing slash
  const URL = "http://localhost:4000/";

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="projects" element={<Projects URL={URL}/>}/>
        <Route path="/about" element={<About URL={URL} />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

