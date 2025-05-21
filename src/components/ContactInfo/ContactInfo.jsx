import styles from './ContactInfo.module.css'
import generalstyles from "../Style.module.css";
import Map from "../../assets/images/Map.png"
import facebook from "../../assets/images/facebook.png"
import instagram from "../../assets/images/instagram.png"
import bird from "../../assets/images/bird.png"
import Phone from "../../assets/images/Phone.png"
import GPS from "../../assets/images/GPS.png"


function ContactInfo() {
  
    return ( 
        <div>
            <div className={styles.MapBlock}>
                <h1 className={styles.Ch1}>Contact us</h1>
                <p>We are happy to answer your questions and suggestions.</p>
                <img className={styles.Map} src={Map} alt="" />
            </div>
            <div className={styles.ContactRow}>
                <div className={styles.ContactItem}>
                    <p>Follow us</p>
                    <div className={styles.Icons}>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={facebook} alt="" /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={instagram} alt="" /></a>
                        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src={bird} alt="" /></a>
                    </div>
                </div>
                <div className={styles.VerticalLine}></div>
                <div className={styles.ContactItem}>
                    <img src={Phone} alt="" />
                    <p className={styles.Cp}>+996 508 505 009</p>
                </div>
                <div className={styles.VerticalLine}></div>
                <div className={styles.ContactItem}>
                    <img src={GPS} alt="" />
                    <a className={styles.Cp} href="https://www.google.com/maps/place/%D0%9D%D0%B8%D0%B3%D0%B5%D1%80/@17.5419263,2.7875811,6z/data=!3m1!4b1!4m14!1m7!3m6!1s0x10a06c0a948cf5d5:0x108270c99e90f0b3!2z0JDRhNGA0LjQutCw!8m2!3d-8.783195!4d34.508523!16zL20vMGRnM24x!3m5!1s0x1199ec7ac6a1af5d:0xc933920a158e24d4!8m2!3d17.607789!4d8.081666!16zL20vMDVjYzE?entry=ttu&g_ep=EgoyMDI1MDUwNy4wIKXMDSoASAFQAw%3D%3D">Shah's house</a>
                </div>
            </div>
        </div>
       
       
    )
  }
  
  export default ContactInfo 