import styles from './MainInfo.module.css'
import generalstyles from "../Style.module.css";
import FightClub from '../../assets/images/FightClub.png'

function MainInfo() {
  
    return ( 
        <div className={styles.MainInfo}>
            <div className={generalstyles.dflexAround}>
                <div className={styles.MainInfoText}>
                    <h1 className={styles.Mainh1size}>Welcome to Fight Club!</h1>
                    <div>
                        <p className={styles.MainInfop}>Here, we host epic taste battles! <br /> Music, anime, movies — everyone has their favorites, <br /> but which one is truly the best?</p>
                        <p className={styles.MainInfop}>Fight Club is where your preferences become your weapon. Sign up, fill out your profile with your top picks, and challenge other members. Compare your favorite music, shows, and movies, vote, and prove that your choices reign supreme!</p>
                    </div>    
                </div>
                <div className={generalstyles.FCImg}>
                    <img src={FightClub} alt="" />
                </div>
            </div>
        </div>
        
           
    )
  }
  
  export default MainInfo 