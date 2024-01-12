import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { SideBarComp, ResultsComp } from "../components";
import { getDogs } from "../store";

import styles from './styles/HomePage.module.css'
import {Loader} from "../components/Loader";


export const HomePage = () => {

  const { loading } = useSelector(state => state.dogs)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDogs());
  }, []);



  

  return (
    <main className={ styles.layout }>
      {
        loading    ?
        <Loader /> :
        <>  
          <SideBarComp />
          <ResultsComp />
        </>
      }
     
    </main>
  );
}
