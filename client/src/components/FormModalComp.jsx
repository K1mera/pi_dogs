import { useDispatch, useSelector } from "react-redux";
import { useForm } from "../hooks";

import styles from "./styles/FormModalComp.module.css";
import {addNewDog} from "../store";
import {useState} from "react";



const formValidations = {
  name: [
    (value) => value.length >= 3 && value.length <= 17,
    "Name should be between 3 and 17 characters.",
  ],
  height: [(value) => value !== 0, "Height shouldn't be 0."],
  weight: [(value) => value !== 0, "Weight shouldn't be 0."],
  average_lifespan: [
    (value) => value.length >= 1,
    "Lifespan should be more than 0.",
  ],
};


export const FormModalComp = () => {
  const dispatch = useDispatch();
  const { temps } = useSelector(state => state.temps );
  
  const [formSubmitted, setformSubmitted] = useState(false);

  const {
    name,
    height,
    weight,
    average_lifespan,
    temperaments,
    formState,
    onInputChange,
    nameValid,
    heightValid,
    weightValid,
    average_lifespanValid,
    isFormValid,
  } = useForm(
    {
      name: "",
      height: 0,
      weight: 0,
      average_lifespan: 0,
      temperaments: [],
    },
    formValidations
  );

 

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

    const maxSelections = 3;

    if (selectedTemperamentNames.length > maxSelections) {
     
      event.preventDefault();
    } else {
      onInputChange({
        target: { name: "temperaments", value: selectedTemperamentNames },
      });
    }
  };


  const onSubmit = (event) => {
    event.preventDefault()
    setformSubmitted(true);

    if (!isFormValid) return;
    dispatch(addNewDog(formState))
  }

  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <h2 className={styles.formTitle}>Add new dog breed.</h2>
      <section className={styles.formSection}>
        <div className={styles.formInputs}>
          <label className={styles.inputLabels} htmlFor="name">
            Breed
            {nameValid && formSubmitted ? (
              <span className={styles.errorMessage}>{nameValid}</span>
            ) : (
              ""
            )}
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
            {heightValid && formSubmitted ? (
              <span className={styles.errorMessage}>{heightValid}</span>
            ) : (
              ""
            )}
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
            {weightValid && formSubmitted ? (
              <span className={styles.errorMessage}>{weightValid}</span>
            ) : (
              ""
            )}
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
            {average_lifespanValid && formSubmitted ? (
              <span className={styles.errorMessage}>
                {average_lifespanValid}
              </span>
            ) : (
              ""
            )}
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
            <span className={styles.instructions}>
              (Hold ctrl key to select various temperaments. Select up to 3)
            </span>
          </label>
          <span className={styles.rangeIndicator}>
            {temperaments.join(", ")}
          </span>
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
      <button type="submit" className={styles.submitButton}>
        Create
      </button>
    </form>
  );
};
