import {dogIns} from "../../../api";
import { setTemps } from "./tempSlice";




export const getTemps = () => {
    return async (dispatch) => {
      
      const { data } = await dogIns.get("/temperaments");

      dispatch(setTemps(data));
      
     
    };
}