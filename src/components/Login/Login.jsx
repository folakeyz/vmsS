import React from 'react'
import styles from './styles.module.css';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/white.png';

const Login = () => {
    return(
        <div className={styles.container}>
                 <div className={styles.login}>
                
                 <div className={styles.logo}>
                {/* <img src={logo2} alt="Logo" /> */}
                <img src={logo} alt="Logo" />
                </div>   
                <div className={styles.form}>
               <h2>LOGIN</h2>
               <form>
                   <div className={styles.formCont}>
                       <label>Email Address</label>
                    <input type="email" name="email" value="" onChange="" />
                   </div>

                   <div className={styles.formCont}>
                       <label>Password</label>
                    <input type="password" name="password" value="" onChange="" />
                   </div>

                   
                   <div className={styles.formCont}>
                    <input type="submit" name="login" value="Login" onChange="" />
                   </div>
               </form>

                </div>   
                </div>   
        </div>
    )
}
export default Login;