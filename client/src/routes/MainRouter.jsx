import { Routes, Route } from "react-router-dom";
import { LandingPage } from "../pages";
import { AppRouter } from "./";


export const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </>
  );
};
