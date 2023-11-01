import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks";

import styles from "./styles/FormModalComp.module.css";
import {addNewDog} from "../store";


export const FormModalComp = () => {
  const dispatch = useDispatch();
  const { temps } = useSelector(state => state.temps );
  
  const {
    name,
    height,
    weight,
    average_lifespan,
    temperaments,
    formState,
    onInputChange,
  } = useForm({
    name: "",
    height: "0",
    weight: "0",
    average_lifespan: 0,
    temperaments: [],
  });

  const handleHeightChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    onInputChange({ target: { name: "height", value: newValue } });
  };

  const handleWeightChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    onInputChange({ target: { name: "weight", value: newValue } });
  };

  const handleTemperamentChange = (event) => {
    const selectedTemperamentNames = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );

    // Maximum number of selections allowed
    const maxSelections = 3;

    if (selectedTemperamentNames.length > maxSelections) {
      // If the selected options exceed the limit, prevent the change
      event.preventDefault();
    } else {
      onInputChange({
        target: { name: "temperaments", value: selectedTemperamentNames },
      });
    }
  };


  const onSubmit = (event) => {
    event.preventDefault()
    dispatch(addNewDog(formState))
  }

  return (
    <form className={styles.formContainer} onSubmit={ onSubmit }>
      <h2 className={styles.formTitle}>Add new dog breed.</h2>
      <section className={styles.formSection}>
        <div className={styles.formInputs}>
          <label className={styles.inputLabels} htmlFor="name">
            Breed
          </label>
          <input
            className={styles.inputArea}
            type="text"
            placeholder="Breed name"
            name="name"
            value={name}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label className={styles.inputLabels} htmlFor="height">
            Height
          </label>
          <input
            className={styles.rangeInputs}
            type="range"
            min={0}
            max={100}
            step={1}
            name="height"
            value={height}
            onChange={handleHeightChange}
          />
          <span className={styles.rangeIndicator}>{height} cm</span>
        </div>
        <div className={styles.formInputs}>
          <label className={styles.inputLabels} htmlFor="weight">
            Weight
          </label>
          <input
            className={styles.rangeInputs}
            type="range"
            min={0}
            max={40}
            step={2}
            name="weight"
            value={weight}
            onChange={handleWeightChange}
          />
          <span className={styles.rangeIndicator}>{weight} kg</span>
        </div>
        <div className={styles.formInputs}>
          <label className={styles.inputLabels} htmlFor="average_lifespan">
            Lifespan
          </label>
          <input
            className={styles.inputNumber}
            type="number"
            name="average_lifespan"
            value={average_lifespan}
            onChange={onInputChange}
          />
        </div>
        <div className={styles.formInputs}>
          <label className={styles.inputLabels} htmlFor="temperaments">
            Temperaments <br />
            <span className={ styles.instructions }>(Hold ctrl key to select various temperaments. Select up to 3)</span>
          </label>
          <span className={ styles.rangeIndicator }>{temperaments.join(', ')}</span>
          <select
            id="temperaments"
            className={styles.dropTemps}
            name="temperaments"
            multiple // Enable multiple selection
            value={temperaments}
            onChange={handleTemperamentChange}
          >
            {temps.map((temperament) => (
              <option key={temperament.id} value={temperament.name}>
                {temperament.name}
              </option>
            ))}
          </select>
        </div>
      </section>
      <button type='submit' className={styles.submitButton}>Create</button>
    </form>
  );
};
