import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { FormModalComp } from './FormModalComp'

import styles from './styles/NavBarComp.module.css'
import {openFormModal} from '../store'
import {DogAddedComp} from './DogAddedComp'

export const NavBarComp = () => {

  const dispatch = useDispatch()
  const { modal, successModal } = useSelector(state => state.dogs)

   const onFormModal = () => {
    if (!modal) return dispatch(openFormModal(true))
    return dispatch(openFormModal(false));
   };

   


  return (
    <nav className={ styles.navBar }>
      <section className={ styles.navBrand }>
        <img src="assets/dog_logo.png" alt="dog_logo" />
        <h2>Dogctyonary</h2>
      </section>
      <section className={ styles.navItems }>
        <NavLink to='/home' className={ styles.navLink }>Home</NavLink>
        <button onClick={ onFormModal } className={ styles.formButton }>New breeds</button>
        {
          modal ? 
          <FormModalComp /> :
          ''
        }
        {
          successModal ? 
          <DogAddedComp /> :
          ''
        }
        <NavLink to='/about' className={ styles.navLink }>About Me</NavLink>
      </section>
    </nav>
  )
}
