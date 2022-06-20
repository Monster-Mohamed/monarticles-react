import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AddArt from "./pages/AddArt";
import ArticlePage from "./pages/Article";
import Home from "./pages/Home";
import NotFound from "./pages/NorFound";

const AllRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.key}>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddArt />} />
        <Route path="/article/:_id" element={<ArticlePage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllRoutes;
