import React from 'react'
import styles from './styles.module.css';
import logo from '../../assets/logo2.png';
import dp from '../../assets/dp.jpg';
import { Link } from 'react-router-dom';


const Dashboard = () => {
return(
    <div className={styles.container}>
        <div className={styles.navbar}>
                <div className={styles.logo}>
                    <img src={logo} alt="Logo" />
                </div>
                <div className={styles.dp}>
                    <img src={dp} alt="Logo" />
                    <p><b>Esther Williams</b></p>
                    <small>Receptionist</small>
                </div>
                <div className={styles.links}>
                   <ul>
                    <Link>
                    <div className={styles.active}></div>
                    <li>
                        <span class="material-icons">dashboard</span> Dashboard
                    </li>
                    </Link>
                    <Link>
                    <div className={styles.active}></div>
                    <li>
                    <span class="material-icons">how_to_reg</span> Guest <span class="material-icons">keyboard_arrow_down</span>
                    </li>
                    </Link>
                    <Link>
                    <div className={styles.active}></div>
                    <li>
                        <span class="material-icons">content_paste</span> 
                        Visitors Log
                    </li>
                    </Link>
                    <Link>
                    <div className={styles.active}></div>
                    <li><span class="material-icons">how_to_reg</span> 
                    PreBooked Guest</li>
                    </Link>
                    <Link>
                    <div className={styles.active}></div>
                    <li><span class="material-icons">toggle_off</span> 
                    Logout
                    </li>
                    </Link>
                   </ul>
                </div>
        </div>
        <div className={styles.main}>
        <div className={styles.navigation}>
            

            </div>

        <div className={styles.cardContainer}>
            <div className={styles.grid}>
            <div className={`${styles.card} ${styles.blue}`}>
            <div className={styles.grids}>
                <div className={styles.CardText}>
                    <h3>120</h3>
                    <p>Visitors Today</p>
                </div>  
                <div className={styles.cardText}>
                    <span class="material-icons">how_to_reg</span> 
                </div>           
            </div>

            </div>
            <div className={`${styles.card} ${styles.magenta}`}>
            <div className={styles.grids}>
                <div className={styles.CardText}>
                    <h3>100</h3>
                    <p>Checked-In Today</p>
                </div>  
                <div className={styles.cardText}>
                    <span class="material-icons">dashboard</span> 
                </div>           
            </div>
            </div>
            <div className={`${styles.card} ${styles.green}`}>
            <div className={styles.grids}>
                <div className={styles.CardText}>
                    <h3>20</h3>
                    <p>Checked-Out Today</p>
                </div>  
                <div className={styles.cardText}>
                    <span class="material-icons">dashboard</span> 
                </div>           
            </div>
            </div>
            <div className={`${styles.card} ${styles.yellow}`}>
            <div className={styles.grids}>
                <div className={styles.CardText}>
                    <h3>400</h3>
                    <p>Visitors This Month</p>
                </div>  
                <div className={styles.cardText}>
                    <span class="material-icons">dashboard</span> 
                </div>           
            </div>
            </div>

            </div>

        </div>

        <div className={styles.checkContainer}>
        <div className={styles.gridx}>
        <div className={styles.myCard}>
            <p>Visitor's Analytics</p>
       
      
  
        </div> 
        <div className={styles.myCard}>
        
        </div>
        <div className={styles.myCard}>
        
        </div>
        </div>         

        </div> 


</div>
    </div>
);
}
export default Dashboard;