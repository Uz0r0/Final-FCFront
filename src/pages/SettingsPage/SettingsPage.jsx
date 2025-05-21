import { useEffect, useState } from "react";
import axios from "axios";
import styles from '../../components/Style.module.css'
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"

function SettingsPage() {
    const [music, setMusic] = useState("");
    const [musician, setMusician] = useState("");
    const [actor, setActor] = useState("");
    const [anime, setAnime] = useState("");
    const [film, setFilm] = useState("");
    const [meme, setMeme] = useState("");
    const [message, setMessage] = useState("");
    const [cardData, setCardData] = useState(null);
    
    useEffect (() => {
        const fetchCardData = async () => {
            try {
                const token = localStorage.getItem("access_token");
                const res = await axios.get("http://localhost:8080/card/get-cardData", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                setCardData(res.data); 
            } catch (err) {
                console.error("Ошибка при загрузке карточки:", err);
            }
        };

        fetchCardData();
    }, []);


    const Picks = async (e) => {
        e.preventDefault();

        const finalMusic = music || cardData.music;
        const finalMusician = musician || cardData.musician;
        const finalActor = actor || cardData.actor;
        const finalAnime = anime || cardData.anime;
        const finalFilm = film || cardData.film;
        const finalMeme = meme || cardData.meme;

        try {
            const token = localStorage.getItem("access_token");

            if (!token) {
                setMessage("Not authenticated. Please log in.");
                return;
            }

            const res = await axios.put("http://localhost:8080/card/change",
                {  
                    music: finalMusic,
                    musician: finalMusician,
                    actor: finalActor,
                    anime: finalAnime,
                    film: finalFilm,
                    meme: finalMeme 
                },
                {
                    headers: { 
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            setMessage("The update was successful");
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            setMessage("The update was not successful");
        }
    };
        
    return (
      <>
        <div>
            <div className={styles.HeaderBack}>
                <Header />
            </div>
            <div className={styles.VerticalLine}></div>
            <div className={`${styles.gradientBackProfile} ${styles.center}`}>
                <div className={styles.textWrapper}>
                    <h1 className={styles.a}>Editing your profile</h1>
                    <a href={`/profile/${localStorage.getItem("username")}`}>Go to profile</a>
                </div>
                <div className={styles.PicksCard}>
                    <form onSubmit={Picks} >
                        <div className={styles.formContainer}>
                            <a href="/setPassword" className={styles.passwordStyle}>Change password</a>
                            <div className={styles.inputStyleS}>
                                <input
                                    onChange={(e) => setMusic(e.target.value)}
                                    value={music}
                                    type="text"
                                    placeholder="Music"
                                    className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyleS}>
                                <input
                                    onChange={(e) => setMusician(e.target.value)}
                                    value={musician}
                                    type="text"
                                    placeholder="Musician"
                                    className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyleS}>
                                <input
                                    onChange={(e) => setActor(e.target.value)}
                                    value={actor}
                                    type="text"
                                    placeholder="Actor"
                                    className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyleS}>
                                <input
                                    onChange={(e) => setAnime(e.target.value)}
                                    value={anime}
                                    type="text"
                                    placeholder="Anime"
                                    className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyleS}>
                                <input
                                    onChange={(e) => setFilm(e.target.value)}
                                    value={film}
                                    type="text"
                                    placeholder="Film"
                                    className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyleS}>
                                <input
                                    onChange={(e) => setMeme(e.target.value)}
                                    value={meme}
                                    type="text"
                                    placeholder="Meme"
                                    className={styles.inputField}
                                />
                            </div>
                        </div> 
                        {message && <div className={styles.UpdateMessage}>{message}</div>}
                        <button type="submit" className={styles.btnStyle}>Save changes</button> 
                    </form>
                </div>
            </div>
            <div className={styles.VerticalLine}></div>
            <div className={styles.footerBack}>
                <Footer />
            </div> 
        </div>
      </>
    );
};
 
export default SettingsPage


