import styles from './Footer.module.css'
import generalstyles from "../Style.module.css";
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import bird from "../../assets/images/bird.png"

function Footer() {
  
    return ( 
        <div className={styles.Footer}>
            <div className={generalstyles.dflexBetween}>
                <div>
                    <a href="/"><h1>Fight Club</h1></a>
                </div>
                <div className={styles.navWidth}>
                    <div className={generalstyles.dflexAround}>
                        <a href="/contact" className={styles.navLink}>Contact us</a>
                        <a href="/about" className={styles.navLink}>About us</a>
                        <a href="/battle" className={styles.navLink}>Battle</a>
                    </div>
                </div>
            </div>
            <div className={styles.socImg}>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={facebook} alt="" /></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={instagram} alt="" /></a>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={bird} alt="" /></a>
            </div>
        </div>  
    )
  }
  
  export default Footer 