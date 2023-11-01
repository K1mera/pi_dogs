import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getDogs, handlePages } from "../store";

import styles from './styles/ResultsComp.module.css'


export const ResultsComp = () => {
  const dispatch = useDispatch();
  const { dogs, currentPage, totalPages } = useSelector((state) => state.dogs);

  const startIndex = (currentPage - 1) * 8;

  // console.log(dogs);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      dispatch(handlePages(currentPage - 1));
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      dispatch(handlePages(currentPage + 1));
    }
  };

  
  // console.log(dogs);
  return (
    <main className={styles.mainContainer}>
      <h2>Breeds</h2>
      <section className={styles.cardContainer}>
        {dogs.slice(startIndex, startIndex + 8).map((item) => (
          <Link to={`/home/${item.id}`} className={styles.card} key={item.id}>
            <div className={styles.imageContainer}>
              <img
                className={styles.cardImage}
                src={item.image}
                alt="dog_image"
              />
            </div>
            <div className={styles.cardTextContainer}>
              <h3>{item.name}</h3>
              <div>
              <h4 className={ styles.tempsTitle }>Temperaments</h4>
              <ul className={styles.tempsItems}>
                {item.temperaments.map((temp, index) => (
                  <li key={index}>{temp.name}</li>
                ))}
              </ul>
              </div>
              <h4 className={ styles.weightData }>
                Weight: <span>{item.weight} Kg</span>
              </h4>
            </div>
          </Link>
        ))}
        <section className={styles.controlContainer}>
          <div className={styles.buttonsArea}>
            <h4>prev</h4>
            <button
              className={styles.controlButtons}
              onClick={handlePreviousPage}
            >
              {"<"}
            </button>
          </div>
          <h3>{currentPage}</h3>
          <div className={styles.buttonsArea}>
            <button className={styles.controlButtons} onClick={handleNextPage}>
              {">"}
            </button>
            <h4>next</h4>
          </div>
        </section>
      </section>
    </main>
  );
};
