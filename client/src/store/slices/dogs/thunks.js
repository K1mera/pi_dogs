import { closeSuccess, createDog, dogById, openModal, setCurrentPage, setDogs, startLoading } from "./dogSlice";
import { dogIns } from "../../../api";

import axios from "axios";


export const getDogs = (page = 1) => {
  return async (dispatch) => {
    dispatch(startLoading());

    const { data } = await dogIns.get("/dogs");

    dispatch(setDogs(data));
    dispatch(setCurrentPage(page));
  };
};

export const handlePages = (page = 1) => {
  return async (dispatch) => {
    dispatch(setCurrentPage(page));
  };
};

export const orderDescendingDogs = (dogs) => {
  return async (dispatch) => {
    dispatch(startLoading());

    const dogsSorted = [...dogs].sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    dispatch(setDogs(dogsSorted));
    
  };
};

export const orderAscendingDogs = (dogs) => {
  return async (dispatch) => {
    dispatch(startLoading());

    const dogsSorted = [...dogs].sort((a, b) => {
      const nameA = a.name;
      const nameB = b.name;
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    dispatch(setDogs(dogsSorted));
    
  };
};

export const onSearchBreed = ({ breed }) => {
  return async (dispatch) => {
    const { data } = await dogIns.get("/dogs");

    const dogsMatching = data.filter((item) =>
      item.name.toLowerCase().startsWith(breed.toLowerCase())
    );

    dispatch(setDogs(dogsMatching));
    dispatch(setCurrentPage(1));
  };
};

export const filteringDogs = (selectedTemperaments, dogs) => {
  return async (dispatch) => {
    // console.log(selectedTemperaments);
  

    const dogsMatching = dogs.filter((dog) =>
      selectedTemperaments.some((selectedTemp) =>
        dog.temperaments.some((tempObj) => tempObj.name === selectedTemp)
      )
    );
    
    
    dispatch(setDogs(dogsMatching));
  };
};

export const getDogById = (id) => {
  return async (dispatch) => {
    dispatch(startLoading());
    const { data } = await dogIns.get(`/dogs/${id}`);
    
    dispatch(dogById(data))
  }
}

export const openFormModal = (value) => {
  return async (dispatch) => {
    dispatch(openModal(value));
  }
} 

export const addNewDog = ({ name, height, weight, average_lifespan, temperaments }) => {
  return async (dispatch) => {
    const res = await axios.get("https://api.thedogapi.com/v1/images/search");
    const image = res.data[0].url;
    // const temperaments = await temp.map((name) => ({ name }));
    
    console.log(temperaments);
    const { data } = await dogIns.post("/dogs", {
      name,
      height,
      weight,
      average_lifespan,
      temperaments,
      image
    });

    dispatch(createDog(data));
    
  };
};

export const getModalClose = () => {
  return async (dispatch) => {
    dispatch(closeSuccess());
  }
}