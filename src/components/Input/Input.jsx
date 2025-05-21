import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import styles from './Input.module.css';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    const login = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:8080/auth/login", { username, password });

            const token = res.data.accessToken || res.data.token;
            if (token) {
                localStorage.setItem("access_token", token);
                localStorage.setItem("username", username);
                navigate(`/profile/${username}`);
            } else {
                setMessage("Token not received from server");
            }
        } catch (error) {
            console.log(error);
            setMessage("Incorrect login or password.");
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
                <form onSubmit={login} className={styles.formContainer}>
                    <div className={styles.inputStyle}>
                        <input
                            type="text"
                            placeholder="NickName"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    <div className={styles.spacing}></div>
                    <div className={styles.inputStyle}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                    { message && <div className={styles.error}>{message}</div>}
                    <div className={styles.spacing}></div>
                    <button type="submit" className={styles.btnStyle}>Log in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
