import {useDispatch, useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

import styles from './styles/DogAddedComp.module.css'
import {getModalClose} from '../store'


export const DogAddedComp = () => {
  const dispatch = useDispatch()
  const { lastDog } = useSelector(state => state.dogs)
  const onCloseSuccess = () => {
    dispatch(getModalClose())
  };
  return (
    <main className={ styles.successMain }>
      <h2>New breed added!</h2>
      <img src="assets/added_logo.png" alt="checked" />
      <Link onClick={onCloseSuccess} className={ styles.newDogLink } to={`/home/${lastDog.id}`}>Check it out</Link>
    </main>
  )
}
