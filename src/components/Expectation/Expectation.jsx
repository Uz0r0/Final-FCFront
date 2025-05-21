import ExCard from "../ExCard/ExCard"
import styles from './Expectation.module.css'
import generalstyles from "../Style.module.css";

function Expectation() {
  
    return ( 
        <div className={styles.Expectation}>
            <div>
                <h1 className={styles.Exh1}>What to expect:</h1>
                <div className={generalstyles.dflexBetween}>
                    <ExCard 
                        title = "🔥 Exciting taste battles"
                        description = "Join the ultimate showdown where your taste takes center stage! Choose the best tracks, series, and movies, and see how your favorites stack up against others."
                    />
                    <ExCard 
                        title = "🏆 Personal profiles"
                        description = "Create your own profile and showcase your unique taste. Share your top tracks, series, and movies with the community and see how you rank among fellow enthusiasts."
                    />
                    <ExCard 
                        title = "📊 Rankings and results"
                        description = "Track your progress and discover whose taste truly dominates the Fight Club! Compete in battles, climb the leaderboards, and celebrate your wins."
                    />
                </div> 
            </div>
        </div>      
    )
  }
  
  export default Expectation 