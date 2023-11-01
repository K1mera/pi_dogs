import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { SideBarComp, ResultsComp } from "../components";
import { getDogs } from "../store";

import styles from './styles/HomePage.module.css'


export const HomePage = () => {
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, []);
  

  return (
    <main className={ styles.layout }>
      <SideBarComp />
      <ResultsComp />
     
    </main>
  );
}
