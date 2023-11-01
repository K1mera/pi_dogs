import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AboutPage, HomePage } from "../pages";
import { DetailComp, NavBarComp } from "../components";

export const AppRouter = () => {

 

  return (
    <div
    //   className={
    //     location.pathname === "/home" ? styles.layoutHome : styles.layoutAbout
    //   }
    >
      <NavBarComp />

      <div
      // className={
      //   location.pathname === "/about" ? styles.contentAbout : styles.content
      // }
      >
        {/* !!Component */}
        <Routes>
          <Route path="home" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="home/:id" element={<DetailComp />} />

          <Route path="/*" element={<Navigate to="/home" />} />
        </Routes>
      </div>
    </div>
  );
};
