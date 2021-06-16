import styles from './HeroBanner.module.css'
export const HeroBanner = ({ button, description, heading, image }) => {
  return (
    <section className= {styles.container} style={{ "backgroundImage":`url(${image.asset.url})`}}>
      <h2 className={styles.h2}>{ heading }</h2>
      <p className={styles.p}>{ description }</p>
      <button className={styles.button}>{ button.text }</button>
    </section>
  )
}