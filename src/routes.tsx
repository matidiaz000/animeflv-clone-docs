import { Route, Routes } from "react-router";

import Layout from "./Layout";

import Home from "./pages/GettingStarted/Home";
import Typography from "./pages/GettingStarted/Typography";

import Color from "./pages/Utilities/Color";
import UtilitiesOverview from "./pages/Utilities/Overview";

import Form from "./pages/Forms/Form";
import FormOverview from "./pages/Forms/Overview";

import Button from "./pages/Components/Button";
import Card from "./pages/Components/Card";
import Header from "./pages/Components/Header";
import Carousel from "./pages/Components/Carousel";
import Icons from "./pages/Components/Icons";
import Dropdown from "./pages/Components/Dropdown";
import Footer from "./pages/Components/Footer";
import ComponentsOverview from "./pages/Components/Overview";
import IconList from "./pages/Components/IconList";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route element={<Typography />} path="typography" />
        <Route path="components">
          <Route element={<ComponentsOverview />} index />
          <Route element={<Card />} path="card" />
          <Route element={<Button />} path="button" />
          <Route element={<Carousel />} path="carousel" />
          <Route element={<Header />} path="header" />
          <Route element={<Footer />} path="footer" />
          <Route element={<Dropdown />} path="dropdown" />
          <Route element={<Icons />} path="icons" />
          <Route element={<IconList />} path="iconlist" />
        </Route>
        <Route path="forms">
          <Route element={<FormOverview />} index />
          <Route element={<Form />} path="form" />
        </Route>
        <Route path="utilities">
          <Route element={<UtilitiesOverview />} index />
          <Route element={<Card />} path="card" />
          <Route element={<Color />} path="colors" />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
