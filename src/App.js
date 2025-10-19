import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, createHashRouter, RouterProvider } from "react-router-dom";
import ClassicoCalculator from "./Components/ClassicoCalculator/ClassicoCalculator";
import Footer from './Components/Footer/Footer';


const routers = createBrowserRouter([
  {
    path: "/",
    element: <h1 style={{ textAlign: "center", marginTop: "2rem" }}>Welcome to Classico 🎮</h1>,
  },
  {
    path: "/classico",
    element: <ClassicoCalculator />,
  },
]);


function App() {
  return (
    <div style={{ backgroundColor: "rgba(20, 27, 35, 1)", color: "white", minHeight: "100vh" }}>
      <RouterProvider router={routers} />
      <Footer/>
    </div>
  );
}

export default App;
