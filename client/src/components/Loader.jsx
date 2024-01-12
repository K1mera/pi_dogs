import styles from './styles/Loader.module.css'
export const Loader = () => {
    
  return (
    <main className={ styles.loaderContainer }>
        <span className={ styles.loader }></span>
        <h1>Wait please, we're bringing the dogs 🐶. </h1>
    </main>

  ) 
}
