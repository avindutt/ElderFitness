import React from 'react';
import styles from '../styles/footer.module.css';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div>
      <footer>
        <span className={styles.copy}>Copyright ElderFitness&copy;</span>
        <div className={styles.links}>
            <a href="#">About</a>
            <a href="#">Disclaimer</a>
            <Link to='/create-plan'><span>Contact Us</span></Link>
        </div>
      </footer>
    </div>
  )
}
