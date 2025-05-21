import { NavLink } from "react-router-dom";
import styles from '../Input/Input.module.css';
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Inputreg = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const Register = async (e) => {
        e.preventDefault();

        if(password.length < 6){
            setMessage("Password must be at least 6 characters.");     
            return;           
        }

        try {  
            const res = await axios.post("http://localhost:8080/auth/register", { username, email, password});
            
            const token = res.data.accessToken || res.data.token;

            if (token) {
                localStorage.setItem("access_token", token);
                localStorage.setItem("refresh_token", res.data.refreshToken);  
                localStorage.setItem("username", username);
                navigate(`/staring`)
            } else {
                setMessage("Token not received from server");
            }

        } catch (error) {
            console.log(error);
            setMessage("A user with login " + username + " already exists.");
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <NavLink
                    to="/login"
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    Log in
                </NavLink>
                <NavLink
                    to="/register"
                    className={({ isActive }) =>
                        isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                    }
                >
                    Sign up
                </NavLink>
            </div>
            <div>
                <form onSubmit={Register} className={styles.formContainer}>
                    <div className={styles.inputStyle}>
                        <input
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            type="text"
                            placeholder="NickName"
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.spacing}></div>
                    <div className={styles.inputStyle}>
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            placeholder="Email"
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.spacing}></div>
                    <div className={styles.inputStyle}>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            placeholder="Password"
                            className={styles.inputField}
                        />
                    </div>
                    { message && <div className={styles.error}>{message}</div>}
                    <div className={styles.spacing}></div>
                    <button type="submit" className={styles.btnStyle}>Sign up</button>                    
                </form>
            </div>
        </div>
    );
};

export default Inputreg;
