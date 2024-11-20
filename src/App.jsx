import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";

import { Outlet, Route, Router, Routes } from "react-router-dom";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Error from "./components/Error";
import RestaurentMenu from "./components/RestaurentMenu";

const Applayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Applayout />}>
          <Route index element={<Body />} />
          <Route path="about" element={<About />} />
          <Route path="Contact" element={<ContactUS />} />

          <Route path="*" element={<Error />} />
          <Route path="/restaurents/:resId" element={< RestaurentMenu/>} />


        </Route>
      </Routes>
    </div>
  );
};

export default App;
