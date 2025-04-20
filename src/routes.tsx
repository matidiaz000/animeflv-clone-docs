import { Route, Routes } from "react-router";

import Layout from "./Layout";
import Home from "./pages/GettingStarted/Home";
import Card from "./pages/Components/Card";
import Color from "./pages/Utilities/Color";
import Icons from "./pages/Components/Icons";
import Dropdown from "./pages/Components/Dropdown";
import Footer from "./pages/Components/Footer";
import Form from "./pages/Forms/Form";
import Header from "./pages/Components/Header";
import Carousel from "./pages/Components/Carousel";
import Typography from "./pages/GettingStarted/Typography";
import Button from "./pages/Components/Button";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<Card />} path="card" />
        <Route element={<Color />} path="colors" />
        <Route element={<Icons />} path="icons" />
        <Route element={<Dropdown />} path="dropdown" />
        <Route element={<Footer />} path="footer" />
        <Route element={<Form />} path="form" />
        <Route element={<Header />} path="header" />
        <Route element={<Carousel />} path="carousel" />
        <Route element={<Typography />} path="typography" />
        <Route element={<Button />} path="button" />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
