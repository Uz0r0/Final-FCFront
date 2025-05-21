import styles from './Comunity.module.css'
import generalstyles from '../Style.module.css';
import comunity from '../../assets/images/FCBackground.jpg'

function Comunity() {
  
    return (
        <div className={styles.comunity}>
            <div className={styles.cText}>
                <h1>Our Community</h1>
                <p>At Fight Club, it’s not just about winning — it’s about connecting with people who share your passion for great content. Whether you're defending your favorite movie or discovering a new track, every battle is a chance to learn something new.</p>
            </div>
            <img className={generalstyles.FCImg} src={comunity} alt="" />
        </div>
    )     
  }
  
  export default Comunity
  