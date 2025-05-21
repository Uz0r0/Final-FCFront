import styles from './TeamInfo.module.css'
import generalstyles from '../Style.module.css';
import DevCard from '../DevCard/DevCard';
import Manas  from '../../assets/images/Manas.jpg'
import Uzar  from '../../assets/images/Uzar.jpg'


function TeamInfo() {
  
    return (
        <div className={styles.TeamInfo}>
            <h1 className={styles.TeamH1}>Our Team</h1>
            <div className={generalstyles.dflexAround}>
                <DevCard 
                Img = {Uzar}
                Name = "Keneshbekov Uzar"
                Info = "Sigma developer, front warrior"
                />
                <DevCard 
                Img = {Manas}
                Name = "Abdrasulov Manas"
                Info = "Genius, billionaire, playboy, black devloper"/>
            </div>  
        </div>
    )
  }
  
  export default TeamInfo
  