import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Link, useParams } from "react-router-dom";
import { getDogById } from '../store';

import styles from './styles/DetailComp.module.css';

export const DetailComp = () => {

  const dispatch = useDispatch();
  const { id } = useParams();

  const { dog } = useSelector(state => state.dogs)
  useEffect(() => {
    dispatch(getDogById(id));
  }, [id]);

  console.log(dog);

  return (
    <main className={styles.background}>
      <section className={styles.detailContainer}>
        <section className={styles.detailTitle}>Detail</section>
        <section className={styles.detailInfo}>
          <div className={styles.leftContainer}>
            <img className={styles.detailImage} src={dog.image} alt="" />
            <h2 className={ styles.dogName }>{dog.name}</h2>
            <h4 className={ styles.dogId }>ID: {dog.id}</h4>
          </div>
          <div className={styles.rightContainer}>
            <div className={styles.dataContainer}>
              <h3>Heigth</h3>
              <p>{dog.height} cm</p>
            </div>
            <div className={styles.dataContainer}>
              <h3>Weight</h3>
              <p>{dog.weight} kg</p>
            </div>
            <div className={styles.dataContainer}>
              <h3>Temperaments</h3>
              <p>
                {dog.temperaments
                  ? dog.temperaments.map((temp) => temp.name).join(", ")
                  : "N/A" // or display a loading message or spinner
                }
                
              </p>
            </div>
            <div className={styles.dataContainer}>
              <h3>Lifespan</h3>
              <p>{dog.average_lifespan}</p>
            </div>
          </div>
        </section>
        <Link to='/home' className={ styles.closeButton }>
          Close
        </Link>
      </section>
    </main>
  );
}
