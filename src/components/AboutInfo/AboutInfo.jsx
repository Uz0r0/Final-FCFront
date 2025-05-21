import styles from './AboutInfo.module.css'
import generalstyles from "../Style.module.css";
import img from "../../assets/images/AboutImg.png"

function AboutInfo() {
  
    return ( 
        <div className={generalstyles.dflexAround}>
            <div className={generalstyles.FCImg}>
                <img src={img} alt="" />
            </div>
            <div className={styles.textStyle}>
                <div className={styles.blockStyle1}>
                    <h1 className={styles.texth1}>Who We Are</h1>
                    <p>Fight Club is an online platform that brings people together through epic taste battles. Whether it's music, anime, movies, or anything else that sparks debate, we believe that personal preferences deserve a place to shine.</p>
                </div>
                <div>   
                    <h1 className={styles.texth1}>Why We Created Fight Club</h1>
                    <p>We know that everyone has strong opinions about their favorite songs, shows, and films. Our mission is to create a community where you can challenge others, discover new favorites, and prove that your taste is truly the best.</p>
                </div>
            </div>    
        </div>    
    )
  }
  
  export default AboutInfo 