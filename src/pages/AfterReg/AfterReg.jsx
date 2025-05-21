import { NavLink } from "react-router-dom";
import styles from '../../components/Style.module.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AfterReg() {
    const navigate = useNavigate();
    const [music, setMusic] = useState("");
    const [musician, setMusician] = useState("");
    const [actor, setActor] = useState("");
    const [anime, setAnime] = useState("");
    const [film, setFilm] = useState("");
    const [meme, setMeme] = useState("");
    const [message, setMessage] = useState("");
    
    const StartingPicks = async (e) => {
    e.preventDefault();
    try {
        const token = localStorage.getItem("access_token");
        const savedUsername = localStorage.getItem("username");

        if (!token) {
            setMessage("Not authenticated. Please log in.");
            return;
        }

        if (music.length < 1 || musician.length < 1 || actor.length < 1 || anime.length < 1 || film.length < 1 || meme.length < 1) {
            setMessage("Fill in all fields");
            return;
        }

        const res = await axios.post("http://localhost:8080/card/add",
            { music, musician, actor, anime, film, meme },
            {
                headers: { 
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            }
        );
        navigate(`/profile/${savedUsername}`);
        console.log(res.data);
        setMessage("ok");
    } catch (error) {
        console.error("Error:", error.response?.data || error.message);
        setMessage("no");
    }
};
        
    return (
      <>
            <div className={`${styles.gradientBackProfile} ${styles.center}`}>
                <h1>Congratulations on your successful registration!</h1>
                <p className={styles.textCenter}>Now you can enter information about your favorite movies, songs, anime and etc.
                Don't worry - you can always change this information later in your profile settings.</p>
                <div className={styles.PicksCardReg}>
                    <form onSubmit={StartingPicks}>
                        <div className={styles.formContainer}>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setMusic(e.target.value)}
                                value={music}
                                type="text"
                                placeholder="Music"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setMusician(e.target.value)}
                                value={musician}
                                type="text"
                                placeholder="Musician"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setActor(e.target.value)}
                                value={actor}
                                type="text"
                                placeholder="Actor"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setAnime(e.target.value)}
                                value={anime}
                                type="text"
                                placeholder="Anime"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
                                <input
                                onChange={(e) => setFilm(e.target.value)}
                                value={film}
                                type="text"
                                placeholder="Film"
                                className={styles.inputField}
                                />
                            </div>
                            <div className={styles.inputStyle}>
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
                        <button type="submit" className={styles.btnStyle}>Submit</button> 
                    </form>
                </div>
            </div>    
      </>
    );
};
 
export default AfterReg