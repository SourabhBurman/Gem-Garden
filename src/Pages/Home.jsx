import React from "react";
import { MainPagemainComponent } from "../Components/MainPage-mainComponent";
import { NewCollection } from "../Components/NewCollection";
import { CategoriesSection } from "../Components/CategoriesSection";
import { Gifts } from "../Components/Gifts";
import Bestseller from "../Components/Bestseller";
import Abouts from "../Components/Abouts";
import Footer from "../Components/Footer";

export const Home = () => {
  return (
    <>
      <MainPagemainComponent />
      <NewCollection />
      <CategoriesSection />
      <Bestseller />
      <Abouts />

      <Gifts />
    </>
  );
};
