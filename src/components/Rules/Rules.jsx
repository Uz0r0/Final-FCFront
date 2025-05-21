import styles from './Rules.module.css'
import generalstyles from "../Style.module.css";
import ruleIcon from '../../assets/images/ruleIcon.png'
import rulesImg from '../../assets/images/rulesImg.png'

function Rules() {
  
    return (
        <div className={styles.Rules}>
            <div className={generalstyles.dflexAround}>
                <div className={generalstyles.FCImg}>
                    <img src={rulesImg} alt="" />
                </div>
                <div>
                    <h1 className={styles.Rulesh1}>The Rules of Fight Club:</h1>
                    <ul>
                        <li className={styles.RulesLi}><img src={ruleIcon} alt="" />You do not talk about Fight Club.</li>
                        <li className={styles.RulesLi}><img src={ruleIcon} alt="" />You do not talk about Fight Club.</li>
                        <li className={styles.RulesLi}><img src={ruleIcon} alt="" />If someone yells "stop", goes limp, or taps out, the fight is over.</li>
                        <li className={styles.RulesLi}><img src={ruleIcon} alt="" />Only two guys to a fight.</li>
                        <li className={styles.RulesLi}><img src={ruleIcon} alt="" />Battles must be fair — no chaos, just clean one-on-one matchups.</li>
                        <li className={styles.RulesLi}><img src={ruleIcon} alt="" />No spam, no nonsense — bring only your best taste.</li>
                        <li className={styles.RulesLi}><img src={ruleIcon} alt="" />Fights will go on as long as they have to.</li>
                        <li className={styles.RulesLi}><img src={ruleIcon} alt="" />If this is your first night at Fight Club, you have to fight.</li>
                    </ul>
                </div>
            </div>  
            <div>
                <a href="https://www.youtube.com/watch?v=ITltPm5a228"><button className={styles.btnStyle}>GET MORE DETAILS</button></a>
            </div>    
        </div>      
    )
  }
  
  export default Rules 