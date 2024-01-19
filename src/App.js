// import { Route, Routes } from "react-router-dom"
// import Home  from "./pages/Home"
// import About from "./pages/About"
// import Contact from "./pages/Contact"
// import Skills from "./pages/Skills"
// import Projects from "./pages/Projects"
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./pages/Main"

function App() {
  return (
    <div className="App ">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
