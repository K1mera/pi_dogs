import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {filteringDogs, getDogs, getTemps, onSearchBreed, orderAscendingDogs, orderDescendingDogs} from "../store";

import styles from "./styles/SideBarComp.module.css";
import {useForm} from "../hooks";

export const SideBarComp = () => {
  const dispatch = useDispatch()

  const { dogs } = useSelector( state => state.dogs )
// console.log(dogs);
  const { temps } = useSelector( state => state.temps )
  useEffect(() => {
    dispatch(getTemps())
    
  }, [])

  

  const { breed, onInputChange } = useForm({
    breed: '',

  }) 

  const [selectedTemperaments, setSelectedTemperaments] = useState([]);

  useEffect(() => {
    if (selectedTemperaments.length === 0) {
      dispatch(onSearchBreed({ breed }));
    } else {
    dispatch(filteringDogs(selectedTemperaments, dogs))
    };
  }, [selectedTemperaments, dispatch]);

// // console.log(selectedTemperaments);

  const handleTempCheckboxChange = (tempName) => {
    console.log(tempName);
    if (selectedTemperaments.includes(tempName)) {
      setSelectedTemperaments(
        selectedTemperaments.filter((temp) => temp !== tempName)
      );
    } else {
      setSelectedTemperaments([tempName, ...selectedTemperaments]);
    }
  };

  // console.log(selectedTemperaments);

  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(onSearchBreed({ breed }));
  }

  const onAscendingClick = (dogs) => { 
    dispatch(orderAscendingDogs(dogs));
    
  };

  const onDescendingClick = (dogs) => {
    dispatch(orderDescendingDogs(dogs)); 
  };


  

  return (
    <main className={styles.sideBar}>
      <form onSubmit={onSubmit} className={styles.searchSection}>
        <input
          className={styles.searchBar}
          type="text"
          placeholder="Golden retriever..."
          name="breed"
          value={breed}
          onChange={onInputChange}
        />
        <button type="submit" className={styles.searchButton}>
          Search
        </button>
        <section className={styles.filterSection}>
          <div className={styles.tempFilter}>
            <h3>Filter by temperaments</h3>
            <div className={styles.inputs}>
              {temps.map((item) => (
                <div key={item.id} className={styles.singleInput}>
                  <input
                    id={item.name}
                    name={item.name}
                    type="checkbox"
                    onChange={() => handleTempCheckboxChange(item.name)}
                  />
                  <label htmlFor={item.name}>{item.name}</label>
                </div>
              ))}
            </div>
          </div>
        </section>
      </form>
      <div className={styles.orderFilter}>
        <h3>Order</h3>
        <div className={styles.orderButtonsArea}>
          <button
            onClick={() => onAscendingClick(dogs)}
            className={styles.orderButtons}
          >
            A - Z
          </button>
          <button
            onClick={() => onDescendingClick(dogs)}
            className={styles.orderButtons}
          >
            Z - A
          </button>
        </div>
      </div>
    </main>
  );
};
