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
          <Route element={<ComponentsOverview />} path="/components" />
          <Route element={<Card />} path="/components/card" />
          <Route element={<Button />} path="/components/button" />
          <Route element={<Carousel />} path="/components/carousel" />
          <Route element={<Header />} path="/components/header" />
          <Route element={<Footer />} path="/components/footer" />
          <Route element={<Dropdown />} path="/components/dropdown" />
          <Route element={<Icons />} path="/components/icons" />
          <Route element={<IconList />} path="/components/iconlist" />
        </Route>
        <Route path="forms">
          <Route element={<FormOverview />} path="/forms" />
          <Route element={<Form />} path="/forms/form" />
        </Route>
        <Route path="utilities">
          <Route element={<UtilitiesOverview />} path="/utilities" />
          <Route element={<Card />} path="/utilities/card" />
          <Route element={<Color />} path="/utilities/colors" />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
